
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated civil engineer with hands-on experience in residential and infrastructure projects, 
            bringing technical expertise and project management skills to every challenge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Born on January 14, 2002, I am a passionate civil engineer with a strong foundation in 
                construction management and project execution. My journey began with my engineering 
                education at Rewa Engineering College, where I developed both technical skills and 
                practical knowledge.
              </p>
              <p className="text-lg leading-relaxed">
                Currently working with Herambh Projects in association with BCM Group, I specialize in 
                premium residential developments and have experience across various project scales, 
                from luxury bungalows to large-scale metro infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Crore Projects Value</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Education</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>
                        <div className="font-medium">Bachelor of Technology</div>
                        <div>Rewa Engineering College (RGPV) - 2023</div>
                        <div>CGPA: 7.4/10</div>
                      </div>
                      <div>
                        <div className="font-medium">Higher Secondary (12th)</div>
                        <div>M.P Board - 2019 (69%)</div>
                      </div>
                      <div>
                        <div className="font-medium">Secondary (10th)</div>
                        <div>M.P Board - 2017 (69%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Specializations</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• Project Management & Supervision</div>
                      <div>• Residential Construction</div>
                      <div>• Infrastructure Development</div>
                      <div>• Quality Assurance & Control</div>
                      <div>• Contract Management</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
