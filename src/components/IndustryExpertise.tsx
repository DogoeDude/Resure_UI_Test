import { Pill, Apple, Wheat, ArrowRight, ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

const industries = [
  {
    icon: Pill,
    title: "Pharmaceutical Industry",
    description: "Drug safety, legal documentation, health authority standards, and market authorization support for global pharmaceutical compliance.",
    highlights: [
      "API",
      "Excipients",
      "Finished Product Registration",
      "Regulatory Documentation",
      "Compliance Audits"
    ],
    color: "bg-blue-500/10",
    textColor: "text-blue-600",
  },
  {
    icon: Apple,
    title: "Food Industry",
    description: "Comprehensive consultation on safety standards, registration and labeling regulations.",
    highlights: [
      "Safety Compliance",
      "Labeling Regulations",
      "Quality Management",
      "International Standards"
    ],
    color: "bg-green-500/10",
    textColor: "text-green-600",
  },
  {
    icon: Wheat,
    title: "Feed Industry",
    description: "Expert guidance on animal nutrition regulatory requirements and agricultural product compliance across global markets.",
    highlights: [
      "Nutrition Standards",
      "Product Registration",
      "Feed Safety"
    ],
    color: "bg-orange-500/10",
    textColor: "text-orange-600",
  },
];

const IndustryExpertise = () => {
  return (
    <section id="expertise" className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <MotionWrapper animation="fadeIn">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industry <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Specialized regulatory consulting across three major industries, delivering tailored solutions for your global regulatory challenges.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <MotionWrapper
              key={industry.title}
              delay={0.2 + index * 0.1}
              animation="scaleUp"
            >
              <div className="group bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className={`h-7 w-7 ${industry.textColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {industry.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                      <ChevronRight className="h-3 w-3 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>


              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
