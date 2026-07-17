"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const links = [
    { href: "/", label: "Início" },
    { href: "/vagas", label: "Vagas" },
    { href: "/eventos", label: "Eventos" },
    { href: "/comunidade", label: "Comunidade" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--background)]/60 transition-colors duration-300">
      <div className="container flex h-20 items-center justify-between mx-auto px-6 max-w-7xl">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-heading font-black tracking-tight sm:inline-block text-[var(--foreground)] text-2xl group-hover:text-[var(--color-brand-primary)] transition-colors">
              Casa de Juniors
            </span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-all duration-300 hover:text-[var(--color-brand-primary)] hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[var(--color-brand-primary)] after:transition-transform after:duration-300 hover:after:scale-x-100",
                  pathname === link.href
                    ? "text-[var(--color-brand-primary)] after:scale-x-100"
                    : "text-foreground/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button variant="outline" className="hidden sm:flex">Login</Button>
          <Button className="hidden sm:flex">Cadastrar-se</Button>
        </div>
      </div>
    </header>
  )
}
