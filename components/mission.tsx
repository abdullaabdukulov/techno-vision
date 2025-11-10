"use client"

import { Zap, Code2, Brain, Database } from "lucide-react"

export default function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 px-4 md:px-6 bg-card/50 border-y border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-card to-background border border-border/50 rounded-lg md:rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Geometric Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-accent font-semibold mb-6 md:mb-8">
              Turning complex problems into simple, scalable, AI-powered solutions.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10">
              We believe that technology should empower businesses to reach their full potential. Through innovative AI
              solutions and engineering excellence, we help organizations transform their operations and unlock new
              possibilities.
            </p>

            {/* Animated Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Brain, label: "AI Innovation" },
                { icon: Code2, label: "Engineering" },
                { icon: Zap, label: "Performance" },
                { icon: Database, label: "Scalability" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 md:gap-3 p-4 rounded-lg hover:bg-accent/10 transition-colors group animate-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-xs md:text-sm font-semibold text-foreground text-center">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
