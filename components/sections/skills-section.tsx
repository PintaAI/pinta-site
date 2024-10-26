import { Card } from "@/components/ui/card"

const skills = [
  { name: "Next.js & React", percentage: 95 },
  { name: "Full-Stack Dev", percentage: 90 },
  { name: "Database & Auth", percentage: 85 },
  { name: "Community Design", percentage: 88 },
]

export function SkillsSection() {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex justify-center mb-16">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">EXPERTISE</h2>
          <h3 className="text-3xl font-bold text-foreground">Core Skills</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {skills.map((skill) => (
          <Card key={skill.name} className="bg-background border-primary/10 p-6 relative overflow-hidden hover:border-primary/30 transition-colors">
            <div className="relative z-10">
              <h4 className="text-4xl font-bold text-foreground mb-2">{skill.percentage}%</h4>
              <p className="text-muted-foreground">{skill.name}</p>
            </div>
            <div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/60" 
              style={{ width: `${skill.percentage}%` }}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}
