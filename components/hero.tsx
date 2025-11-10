"use client"

import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 overflow-hidden"
      id="hero"
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 md:top-20 right-5 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(102,204,255,0.05)_25%,rgba(102,204,255,0.05)_50%,transparent_50%,transparent_75%,rgba(102,204,255,0.05)_75%,rgba(102,204,255,0.05))] bg-[length:60px_60px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight animate-fade-in-up">
          AI-Powered <span className="text-accent">Software Solutions</span>
        </h1>

        <p
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-in-up px-4"
          style={{ animationDelay: "0.2s" }}
        >
          Transform your business with Techno Vision&apos;s innovative AI and software engineering solutions. Build,
          deploy, and scale with precision and security.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-in-up px-4"
          style={{ animationDelay: "0.4s" }}
        >
          <button className="group w-full sm:w-auto px-6 md:px-8 py-2 md:py-3 bg-foreground text-background rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group w-full sm:w-auto px-6 md:px-8 py-2 md:py-3 border border-accent/50 text-foreground rounded-full font-semibold hover:bg-accent/10 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
            <Play size={18} />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
