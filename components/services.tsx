"use client"

import { Zap, Brain, BarChart3, Cloud, GitBranch, Code2 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Automation",
      description: "Intelligent systems that learn and adapt to your business needs",
    },
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Custom solutions built with precision and scalability in mind",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights and strategic value",
    },
    {
      icon: Zap,
      title: "Machine Learning",
      description: "Predictive models that drive intelligent decision-making",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Robust, scalable cloud infrastructure for modern applications",
    },
    {
      icon: GitBranch,
      title: "DevOps Excellence",
      description: "Automated pipelines and continuous deployment strategies",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive AI and software solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group relative p-6 md:p-8 bg-card border border-border/50 rounded-lg md:rounded-xl hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-accent/10 rounded-full blur-2xl -z-10"></div>
                </div>

                {/* Icon */}
                <div className="mb-4 inline-block p-2 md:p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>

                {/* Title and Description */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Arrow */}
                <div className="mt-4 inline-block text-accent group-hover:translate-x-2 transition-transform">→</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
