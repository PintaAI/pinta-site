"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
      <div className="container mx-auto">
        <nav className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-0 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo/pintabot-logo.png"
              alt="Pinta Logo"
              width={28}
              height={28}
              className="dark:brightness-100"
            />
            <span className="text-xl font-bold text-primary">inta</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {route.label}
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="block px-2 py-1 text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
