import { Card } from "../ui/card"
import Image from "next/image"
import Link from "next/link"
import { getVercelProjects } from "@/lib/vercel"

async function ProjectsSection() {
  let projects;
  try {
    projects = await getVercelProjects();
  } catch (error) {
    console.error('Failed to fetch Vercel projects:', error);
    return (
      <div className="p-4 text-red-500">
        Error loading projects. Check the console for details.
      </div>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">MY WORK</h2>
            <h3 className="text-3xl font-bold text-foreground">Recent Projects</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <Link href={project.deploymentUrl} key={index} target="_blank" rel="noopener noreferrer">
              <Card className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2} // Prioritize loading first 2 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {project.framework}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection }
