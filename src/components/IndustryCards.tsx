import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MotionWrapper from "@/components/MotionWrapper";
import { Pill, Apple, Wheat } from "lucide-react";

const industries = [
  {
    icon: Pill,
    title: "Pharmaceutical Industry",
    description:
      "Drug safety, legal documentation, health authority standards, and market authorization support for global pharmaceutical compliance.",
    features: ["Drug Registration", "Pharmacovigilance", "Regulatory Documentation", "Compliance Audits"],
  },
  {
    icon: Apple,
    title: "Food Industry",
    description:
      "Comprehensive consulation on safety standards, labeling regulations, and international food compliance requirements.",
    features: ["Safety Compliance", "Labeling Regulations", "Quality Management", "International Standards"],
  },
  {
    icon: Wheat,
    title: "Feed Industry",
    description:
      "Expert guidance on animal nutrition regulatory requirements and agricultural product compliance across global markets.",
    features: ["Nutrition Standards", "Product Registration", "Agricultural Compliance", "Feed Safety"],
  },
];

const IndustryCards = () => {
  return (
    <section className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          <MotionWrapper animation="fadeIn">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">
              Industry Expertise
            </h2>
            <p className="text-base lg:text-lg text-foreground/80">
              Specialized regulatory consulting across three major industries,
              delivering tailored solutions for your unique compliance challenges.
            </p>
          </MotionWrapper>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <MotionWrapper key={industry.title} delay={0.2 + index * 0.1}>
              <Card
                className="group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;
