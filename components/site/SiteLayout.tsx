import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { getAllProducts } from "@/lib/wp-api";

export async function SiteLayout({ children }: { children: ReactNode }) {
  const products = await getAllProducts().catch(() => []);
  const footerProducts = products.map((p) => ({ name: p.name, slug: p.slug }));

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer products={footerProducts} />
      <WhatsAppButton />
    </div>
  );
}