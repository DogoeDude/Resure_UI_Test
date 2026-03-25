import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import AISection from "@/components/AISection";

import BackgroundVectors from "@/components/BackgroundVectors";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundVectors />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AISection />
        <ProcessSection />
        <CredibilitySection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
