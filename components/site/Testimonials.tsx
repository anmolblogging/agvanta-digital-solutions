"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ITEMS = [
  {
    quote:
      "Agvanta's customized retailer loyalty platform and secondary sales tracking completely transformed our channel engagement. We saw a 30% increase in active retail participation within just six months.",
    name: "Sunil Deshmukh",
     role: "Rajasthan",
  },
  {
    quote:
      "Integrating Agvanta's AI-powered WhatsApp advisory bot allowed us to scale farmer support to over 50,000 active growers. Their agritech domain expertise made the implementation incredibly smooth.",
    name: "Ramesh Kumar",
    role: "Rajasthan",
  },
  {
    quote:
      "The custom Agri CRM and track-and-trace analytics designed by Agvanta solved our supply chain visibility challenges. We now have real-time secondary sales insights and reliable anti-counterfeit protection.",
    name: "Amit Sharma",
     role: "Rajasthan",
  },
] as const;

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">Trusted by Agribusinesses</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Driving real growth and digital <span className="text-gradient-brand">transformation</span>.
            </h2>
          </div>
          
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl bg-card border border-border p-7 flex flex-col gap-5 hover:shadow-elegant transition-all"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-base leading-relaxed">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-auto pt-4 border-t border-border">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}