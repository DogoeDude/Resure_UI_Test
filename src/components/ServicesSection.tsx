import { Link } from "react-router-dom";
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



const ServicesSection = () => {
  return (
    <section id="services" className="relative z-10 w-full pt-12 lg:pt-20">
      {/* Industry Services */}
      <div className="pb-12 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">


          {/* Pharmaceutical */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
            <div>
              <MotionWrapper delay={0.2} animation="slideRight">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                    <Pill className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Pharmaceutical Industry
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive regulatory support for pharmaceutical companies navigating
                  the complex landscape of drug safety, market authorization, and health
                  authority compliance worldwide.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {pharmaceuticalServices.map((service, index) => (
                    <MotionWrapper key={service} delay={0.3 + index * 0.05} animation="fadeIn">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm lg:text-base text-muted-foreground">{service}</span>
                      </li>
                    </MotionWrapper>
                  ))}
                </ul>
              </MotionWrapper>
            </div>
            <MotionWrapper delay={0.4} animation="scaleUp">
              <Card className="bg-card border-primary/10 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-primary/5 border-b border-primary/10 px-5 py-4">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-accent rounded-full" />
                    Key Focus Areas
                  </CardTitle>
                </div>
                <CardContent className="p-5 space-y-5">
                  <div className="flex items-start gap-3 group">
                    <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary transition-colors shrink-0">
                      <FileText className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground mb-0.5">Regulatory Documentation</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">CTD, eCTD, and other submission formats</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary transition-colors shrink-0">
                      <Shield className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground mb-0.5">Drug Safety</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Pharmacovigilance and risk management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>

          {/* Food */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
            <MotionWrapper delay={0.2} animation="scaleUp" className="lg:order-1">
              <Card className="bg-card border-primary/10 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-primary/5 border-b border-primary/10 px-5 py-4">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-accent rounded-full" />
                    Key Focus Areas
                  </CardTitle>
                </div>
                <CardContent className="p-5 space-y-5">
                  <div className="flex items-start gap-3 group">
                    <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary transition-colors shrink-0">
                      <Shield className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground mb-0.5">Food Safety</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">HACCP, quality systems, and certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary transition-colors shrink-0">
                      <FileText className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground mb-0.5">Labeling Compliance</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Nutrition, allergens, and claims</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
            <div className="lg:order-2">
              <MotionWrapper delay={0.4} animation="slideRight">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                    <Apple className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Food Industry
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                  Expert consulting on food safety standards, labeling regulations,
                  and international compliance requirements to help your products
                  reach global markets.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {foodServices.map((service, index) => (
                    <MotionWrapper key={service} delay={0.5 + index * 0.05} animation="fadeIn">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm lg:text-base text-muted-foreground">{service}</span>
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
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                    <Wheat className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Feed Industry
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                  Specialized guidance on animal nutrition regulatory requirements
                  and agricultural product compliance, helping you navigate the
                  complex feed industry landscape.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {feedServices.map((service, index) => (
                    <MotionWrapper key={service} delay={0.3 + index * 0.05} animation="fadeIn">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm lg:text-base text-muted-foreground">{service}</span>
                      </li>
                    </MotionWrapper>
                  ))}
                </ul>
              </MotionWrapper>
            </div>
            <MotionWrapper delay={0.4} animation="scaleUp">
              <Card className="bg-card border-primary/10 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-primary/5 border-b border-primary/10 px-5 py-4">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-accent rounded-full" />
                    Key Focus Areas
                  </CardTitle>
                </div>
                <CardContent className="p-5 space-y-5">
                  <div className="flex items-start gap-3 group">
                    <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary transition-colors shrink-0">
                      <Shield className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground mb-0.5">Feed Safety</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Additive authorizations and safety assessments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary transition-colors shrink-0">
                      <FileText className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground mb-0.5">Product Registration</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Global market access and compliance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
