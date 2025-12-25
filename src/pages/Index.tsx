//import Navbar from "@/components/Navbar";
//import HeroSection from "@/components/HeroSection";
//import ProgramsSection from "@/components/ProgramsSection";
//import PricingSection from "@/components/PricingSection";
//import ContactSection from "@/components/ContactSection";
//import Footer from "@/components/Footer";

//const Index = () => {
//  return (
//    <div className="min-h-screen bg-background">
//      <Navbar />
//      <HeroSection />
//      <ProgramsSection />
//      <PricingSection />
//      <ContactSection />
//      <Footer />
//    </div>
//  );
//};

//export default Index;

import HeroSection from "@/components/HeroSection";
import NowSection from "@/components/NowSection";
import TrainingLogSection from "@/components/TrainingLogSection";
import Footer from "@/components/Footer";

export default function Index() {
    return (
        <div className="min-h-screen">
            {/* 你原本的 Hero 可以保留，但建議把文案改成偏「紀錄」 */}
            <HeroSection />

            {/* 進度 */}
            <NowSection />

            {/* 紀錄 */}
            <TrainingLogSection />

            <Footer />
        </div>
    );
}



