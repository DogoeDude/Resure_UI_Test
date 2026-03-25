import { Button } from "@/components/ui/button";
import MotionWrapper from "@/components/MotionWrapper";
import ReSureHD from "@/assets/ReSURE_HD.png";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

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
            <MotionWrapper delay={0.2} animation="fadeIn">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-medium text-primary">AI-Powered Regulatory Excellence</span>
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
                Expert consulting for pharmaceutical, food, and feed industries.
                We combine deep regulatory expertise with cutting-edge AI solutions
                to accelerate your path to market.
              </p>
            </MotionWrapper>

            {/* Highlights list */}
            <MotionWrapper delay={0.45}>
              <ul className="space-y-2 text-left mx-auto lg:mx-0 max-w-xs lg:max-w-none">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionWrapper>

            <MotionWrapper delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="text-sm px-6 py-5 rounded-full shadow-md shadow-accent/20 hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <a href="#services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary/30 text-primary hover:bg-primary hover:text-white text-sm px-6 py-5 rounded-full hover:scale-105 transition-all duration-300"
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </MotionWrapper>

            {/* Mini stats */}
            <MotionWrapper delay={0.6}>
              <div className="flex gap-8 justify-center lg:justify-start pt-2">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-foreground">60%</p>
                  <p className="text-xs text-muted-foreground">Faster Compliance</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-foreground">3+</p>
                  <p className="text-xs text-muted-foreground">Industries Served</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-foreground">99.9%</p>
                  <p className="text-xs text-muted-foreground">Accuracy Rate</p>
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
