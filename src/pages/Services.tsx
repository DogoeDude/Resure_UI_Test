import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pill,
  Apple,
  Wheat,
  Cpu,
  ArrowRight,
  CheckCircle2,
  FileText,
  Shield,
  Zap,
  BarChart3,
  Mail,
} from "lucide-react";
import CircularLogo from "@/assets/Circular_Logo.png";

const pharmaceuticalServices = [
  "Drug registration & market authorization",
  "Pharmacovigilance and drug safety",
  "Regulatory documentation & submission",
  "Health authority compliance audits",
  "Post-market surveillance",
  "Clinical trial regulatory support",
];

const foodServices = [
  "Safety compliance consulting",
  "Labeling and packaging regulations",
  "International food standards navigation",
  "Quality management systems",
  "Novel food applications",
  "Import/export compliance",
];

const feedServices = [
  "Animal nutrition regulatory requirements",
  "Agricultural product compliance",
  "International feed standards",
  "Product registration support",
  "Feed additive authorizations",
  "Safety assessments",
];

const aiServices = [
  {
    icon: Cpu,
    title: "Custom AI Tool Development",
    description: "Purpose-built artificial intelligence solutions designed specifically for your regulatory workflows and compliance needs.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent automation that streamlines traditionally slow regulatory workflows, reducing manual effort and errors.",
  },
  {
    icon: Shield,
    title: "Compliance Monitoring Systems",
    description: "Real-time monitoring and alerting systems that ensure continuous compliance across all regulatory requirements.",
  },
  {
    icon: BarChart3,
    title: "Efficiency Analytics & Reporting",
    description: "Data-driven insights and comprehensive reporting to optimize your regulatory operations and decision-making.",
  },
];

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

import BackgroundVectors from "@/components/BackgroundVectors";

const Services = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundVectors />
      <Header />

      <main className="pt-16 lg:pt-20 relative z-10">
        {/* Hero Section */}
        <section className="bg-secondary text-foreground py-12 lg:py-20 overflow-hidden relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none select-none">
            <img
              src={CircularLogo}
              alt=""
              className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] object-contain animate-spin-slow"
            />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <MotionWrapper animation="fadeIn">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Comprehensive regulatory consulting and AI-driven solutions
                  tailored to your industry's unique compliance requirements.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Industry Services */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <MotionWrapper animation="fadeIn">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Regulatory Affairs & Compliance
                </h2>
                <p className="text-lg text-muted-foreground">
                  Expert guidance across three major industries, ensuring your products
                  meet all regulatory requirements for market access.
                </p>
              </MotionWrapper>
            </div>

            {/* Pharmaceutical */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
              <div>
                <MotionWrapper delay={0.2} animation="slideRight">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Pill className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Pharmaceutical Industry
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive regulatory support for pharmaceutical companies navigating
                    the complex landscape of drug safety, market authorization, and health
                    authority compliance worldwide.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {pharmaceuticalServices.map((service, index) => (
                      <MotionWrapper key={service} delay={0.3 + index * 0.05} animation="fadeIn">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{service}</span>
                        </li>
                      </MotionWrapper>
                    ))}
                  </ul>
                </MotionWrapper>
              </div>
              <MotionWrapper delay={0.4} animation="scaleUp">
                <Card className="bg-secondary border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Focus Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Regulatory Documentation</p>
                        <p className="text-sm text-muted-foreground">CTD, eCTD, and other submission formats</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Drug Safety</p>
                        <p className="text-sm text-muted-foreground">Pharmacovigilance and risk management</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>
            </div>

            {/* Food */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
              <MotionWrapper delay={0.2} animation="scaleUp" className="lg:order-1">
                <Card className="bg-secondary border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Focus Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Food Safety</p>
                        <p className="text-sm text-muted-foreground">HACCP, quality systems, and certifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Labeling Compliance</p>
                        <p className="text-sm text-muted-foreground">Nutrition, allergens, and claims</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>
              <div className="lg:order-2">
                <MotionWrapper delay={0.4} animation="slideRight">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Apple className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Food Industry
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Expert consulting on food safety standards, labeling regulations,
                    and international compliance requirements to help your products
                    reach global markets.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {foodServices.map((service, index) => (
                      <MotionWrapper key={service} delay={0.5 + index * 0.05} animation="fadeIn">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{service}</span>
                        </li>
                      </MotionWrapper>
                    ))}
                  </ul>
                </MotionWrapper>
              </div>
            </div>

            {/* Feed */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <MotionWrapper delay={0.2} animation="slideRight">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Wheat className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Feed Industry
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Specialized guidance on animal nutrition regulatory requirements
                    and agricultural product compliance, helping you navigate the
                    complex feed industry landscape.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {feedServices.map((service, index) => (
                      <MotionWrapper key={service} delay={0.3 + index * 0.05} animation="fadeIn">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{service}</span>
                        </li>
                      </MotionWrapper>
                    ))}
                  </ul>
                </MotionWrapper>
              </div>
              <MotionWrapper delay={0.4} animation="scaleUp">
                <Card className="bg-secondary border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Focus Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Feed Safety</p>
                        <p className="text-sm text-muted-foreground">Additive authorizations and safety assessments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Product Registration</p>
                        <p className="text-sm text-muted-foreground">Global market access and compliance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <MotionWrapper animation="fadeIn">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                  <Cpu className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">AI-Driven Solutions</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  AI & Digital Transformation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Leverage cutting-edge artificial intelligence to revolutionize
                  your regulatory workflows and compliance processes.
                </p>
              </MotionWrapper>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {aiServices.map((service, index) => (
                <MotionWrapper key={service.title} delay={0.2 + index * 0.1} animation="scaleUp">
                  <Card className="bg-card hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <MotionWrapper animation="fadeIn">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  How We Work
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our proven process ensures successful outcomes for every engagement.
                </p>
              </MotionWrapper>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <MotionWrapper key={step.step} delay={0.2 + index * 0.1} animation="fadeIn">
                  <div className="relative">
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                    )}
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <MotionWrapper animation="scaleUp">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Regulatory Workflow?
              </h2>
              <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8">
                Let's discuss how ReSURE can help you navigate regulatory challenges
                with confidence and efficiency.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 transition-transform hover:scale-105 hover:bg-accent"
              >
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MotionWrapper>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
