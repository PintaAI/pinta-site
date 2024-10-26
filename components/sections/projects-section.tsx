import { Card } from "../ui/card"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Personal Portfolio",
    description: "Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/professional-photo.png",
    link: "/"
  },
  {
    title: "Website Development Service",
    description: "Professional website development service for content creators and small businesses. Fast turnaround time and affordable pricing.",
    tech: ["Next.js", "React", "Tailwind", "UI/UX"],
    image: "/professional-photo.png",
    link: "/"
  }
]

export function ProjectsSection() {
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
            <Link href={project.link} key={index}>
              <Card className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
