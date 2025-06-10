
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Calculator, 
  FileText, 
  PresentationChart, 
  Building2, 
  ClipboardCheck,
  Ruler,
  Settings
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Design & CAD Software",
      icon: <Code className="h-6 w-6" />,
      skills: ["AutoCAD", "Revit", "3D Modeling", "Technical Drawings"],
      color: "bg-blue-500"
    },
    {
      title: "Office & Documentation",
      icon: <FileText className="h-6 w-6" />,
      skills: ["MS Office", "MS Excel", "MS Word", "MS PowerPoint"],
      color: "bg-green-500"
    },
    {
      title: "Project Management",
      icon: <PresentationChart className="h-6 w-6" />,
      skills: ["Project Planning", "Resource Management", "Timeline Coordination", "Team Leadership"],
      color: "bg-purple-500"
    },
    {
      title: "Financial Management",
      icon: <Calculator className="h-6 w-6" />,
      skills: ["Billing & Invoicing", "Cost Estimation", "Budget Planning", "Financial Analysis"],
      color: "bg-orange-500"
    },
    {
      title: "Construction Management",
      icon: <Building2 className="h-6 w-6" />,
      skills: ["Site Supervision", "Quality Control", "Safety Management", "Vendor Coordination"],
      color: "bg-red-500"
    },
    {
      title: "Quality Assurance",
      icon: <ClipboardCheck className="h-6 w-6" />,
      skills: ["Quality Planning", "Inspection Procedures", "Standards Compliance", "Documentation"],
      color: "bg-teal-500"
    }
  ];

  const technicalExpertise = [
    "Residential Construction",
    "Infrastructure Development", 
    "Metro Rail Projects",
    "Concrete Structures",
    "Contract Management",
    "EOT Processing",
    "MIS Reporting",
    "Vendor Management",
    "Site Engineering",
    "Construction Planning"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set covering technical expertise, project management, and construction supervision.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Technical Expertise */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Technical Expertise</h3>
              <p className="text-muted-foreground">Specialized knowledge and hands-on experience</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {technicalExpertise.map((expertise, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-white border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {expertise}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Certifications/Tools Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Software Proficiency</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">AutoCAD</span>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Revit</span>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-4/6"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">MS Office Suite</span>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Project Management</span>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold text-foreground">Core Competencies</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>• Site supervision and progress monitoring</div>
                  <div>• Quality assurance and control systems</div>
                  <div>• Contract management and documentation</div>
                  <div>• Cost estimation and billing processes</div>
                  <div>• Vendor management and coordination</div>
                  <div>• Technical drawing interpretation</div>
                  <div>• Safety compliance and implementation</div>
                  <div>• Client communication and reporting</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
