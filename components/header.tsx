"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Techno Vision" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#mission" className="text-sm hover:text-accent transition-colors">
            Mission
          </Link>
          <Link href="#services" className="text-sm hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="text-sm hover:text-accent transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="text-sm hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-foreground text-background rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border/50 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#mission" className="text-sm hover:text-accent transition-colors">
                Mission
              </Link>
              <Link href="#services" className="text-sm hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="text-sm hover:text-accent transition-colors">
                Contact
              </Link>
              <button className="px-4 py-2 bg-foreground text-background rounded-full font-semibold w-full hover:shadow-lg hover:shadow-accent/50 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
