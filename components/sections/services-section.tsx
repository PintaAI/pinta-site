import { Code2, Box, Palette, HeadphonesIcon, Layers, BarChart3 } from "lucide-react"
import { Card } from "../ui/card"

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Creating modern and responsive websites with cutting-edge technologies"
  },
  {
    icon: <Box className="h-8 w-8 text-primary" />,
    title: "3D Design",
    description: "Crafting immersive 3D experiences and visualizations"
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Design Trends",
    description: "Implementing latest design trends and user experience patterns"
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
    title: "Customer Support",
    description: "Providing dedicated support and maintenance services"
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Branding",
    description: "Developing strong brand identities and visual languages"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Marketing",
    description: "Strategic digital marketing and growth solutions"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-16">
          My <span className="text-primary">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary/50 border-none hover:bg-secondary/70 transition-colors"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
