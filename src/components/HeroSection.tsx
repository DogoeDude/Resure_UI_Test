import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MotionWrapper from "@/components/MotionWrapper";
import ReSureHD from "@/assets/ReSURE_HD.png";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-12 lg:pt-32 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary space-y-6 lg:space-y-8 text-center lg:text-left">
            <MotionWrapper delay={0.2} animation="fadeIn">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-primary/20">
                <Sparkles className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-accent" />
                <span className="text-xs lg:text-sm font-medium text-primary">AI-Powered Regulatory Excellence</span>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Regulatory Solutions
                <span className="block text-accent mt-1 lg:mt-0">for Unifying Results </span>
                & Excellence
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <p className="text-base lg:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                Expert consulting for pharmaceutical, food, and feed industries.
                We combine deep regulatory expertise with cutting-edge AI solutions
                to accelerate your path to market.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="text-base px-8 hover:bg-accent hover:text-white transition-colors duration-300"
                >
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary/30 text-primary hover:bg-primary hover:text-white text-base px-8 transition-colors duration-300"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </MotionWrapper>
          </div>

          {/* Logo Display */}
          <MotionWrapper delay={0.6} animation="scaleUp" className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl transform rotate-6 animate-pulse" />
              <div className="relative bg-accent p-8 lg:p-12 rounded-3xl hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={ReSureHD}
                  alt="ReSURE - Regulatory Solutions for Unifying Results & Excellence"
                  className="w-full max-w-md rounded-2xl"
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
