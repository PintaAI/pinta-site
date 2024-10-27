"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min((scrollY - 50) / 100, 0.95); // Reduced max opacity to 0.95
      setOpacity(Math.max(0, newOpacity));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        opacity > 0
          ? "border-border/40 backdrop-blur-lg"
          : "border-transparent"
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, / ${opacity})`
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/pintabot-logo.png"
                alt="PintaBot Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold tracking-tighter text-foreground">
                Pintabot
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <ModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
