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
    <section id="credibility" className="py-10 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-10">
          <MotionWrapper animation="fadeIn">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
              Built on Precision
            </h2>
            <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
              A trusted consultancy founded on principles of excellence, transparency, and regulatory expertise.
            </p>
          </MotionWrapper>
        </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {credentials.map((credential, index) => (
              <MotionWrapper
                key={index}
                animation="scaleUp"
                delay={index * 0.1}
                className="h-full"
              >
                <div
                  className="flex items-center gap-4 text-left p-3.5 lg:p-8 rounded-xl lg:rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-300 h-full group"
                >
                  <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-lg lg:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <credential.icon className="w-4 h-4 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-0.5">{credential.label}</p>
                    <p className="text-sm lg:text-lg font-bold text-foreground leading-tight break-words">{credential.value}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
