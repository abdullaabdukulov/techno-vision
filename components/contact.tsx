"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">Ready to transform your business? Let's talk.</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border/50 rounded-xl p-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all flex items-center justify-center gap-2 group"
          >
            {submitted ? (
              "✓ Message Sent!"
            ) : (
              <>
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Or reach us directly:</p>
          <a href="mailto:hello@technovision.com" className="text-accent hover:underline font-semibold">
            hello@technovision.com
          </a>
        </div>
      </div>
    </section>
  )
}
