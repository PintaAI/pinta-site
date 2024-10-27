import fs from 'fs';
import path from 'path';

interface VercelProject {
  name: string;
  framework: string;
  latestDeployments: Array<{
    url: string;
    meta: {
      framework?: string;
    };
  }>;
}

interface ProjectData {
  title: string;
  framework: string;
  deploymentUrl: string;
  image: string;
}

const CACHE_DIR = path.join(process.cwd(), 'public', 'cached-screenshots');
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function getProductionUrl(projectName: string): string {
  return `${projectName}.vercel.app`;
}

async function getCachedScreenshot(projectName: string): Promise<string | null> {
  const cachedPath = path.join(CACHE_DIR, `${projectName}.png`);
  
  if (fs.existsSync(cachedPath)) {
    const stats = fs.statSync(cachedPath);
    const age = Date.now() - stats.mtimeMs;
    
    if (age < CACHE_DURATION) {
      // Return the cached screenshot path relative to public directory
      return `/cached-screenshots/${projectName}.png`;
    }
  }
  return null;
}

async function fetchAndCacheScreenshot(projectName: string, url: string): Promise<string> {
  const apiKey = process.env.SCREENSHOT_API_KEY;
  if (!apiKey) {
    throw new Error('SCREENSHOT_API_KEY is not set');
  }

  const screenshotUrl = `https://shot.screenshotapi.net/screenshot?token=${apiKey}&url=${encodeURIComponent(`https://${url}`)}&width=1280&height=720&fresh=true&output=image&file_type=png&wait_for_event=load`;
  
  try {
    const response = await fetch(screenshotUrl);
    if (!response.ok) throw new Error('Failed to fetch screenshot');
    
    const buffer = await response.arrayBuffer();
    const cachedPath = path.join(CACHE_DIR, `${projectName}.png`);
    
    fs.writeFileSync(cachedPath, Buffer.from(buffer));
    
    // Return the cached screenshot path relative to public directory
    return `/cached-screenshots/${projectName}.png`;
  } catch (error) {
    console.error('Error fetching screenshot:', error);
    return '/professional-photo.png'; // Fallback image
  }
}

async function getProjectScreenshot(projectName: string, url: string): Promise<string> {
  // Try to get cached screenshot first
  const cachedScreenshot = await getCachedScreenshot(projectName);
  if (cachedScreenshot) {
    return cachedScreenshot;
  }

  // If no valid cache exists, fetch and cache new screenshot
  return fetchAndCacheScreenshot(projectName, url);
}

export async function getVercelProjects(): Promise<ProjectData[]> {
  const token = process.env.VERCEL_ACCESS_TOKEN;
  if (!token) {
    throw new Error('VERCEL_ACCESS_TOKEN is not set');
  }

  const response = await fetch('https://api.vercel.com/v9/projects', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Vercel projects');
  }

  const data = await response.json();
  const projects: VercelProject[] = data.projects;

  return Promise.all(
    projects
      .filter(project => project.latestDeployments?.[0]?.url)
      .map(async project => {
        const productionUrl = getProductionUrl(project.name);
        const screenshot = await getProjectScreenshot(project.name, productionUrl);
        
        return {
          title: project.name.replace(/-/g, ' ').split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          framework: project.framework || 'Web',
          deploymentUrl: `https://${productionUrl}`,
          image: screenshot
        };
      })
  );
}
