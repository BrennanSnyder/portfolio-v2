"use client"

import { Mail, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "brennansnyder207@gmail.com",
      href: "mailto:brennansnyder207@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "brennans207",
      href: "https://www.linkedin.com/in/brennans207/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Minneapolis, MN",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="space-y-8 max-w-xl w-full">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">Let's Connect</h3>
              <p className="text-muted-foreground text-pretty mb-6 text-center">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Download My Resume</h4>
              <Button asChild variant="outline" className="bg-transparent">
  <a href="/resume.pdf" download>
    <Mail className="w-4 h-4 mr-2" />
    Download PDF Resume
  </a>
</Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
