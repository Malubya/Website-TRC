import Curtain from "@/components/Curtain";
import Nav from "@/components/Nav";
import HeroFilm from "@/components/HeroFilm";
import PracticeSection from "@/components/PracticeSection";
import MaterialsSection from "@/components/MaterialsSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import SiteProgressSection from "@/components/SiteProgressSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import DiasporaSection from "@/components/DiasporaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--color-charcoal-steel)", background: "var(--color-architectural-white)", overflowX: "hidden" }}>
      <Curtain />
      <Nav />
      <div id="top">
        <HeroFilm />
        <PracticeSection />
        <MaterialsSection />
        <WorkSection />
        <SiteProgressSection />
        <ServicesSection />
        <ProcessSection />
        <DiasporaSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
