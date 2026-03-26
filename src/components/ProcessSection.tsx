import MotionWrapper from "@/components/MotionWrapper";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with a comprehensive assessment of your regulatory needs and current compliance status.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our experts develop a tailored regulatory strategy aligned with your business objectives and timeline.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the strategy with precision, handling documentation, submissions, and authority communications.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Continuous monitoring and support to ensure sustained compliance and rapid response to regulatory changes.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-12 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <MotionWrapper animation="fadeIn">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              How We Work
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground">
              Our proven process ensures successful outcomes for every engagement.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <MotionWrapper key={step.step} delay={0.2 + index * 0.1} animation="scaleUp">
              <div className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 text-xl lg:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
