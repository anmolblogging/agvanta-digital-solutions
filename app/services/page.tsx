import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { AboutServices } from "@/components/site/AboutServices";
import { CtaBanner } from "@/components/site/CtaBanner";

export const metadata = {
  title: "Our Services — Agvanta | Agritech Solutions",
  description:
    "Explore our comprehensive range of digital solutions and services for the agriculture sector. From mobile apps to AI automation, loyalty programs, and more.",
  openGraph: {
    title: "Our Services — Agvanta | Agritech Solutions",
    description:
      "Comprehensive agritech solutions including digital platforms, AI automation, WhatsApp integration, and business intelligence for agriculture.",
  },
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Solutions for Digital Agriculture"
        highlight="Digital Platforms | AI Automation | Data Analytics"
        description="We deliver innovative technology solutions designed to accelerate growth and digitize every aspect of the agriculture ecosystem."
      />

      <AboutServices />
      <CtaBanner />
    </SiteLayout>
  );
}
