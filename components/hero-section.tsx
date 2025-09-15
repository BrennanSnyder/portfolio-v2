import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Hi, I'm <span className="text-primary">Brennan Snyder</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white max-w-2xl mx-auto text-balance">
              B.S. Computer Science Student
              <br />
              University of Minnesota

            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              As a computer science major, I thrive on creating innovative solutions and exploring emerging technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8" asChild>
            <a href="#projects">View My Work</a>
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
           <a href="#contact">Get In Touch</a>
            </Button>
          </div>


          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/BrennanSnyder"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brennans207/"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:brennansnyder207@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
            <Mail className="w-6 h-6" />
            </a>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
