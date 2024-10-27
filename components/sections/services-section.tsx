import { Code2, Brain, Lightbulb, Bot, Palette, BarChart3 } from "lucide-react"
import { Card } from "../ui/card"

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Programming Solutions",
    description: "Custom Web & Tool Development: Membangun website dan tools khusus yang sesuai kebutuhan bisnis kamu, memastikan efisiensi dan performa yang maksimal.",
    gradient: "from-blue-500/20 to-cyan-400/20"
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "AI Integration & Automation",
    description: "AI-Powered Solutions for Business: Membantu bisnis kamu mengadopsi AI untuk mengotomatisasi tugas-tugas repetitif dan meningkatkan produktivitas secara keseluruhan.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Tech Consulting for AI Era",
    description: "Navigating the AI Revolution: Konsultasi teknologi untuk membantu kamu memahami dan memanfaatkan tren AI terbaru, supaya bisnis kamu tetap kompetitif di era digital.",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI Tools for Content Creators",
    description: "Empowering Content Creation with AI: Menyediakan solusi AI yang dirancang khusus untuk mempermudah kerja konten kreator, dari editing otomatis sampai analisis performa konten.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Branding & Strategy",
    description: "Crafting Strong Digital Identities: Mengembangkan identitas brand yang kuat dan strategi digital yang sesuai dengan target audiens kamu.",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Growth Marketing & Analytics",
    description: "Data-Driven Marketing for Growth: Menawarkan strategi pemasaran berbasis data untuk pertumbuhan bisnis yang berkelanjutan dan efektif.",
    gradient: "from-indigo-500/20 to-purple-500/20"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Aku tuh,<span className="text-primary">bisa apa aja si? 🤔</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ini beberapa skill dan layanan yang bisa aku kasih ke kamu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden p-6 bg-secondary/50 border-none hover:bg-secondary/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--${service.gradient}))` }}
              />
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
