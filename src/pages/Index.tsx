import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import IndustryCards from "@/components/IndustryCards";
import AISection from "@/components/AISection";
import WhyChooseUs from "@/components/WhyChooseUs";

import BackgroundVectors from "@/components/BackgroundVectors";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundVectors />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <IndustryCards />
        <AISection />
        <WhyChooseUs />
        <CredibilitySection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
