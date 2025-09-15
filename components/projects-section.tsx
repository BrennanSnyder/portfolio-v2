import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Island Lake Rewards App",
      description:
        "Collaborated with another developer to design and build a full-stack loyalty rewards app for Island Lake Golf, deployed on iOS. Includes secure code generation, user authentication, real-time activity tracking, and a responsive admin dashboard for managing users, deals, and promotions.",
      image: "/island-lake-rewards.jpg", // add this image to your /public folder
      technologies: ["React.js", "Firebase", "JavaScript", "TypeScript", "CSS"],
      github: "https://github.com/KaydenVandecaveye/IslandLakeRewardsPortal",
      demo: "https://lnkd.in/ghxiVHwY",
    },
    {
      title: "Chess Game",
      description:
        "A fully functional two-player chess game with a terminal-based interface and intuitive gameplay logic, implementing all standard chess rules, move validation, and check/checkmate detection.",
      image: "/chess-game.png",
      technologies: ["Java"],
      github: "",
      demo: "", 
    },
    {
      title: "Image Editor",
      description:
        "A desktop image editing tool with filters, transformations, and metadata editing features, built with a focus on usability and performance for high-resolution images.",
      technologies: ["Python"],
      github: "", 
      demo: "", 
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The following projects reflect my experience, creativity, and dedication to building impactful software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow">
              {project.image && (
  <div className="aspect-video bg-muted">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>
)}

              <CardHeader>
                <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
