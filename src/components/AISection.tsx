import { Cpu, Zap, LineChart, Shield, ShieldAlert, Globe, FileSearch, Milestone } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

const AISection = () => {
  return (
    <section id="ai" className="py-12 lg:py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <MotionWrapper delay={0.2} animation="fadeIn">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4 lg:mb-6">
                <Cpu className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent">AI-Driven Solutions</span>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <h2 className="text-xl lg:text-3xl font-bold text-foreground mb-3 lg:mb-4 leading-tight">
                Revolutionizing Regulatory Affairs with{" "}
                <span className="text-accent">Artificial Intelligence</span>
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <div className="space-y-4 mb-8">
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  We don't just consult—we innovate. We elevate traditional regulatory workflows by integrating modern, fit-for-purpose AI tools that enhance data precision and process efficiency. Our approach focuses on leveraging the most suitable technological advancements to complement our deep industry expertise, ensuring your compliance strategy is both robust and highly resilient.
                </p>
              </div>
            </MotionWrapper>

            {/* 4 Cards Grid - 2 columns on desktop for better spacing in the 50% parent */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-6">
              <MotionWrapper delay={0.5} animation="scaleUp">
                <div className="bg-card border border-border rounded-xl p-3 lg:p-5 h-full hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-[11px] lg:text-base text-foreground mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="h-3.5 w-3.5 text-accent shrink-0" />
                    AI-Augmented Compliance Gap Analysis
                  </h4>
                  <p className="text-[10px] lg:text-sm text-muted-foreground leading-relaxed">
                    A comprehensive audit of existing documentation to identify misalignments.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.6} animation="scaleUp">
                <div className="bg-card border border-border rounded-xl p-3 lg:p-5 h-full hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-[11px] lg:text-base text-foreground mb-1 flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-accent shrink-0" />
                    Dynamic Regulatory Tracking
                  </h4>
                  <p className="text-[10px] lg:text-sm text-muted-foreground leading-relaxed">
                    Curated monitoring of global legislative changes relevant to your product.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.7} animation="scaleUp">
                <div className="bg-card border border-border rounded-xl p-3 lg:p-5 h-full hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-[11px] lg:text-base text-foreground mb-1 flex items-center gap-1.5">
                    <FileSearch className="h-3.5 w-3.5 text-accent shrink-0" />
                    Precision Technical Drafting
                  </h4>
                  <p className="text-[10px] lg:text-sm text-muted-foreground leading-relaxed">
                    High-quality drafts of SOPs and safety summaries with AI-driven validation.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.8} animation="scaleUp">
                <div className="bg-card border border-border rounded-xl p-3 lg:p-5 h-full hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-[11px] lg:text-base text-foreground mb-1 flex items-center gap-1.5">
                    <Milestone className="h-3.5 w-3.5 text-accent shrink-0" />
                    Validated Submission Roadmap
                  </h4>
                  <p className="text-[10px] lg:text-sm text-muted-foreground leading-relaxed">
                    Robust "Route-to-Market" roadmaps including contingency planning.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>

          {/* Visual - The 3 Cards */}
          <MotionWrapper delay={0.4} animation="slideRight">
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3 border border-primary/20" />
              <div className="relative bg-card border border-primary/10 p-5 lg:p-12 rounded-3xl shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/60 transition-colors border border-primary/5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">Accelerate Compliance</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/60 transition-colors border border-primary/5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">Improve Accuracy</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/60 transition-colors border border-primary/5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <LineChart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">Ensure Cost-Reduction</p>
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
