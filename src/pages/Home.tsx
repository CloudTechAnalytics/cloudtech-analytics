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
    title: "CloudTech Analytics | Data, Software & AI Solutions",
    description:
      "CloudTech Analytics builds business software, data solutions, AI applications and technology services designed around real operational workflows.",
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
