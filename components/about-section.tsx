import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Brain } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React.js, JavaScript, TypeScript, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Firebase, Firestore, Authentication, Cloud Storage",
    },
    {
      icon: Cloud,
      title: "Cloud & Development",
      description: "Firebase Hosting, Vercel, GitHub, CI/CD",
    },
    {
      icon: Brain,
      title: "Software Development",
      description: "Version Control (Git), UI/UX Design, Problem-Solving",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm a forward-thinking computer science student with a love for creating innovative solutions and learning new
            technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground text-pretty">
                Currently in my junior year at the University of Minnesota’s College of Science and Engineering, I have more than four years of coding experience and a strong foundation that bridges computer science theory with real-world application.


              </p>
              <p className="text-muted-foreground text-pretty">
                I'm particularly interested in full-stack development, artificial intelligence, cloud-computing, and creating user-centered applications that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">When I'm not coding</h4>
              <p className="text-muted-foreground text-pretty">
                You can find me contributing to collaborative projects through University of Minnesota student groups and exploring the latest tech trends. I also enjoy playing golf and practicing guitar.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-card-foreground mb-1">{skill.title}</h5>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
