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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
                <MotionWrapper delay={0.2} animation="fadeIn" className="mb-2">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <div className="h-px w-6 lg:w-8 bg-accent/60" />
                        <span className="text-[9px] lg:text-xs font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-muted-foreground/80">
                            Regulatory Excellence Redeﬁned: <span className="text-primary/70">Expert-Led Strategy & AI Integration</span>
                        </span>
                    </div>
                </MotionWrapper>

                <MotionWrapper delay={0.3}>
                    <h1 className="text-2xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                        Regulatory Solutions <br className="hidden lg:block" />
                        for <span className="text-accent underline decoration-accent/30 underline-offset-8">Unifying Results</span> & Excellence
                    </h1>
                </MotionWrapper>

                <MotionWrapper delay={0.4}>
                    <p className="text-[11px] lg:text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed">
                        Strategic consulting for the pharmaceutical, food, and feed sectors.
                        We provide <span className="font-bold text-primary">comprehensive regulatory expertise</span> to build resilient,
                        compliance-ﬁrst strategies for your products.
                        By integrating targeted AI capabilities into our workflow, we enhance data precision and cost-efficiency.
                    </p>
                </MotionWrapper>

                {/* Highlights list */}
                <MotionWrapper delay={0.45}>
                    <ul className="space-y-2 mb-8 text-left inline-block lg:block">
                        {highlights.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs lg:text-base text-muted-foreground font-medium">
                                <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center">
                                    <Zap className="h-3 w-3 text-accent" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </MotionWrapper>

                <MotionWrapper delay={0.5}>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4">
                        <Button
                            asChild
                            className="h-9 lg:h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 lg:px-8 text-[11px] lg:text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-fit"
                        >
                            <a href="#expertise">Explore Our Expertise</a>
                        </Button>
                        <Button
                            asChild
                            className="h-9 lg:h-12 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 lg:px-8 text-[11px] lg:text-base font-bold shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-fit"
                        >
                            <a href="#contact">Contact Us</a>
                        </Button>
                    </div>
                </MotionWrapper>

                {/* Core Benefits bar */}
                <MotionWrapper delay={0.6}>
                    <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-5 justify-center lg:justify-start pt-10">
                        {[
                            { icon: Zap, text: "Accelerate Compliance" },
                            { icon: ShieldCheck, text: "Improve Accuracy" },
                            { icon: TrendingDown, text: "Ensure Cost-Reduction" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-2 lg:p-3 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 group">
                                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <item.icon className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                                </div>
                                <span className="text-[10px] lg:text-[12px] font-bold text-primary tracking-wide whitespace-nowrap">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </MotionWrapper>
            </div>
            {/* Right: Illustration Container - Hidden on mobile/tablet */}
            <div className="hidden lg:flex flex-1 justify-center lg:justify-end group">
                <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                    {/* Decorative background glow */}
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                    
                    {/* Background Card 1 - Tilts opposite */}
                    <div className="absolute w-[85%] h-[60%] bg-primary/5 border border-primary/10 rounded-3xl transform -rotate-12 -translate-x-8 -translate-y-4 group-hover:rotate-6 group-hover:translate-x-4 group-hover:translate-y-2 transition-all duration-1000 ease-out shadow-xl" />
                    
                    {/* Background Card 2 - Tilts opposite */}
                    <div className="absolute w-[80%] h-[55%] bg-accent/5 border border-accent/10 rounded-3xl transform rotate-12 translate-x-12 translate-y-8 group-hover:-rotate-6 group-hover:-translate-x-6 group-hover:-translate-y-4 transition-all duration-700 ease-out shadow-lg" />

                    {/* Main Logo Card */}
                    <MotionWrapper delay={0.6} animation="scaleUp" className="relative z-10 w-full flex justify-center">
                        <div className="relative bg-[#F1912A] p-6 lg:p-10 rounded-2xl shadow-2xl transform lg:rotate-3 group-hover:lg:-rotate-2 group-hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
                            {/* Reflection effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            
                             <img
                                src={ReSureHD}
                                alt="ReSURE Logo"
                                className="w-full h-auto object-contain relative z-10"
                            />
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
