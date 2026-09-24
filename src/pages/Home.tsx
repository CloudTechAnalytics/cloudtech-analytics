import { useSeo } from "@/lib/seo";
import { CTASection } from "@/components/CTASection";
import { FactsStrip, Hero } from "@/sections/Hero";
import {
  AboutSection,
  IndustriesSection,
  PrinciplesSection,
  ProductsSection,
  ServicesSection,
  TrainingSection,
  ValuesSection,
} from "@/sections/HomeSections";

export default function Home() {
  useSeo({
    title: "CloudTech Analytics | Data, Software, AI and Training in Lagos",
    description:
      "CloudTech Analytics is a technology company in Lagos, Nigeria: makers of The Counsel legal practice software and The Manifest freight platform, with data, AI and analytics training.",
  });

  return (
    <>
      <Hero />
      <FactsStrip />
      <ProductsSection />
      <ServicesSection />
      <TrainingSection />
      <PrinciplesSection />
      <IndustriesSection />
      <AboutSection />
      <ValuesSection className="border-t border-line" />
      <CTASection />
    </>
  );
}
