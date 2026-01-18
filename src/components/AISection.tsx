import { Cpu, Zap, LineChart, Shield } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

const features = [
  {
    icon: Cpu,
    title: "Custom AI Development",
    description: "Purpose-built AI tools designed specifically for regulatory workflows and compliance processes.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline traditionally slow regulatory workflows with intelligent automation solutions.",
  },
  {
    icon: LineChart,
    title: "Efficiency Analytics",
    description: "Data-driven insights to optimize your regulatory operations and reduce time-to-market.",
  },
  {
    icon: Shield,
    title: "Compliance Monitoring",
    description: "Real-time monitoring systems to ensure continuous compliance across all regulatory requirements.",
  },
];

const AISection = () => {
  return (
    <section className="py-12 lg:py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <MotionWrapper delay={0.2} animation="fadeIn">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-4 lg:mb-6">
                <Cpu className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-accent" />
                <span className="text-xs lg:text-sm font-medium text-accent">AI-Driven Solutions</span>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
                Revolutionizing Regulatory Affairs with{" "}
                <span className="text-accent">Artificial Intelligence</span>
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                We don't just consult—we innovate. Our proprietary AI solutions are
                transforming how companies approach regulatory compliance, making
                processes faster, more accurate, and significantly more efficient.
              </p>
            </MotionWrapper>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <MotionWrapper key={feature.title} delay={0.5 + index * 0.1} animation="fadeIn">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* Visual */}
          <MotionWrapper delay={0.4} animation="slideRight">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-3" />
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 rounded-3xl text-primary-foreground">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Zap className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">60%</p>
                      <p className="text-sm text-primary-foreground/80">Faster Compliance</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Shield className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">99.9%</p>
                      <p className="text-sm text-primary-foreground/80">Accuracy Rate</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">40%</p>
                      <p className="text-sm text-primary-foreground/80">Cost Reduction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default AISection;
