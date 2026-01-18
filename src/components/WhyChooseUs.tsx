import { Globe, Award, Lightbulb, Users } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

import CircularLogo from "@/assets/Circular_Logo.png";

const reasons = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "International expertise across multiple regulatory frameworks and markets worldwide.",
  },
  {
    icon: Award,
    title: "Swiss Precision",
    description: "Headquartered in Switzerland, bringing renowned quality and meticulous attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "AI Innovation",
    description: "Cutting-edge artificial intelligence solutions that transform regulatory workflows.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned regulatory professionals with decades of combined industry experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 lg:py-24 bg-secondary text-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-10 pointer-events-none select-none">
        <img
          src={CircularLogo}
          alt=""
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[700px] lg:h-[700px] object-contain animate-spin-slow"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-4">
            Why Choose ReSURE?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            We combine deep regulatory expertise with innovative technology
            to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <MotionWrapper key={reason.title} delay={0.2 + index * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
