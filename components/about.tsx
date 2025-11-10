"use client"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            About <span className="text-accent">Techno Vision</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A team of innovators building the future of AI-powered software solutions
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Innovation First",
              description: "We embrace cutting-edge technologies to solve complex business problems",
              icon: "✨",
            },
            {
              title: "Scalable Solutions",
              description: "Built to grow with your organization, from startup to large enterprise",
              icon: "📈",
            },
            {
              title: "Trusted Partner",
              description: "3+ years of proven expertise delivering mission-critical systems",
              icon: "🤝",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 bg-card border border-border/50 rounded-lg md:rounded-xl hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-3xl md:text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{value.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
