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
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <MotionWrapper animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Built on Precision
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A trusted consultancy founded on principles of excellence, transparency, and regulatory expertise.
              </p>
            </div>
          </MotionWrapper>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <MotionWrapper
                key={index}
                animation="scaleUp"
                delay={index * 0.1}
                className="h-full"
              >
                <div
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200 h-full border border-border/50"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{credential.label}</p>
                  <p className="font-semibold text-foreground">{credential.value}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
