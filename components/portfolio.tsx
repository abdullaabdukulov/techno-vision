"use client"

import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Enterprise AI Platform",
      description: "End-to-end AI solution for autonomous decision-making",
      tech: ["Python", "TensorFlow", "React", "AWS"],
      thumbnail: "Project 1",
    },
    {
      title: "Real-time Analytics Engine",
      description: "High-performance data processing and visualization",
      tech: ["Scala", "Spark", "PostgreSQL", "Node.js"],
      thumbnail: "Project 2",
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable microservices architecture on Kubernetes",
      tech: ["Docker", "Kubernetes", "Terraform", "Go"],
      thumbnail: "Project 3",
    },
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Portfolio & <span className="text-accent">Case Studies</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Real-world examples of transformation and innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border/50 rounded-lg md:rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Thumbnail */}
              <div className="relative h-32 md:h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <span className="text-sm md:text-base text-muted-foreground font-semibold text-center px-4">
                    {project.thumbnail}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="text-xs px-2 md:px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-semibold text-sm md:text-base">
                  View Details <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
