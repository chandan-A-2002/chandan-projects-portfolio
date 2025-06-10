
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Calendar, IndianRupee } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      period: "Jan 2025 - Present",
      company: "Herambh Projects",
      association: "In association with BCM Group",
      position: "Civil Engineer",
      location: "Indore, M.P",
      project: "Shanti Solitaire, Shanti Platinum",
      description: "Development of premium residential colonies in Indore bypass including boundary walls, gardens, and kids zone.",
      cost: "₹250 Crore",
      status: "Ongoing",
      activities: [
        "Regular site visits for monitoring construction progress",
        "Quality Assurance Plan checking and approval", 
        "Client billing reconciliation and correspondence",
        "Contract management and penalty implementation",
        "Coordination with design team and method statement approvals",
        "EOT verification and processing to higher management"
      ]
    },
    {
      period: "Aug 2023 - Dec 2024", 
      company: "Openings India",
      position: "Site Engineer",
      location: "Indore, M.P",
      project: "County Walk - Residential Bungalow",
      description: "Bonsai unit bungalows designed by UA Designs Ahmedabad with exposed concrete structure.",
      cost: "₹10 Crore",
      duration: "1 Year 4 Months",
      activities: [
        "Site monitoring and construction progress tracking",
        "Detailed work program and Quality Assurance Plan approval",
        "MIS reporting to Executive Director Civil",
        "Project control, coordination, and scheduling",
        "Periodic project review meetings monitoring"
      ]
    },
    {
      period: "Jan 2022 - Jun 2022",
      company: "URC Construction Pvt. Ltd.",
      position: "Graduate Engineer Trainee (GET)",
      location: "Bhopal",
      project: "BH-02 Purple Line - Bhopal Metro",
      client: "MPRCL",
      description: "Design and Construction of Eight Elevated Metro Rail Stations including viaduct portions and transition spans.",
      cost: "₹426 Crore",
      duration: "6 Months",
      note: "Experience gained during degree completion (COVID break)",
      activities: [
        "Client bill reconciliation and contract correspondence",
        "Detailed construction program preparation and revision", 
        "Resource planning for machinery, material and manpower",
        "PVC bills and extra items preparation",
        "EOT preparation as per contract agreement",
        "Daily and Monthly Progress Report preparation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my professional journey in civil engineering and construction management.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground">{exp.project}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        {exp.position}
                      </Badge>
                      <Badge variant="outline">{exp.company}</Badge>
                      {exp.association && (
                        <Badge variant="secondary">{exp.association}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Project Details
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      {exp.client && (
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Client:</strong> {exp.client}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-primary">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-semibold">{exp.cost}</span>
                      </div>
                      {exp.duration && (
                        <div className="text-muted-foreground">
                          <strong>Duration:</strong> {exp.duration}
                        </div>
                      )}
                      {exp.status && (
                        <Badge variant="outline" className="border-green-500 text-green-700">
                          {exp.status}
                        </Badge>
                      )}
                    </div>
                    
                    {exp.note && (
                      <div className="text-xs text-muted-foreground italic p-2 bg-muted/50 rounded">
                        Note: {exp.note}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
