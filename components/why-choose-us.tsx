"use client"

import { CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Engineering Quality",
      description: "Production-grade code with rigorous testing and documentation",
    },
    {
      title: "Scalability",
      description: "Solutions designed to grow from thousands to millions of users",
    },
    {
      title: "3+ Years Experience",
      description: "Proven track record delivering enterprise AI solutions",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-accent">Techno Vision</span>?
          </h2>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <CheckCircle2 className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
