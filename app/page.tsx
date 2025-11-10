import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Mission from "@/components/mission"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import WhyChooseUs from "@/components/why-choose-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
