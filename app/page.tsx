import { siteContent } from "@/lib/site-data";
import { HeaderBar } from "@/components/sections/HeaderBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  const { header, hero, services, about, contact, footer } = siteContent;

  return (
    <>
      <HeaderBar config={header} />
      <main id="main-content" className="flex-1">
        <HeroSection config={hero} />
        <ServicesSection config={services} />
        <AboutSection config={about} />
        <ContactSection config={contact} />
      </main>
      <FooterSection config={footer} />
    </>
  );
}
