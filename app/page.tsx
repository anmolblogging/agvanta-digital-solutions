import { SiteLayout } from "@/components/site/SiteLayout";
import DigitalContent from "@/components/site/DigitalContent";
import { getAllProducts } from "@/lib/wp-api";

export const metadata = {
  title: "Digital Advisory — Smart farming in your pocket | Agvanta",
  description:
    "The Agvanta digital advisory delivers personalised, weather-aware recommendations on sowing, irrigation, nutrition and protection — in your language.",
  openGraph: {
    title: "Agvanta Digital Advisory",
    description:
      "An agronomist in your pocket — personalised, weather-aware crop guidance for every Indian farmer.",
  },
};

export default async function DigitalPage() {
  const products = await getAllProducts();

  return (
    <SiteLayout>
      <DigitalContent products={products} />
    </SiteLayout>
  );
}