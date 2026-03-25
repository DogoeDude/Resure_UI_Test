import { Cpu, Zap, LineChart, Shield } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

const AISection = () => {
  return (
    <section id="ai" className="py-12 lg:py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <MotionWrapper delay={0.2} animation="fadeIn">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full mb-3 lg:mb-4">
                <Cpu className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-medium text-accent">AI-Driven Solutions</span>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 lg:mb-4 leading-tight">
                Revolutionizing Regulatory Affairs with{" "}
                <span className="text-accent">Artificial Intelligence</span>
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <div className="space-y-4">
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  We view AI as a supportive tool designed to enhance the capabilities of regulatory teams. By integrating AI-enabled insights into compliance and harmonisation workflows, we aim to streamline data analysis and support more informed decision-making.
                </p>
                <div className="pl-4 border-l-2 border-primary/20">
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    This approach is built on the principle that cost-efficiency and long-term sustainability are best achieved when modern technology is grounded in rigorous data integrity and expert human oversight.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Visual */}
          <MotionWrapper delay={0.4} animation="slideRight">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3 border border-primary/20" />
              <div className="relative bg-card border border-primary/10 p-8 lg:p-12 rounded-3xl shadow-xl">
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/60 transition-colors border border-primary/5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground mb-0.5">60%</p>
                      <p className="text-sm text-muted-foreground font-medium">Faster Compliance</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/60 transition-colors border border-primary/5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground mb-0.5">99.9%</p>
                      <p className="text-sm text-muted-foreground font-medium">Accuracy Rate</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/60 transition-colors border border-primary/5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground mb-0.5">40%</p>
                      <p className="text-sm text-muted-foreground font-medium">Cost Reduction</p>
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
