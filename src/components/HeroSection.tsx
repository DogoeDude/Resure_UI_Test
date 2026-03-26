import { Button } from "@/components/ui/button";
import MotionWrapper from "@/components/MotionWrapper";
import ReSureHD from "@/assets/ReSURE_HD.png";
import { ArrowRight, Sparkles, Zap, ShieldCheck, TrendingDown } from "lucide-react";

const highlights = [
  "Pharmaceutical Regulatory Affairs",
  "Food & Feed Compliance",
  "AI-Powered Insights",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary space-y-6 lg:space-y-8 text-center lg:text-left">
            <MotionWrapper delay={0.2} animation="fadeIn" className="mb-2">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-px w-8 bg-accent/60" />
                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/80">
                  Regulatory Excellence Redeﬁned: <span className="text-primary/70">Expert-Led Strategy & AI Integration</span>
                </span>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Regulatory Solutions <br className="hidden lg:block" />
                <span className="text-accent">for Unifying Results</span>{" "}
                & Excellence
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
                Strategic consulting for the pharmaceutical, food, and feed sectors.
                We provide <span><b>comprehensive regulatory expertise</b></span> to build resilient,
                compliance-ﬁrst strategies for your products. By integrating targeted
                AI capabilities into our workﬂow, we enhance data precision and
                cost-efﬁciency, ensuring a robust and defensible path to market.
              </p>
            </MotionWrapper>

            {/* Highlights list */}
            <MotionWrapper delay={0.45}>
              <ul className="space-y-2 text-left mx-auto lg:mx-0 max-w-xs lg:max-w-none">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionWrapper>

            <MotionWrapper delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <a href="#expertise">
                  <Button 
                    variant="default"
                    size="lg" 
                    className="rounded-full px-8 h-12 text-sm font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 active:scale-95"
                  >
                    Explore Our Expertise
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button 
                    variant="accent"
                    size="lg" 
                    className="rounded-full px-8 h-12 text-sm font-bold border-2 border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 active:scale-95"
                  >
                    Contact Us
                  </Button>
                </a>
              </div>
            </MotionWrapper>

            {/* Core Benefits with Icons */}
            <MotionWrapper delay={0.6}>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-5 justify-center lg:justify-start pt-8 pb-4">
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group whitespace-nowrap">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[11px] lg:text-[12px] font-bold text-primary tracking-wide pr-2">Accelerate Compliance</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group whitespace-nowrap">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[11px] lg:text-[12px] font-bold text-primary tracking-wide pr-2">Improve Accuracy</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group whitespace-nowrap">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingDown className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[11px] lg:text-[13px] font-bold text-primary tracking-wide pr-2">Ensure Cost-Reduction</span>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Logo Display */}
          <MotionWrapper delay={0.5} animation="scaleUp" className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full" style={{ transform: 'scale(0.95)', transformOrigin: 'center' }}>
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl transform rotate-6 animate-pulse" />
              <div className="relative bg-accent p-8 lg:p-10 rounded-3xl shadow-xl hover:scale-[1.02] hover:-rotate-1 transition-all duration-500">
                <img
                  src={ReSureHD}
                  alt="ReSURE - Regulatory Solutions for Unifying Results & Excellence"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
