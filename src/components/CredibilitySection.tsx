import { MapPin, Calendar, User, Building } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const credentials = [
  {
    icon: Building,
    label: "Swiss-Registered Consultancy",
    value: "UID: CHE-388.363.242",
  },
  {
    icon: MapPin,
    label: "Headquartered in",
    value: "Küssnacht, Switzerland",
  },
  {
    icon: Calendar,
    label: "Established",
    value: "December 2025",
  },
  {
    icon: User,
    label: "Leadership",
    value: "Ruby Leah Suffolk",
  },
];

const CredibilitySection = () => {
  return (
    <section id="credibility" className="py-12 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <MotionWrapper animation="fadeIn">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Built on Precision
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              A trusted consultancy founded on principles of excellence, transparency, and regulatory expertise.
            </p>
          </MotionWrapper>
        </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {credentials.map((credential, index) => (
              <MotionWrapper
                key={index}
                animation="scaleUp"
                delay={index * 0.1}
                className="h-full"
              >
                <div
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 h-full group"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <credential.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{credential.label}</p>
                  <p className="text-base lg:text-lg font-bold text-foreground leading-snug break-words">{credential.value}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
