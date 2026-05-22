import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { BrandStory } from "@/components/site/BrandStory";
import { OriginInterpretation } from "@/components/site/OriginInterpretation";
import { LeaderProfile } from "@/components/site/LeaderProfile";
import { AboutServices } from "@/components/site/AboutServices";
import { WhyAgvanta } from "@/components/site/WhyAgvanta";
import { MissionValues } from "@/components/site/MissionValues";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

export const metadata = {
  title: "About Us — Agvanta Services | Empowering Agriculture",
  description:
    "Agvanta Services is an Agritech Consultancy & Digital Solutions company focused on transforming the agriculture ecosystem through innovative technology, intelligent automation, and data-driven business solutions.",
  openGraph: {
    title: "About Us — Agvanta Services | Empowering Agriculture",
    description:
      "Transforming the agriculture ecosystem with agritech consultancy, digital transformation, and AI-powered business solutions.",
  },
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Agvanta Services"
        title="Empowering Agriculture Through Technology, Intelligence &amp; Innovation"
        highlight="Agritech Consultancy | Digital Transformation | AI-Powered Business Solutions"
        description="We partner with agri-input companies, agritech startups, agribusiness enterprises, and corporates to accelerate growth and build scalable digital ecosystems."
      />

      <BrandStory />
      <OriginInterpretation />
      <LeaderProfile />
      <AboutServices />
      <WhyAgvanta />
      <MissionValues />
      <Testimonials />
      <CtaBanner />
    </SiteLayout>
  );
}