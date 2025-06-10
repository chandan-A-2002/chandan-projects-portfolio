
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar, IndianRupee, Users } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Shanti Solitaire & Shanti Platinum",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      location: "Indore Bypass, M.P",
      duration: "Jan 2025 - Present",
      value: "₹250 Crore",
      client: "BCM Group",
      role: "Civil Engineer",
      description: "Premium residential colonies development featuring modern amenities, boundary walls, landscaped gardens, and dedicated kids zones.",
      highlights: [
        "Premium residential development",
        "Modern infrastructure planning",
        "Landscaping and amenities",
        "Quality construction supervision"
      ],
      technologies: ["AutoCAD", "Project Management", "Quality Control"]
    },
    {
      title: "County Walk - Bonsai Unit Bungalows",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      location: "Indore, M.P",
      duration: "Aug 2023 - Dec 2024",
      value: "₹10 Crore",
      client: "Private Developer",
      role: "Site Engineer",
      description: "Luxury residential bungalows with exposed concrete structure, designed by UA Designs Ahmedabad.",
      highlights: [
        "Exposed concrete architecture",
        "High-end residential construction",
        "Design coordination",
        "Quality assurance implementation"
      ],
      technologies: ["Revit", "Concrete Technology", "Site Management"]
    },
    {
      title: "Bhopal Metro Purple Line (BH-02)",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
      location: "Bhopal, M.P",
      duration: "Jan 2022 - Jun 2022",
      value: "₹426 Crore",
      client: "MPRCL",
      role: "Graduate Engineer Trainee",
      description: "Design and construction of eight elevated metro rail stations including viaduct portions and transition spans.",
      highlights: [
        "Large-scale infrastructure project",
        "Metro rail station construction",
        "Viaduct and transition spans",
        "Multi-disciplinary coordination"
      ],
      technologies: ["Infrastructure Design", "Contract Management", "Progress Monitoring"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of significant projects demonstrating expertise in residential, commercial, and infrastructure development.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Ongoing" ? "default" : "secondary"}
                    className={project.status === "Ongoing" ? "bg-green-500 text-white" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground line-clamp-2">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.value}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.role}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="font-medium">Client:</span> {project.client}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-xs text-muted-foreground flex items-start gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, tIndex) => (
                        <Badge key={tIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in learning more about my work?
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
