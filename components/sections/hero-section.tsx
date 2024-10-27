"use client"
import { Button } from "../ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Cover } from "../ui/cover"
import { PricingSection } from "./pricing-section"
import { TextGenerateEffect } from "../ui/text-generate-effect"

export function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  const words = "Aku bikin website murah dan cepat buat para konten kreator atau umkm yang pengen punya website untuk usaha mereka, coba bayangin 1 hari jadi dan mulai dari 100k aja";

  return (
    <section className="relative min-h-screen bg-background text-foreground">
      {/* Background image container */}
      <div className="absolute inset-0 w-full h-1/2 overflow-hidden">
        <Image
          src="/professional-photo.png"
          alt="Professional photo"
          fill
          className="object-cover object-center grayscale"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container px-4 py-10 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-10 md:mt-16">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-lg">Halo Aku Rores ez!👋</h3>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Bikin Website<Cover>Cepet banget, 1 hari doang 🤯</Cover>
            </h1>
            <TextGenerateEffect words={words} />

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Contact Me
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Lihat Portofolio
              </Button>
              <Button variant="secondary" className="bg-secondary hover:bg-secondary/80">
                Pilih Paket
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <Link href="mailto:rorezxez@gmail.com" className="hover:text-primary transition-colors">
                  rorezxez@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>+62-857-2821-2056</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Wonosobo, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <PricingSection />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="w-1 h-24 bg-primary/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-primary"></div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
      >
        <div className="animate-bounce flex flex-col items-center text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-sm mt-2 text-muted-foreground">Informasi lebih lanjut</span>
        </div>
      </div>
    </section>
  )
}
