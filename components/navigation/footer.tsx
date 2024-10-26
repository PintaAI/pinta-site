import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 items-center justify-center gap-4 px-8 md:justify-start">
          <span className="text-sm text-muted-foreground">
            © 2024 Pinta. All rights reserved.
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/pintaai" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/company/pintaai" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:contact@pinta.ai">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
