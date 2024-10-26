import { Card } from "../ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Photo section */}
          <div className="lg:col-span-5">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/professional-photo.png"
                alt="Professional photo"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/80 mix-blend-overlay" />
              <div className="absolute inset-0 bg-secondary/20 backdrop-blur-[2px]" />
            </div>
          </div>

          {/* Content section */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Who <span className="text-primary">am I?</span>
              </h2>
              <h3 className="text-2xl font-bold text-muted-foreground">
                I&apos;m Rores Ez, a visual UX/UI Designer and Web Developer
              </h3>
            </div>

            <p className="text-muted-foreground">
              Aku bikin website murah dan cepat buat para konten kreator atau umkm yang pengen punya website untuk usaha mereka, coba bayangin 1 hari jadi dan mulai dari 100k aja
            </p>

            <Card className="bg-secondary/50 border-none p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-1">Name:</p>
                  <p>Rores Ez</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">From:</p>
                  <p>Wonosobo, Indonesia</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Age:</p>
                  <p>25</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Email:</p>
                  <p className="truncate">rorezxez@gmail.com</p>
                </div>
              </div>
            </Card>

            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
