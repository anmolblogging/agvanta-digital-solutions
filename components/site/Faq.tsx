"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What services does Agvanta provide?",
    a: "Agvanta is a leading Agritech Consultancy and Digital Solutions provider. We design and build enterprise SaaS platforms, Agri CRM systems, WhatsApp Business API bots, distributor management portals, supply chain track & trace tracking, and retailer loyalty programs tailored for agribusinesses.",
  },
  {
    q: "How does Agvanta help agri-input companies and startups?",
    a: "We bridge the gap between traditional field operations and modern technology. By implementing custom sales force automation, secondary sales tracking, and AI-enabled farmer advisory tools, we help agri-input companies and startups scale operations, optimize costs, and build stronger relationships.",
  },
  {
    q: "What is Agvanta's Track & Trace solution?",
    a: "Our Track & Trace system uses QR codes and barcodes for anti-counterfeit protection and real-time product authentication. It gives agribusinesses comprehensive secondary sales visibility and detailed supply chain analytics via interactive dashboards.",
  },
  {
    q: "Can Agvanta build customized SaaS and CRM solutions?",
    a: "Yes. We develop scalable, business-specific SaaS platforms, including custom CRM software, learning management systems (LMS) for channel partners, dealer-distributor management systems, and specialized business intelligence dashboards.",
  },
  {
    q: "Who leads Agvanta's consulting and technical strategy?",
    a: "Our advisory services are led by Rajeev Raval, an accomplished Agritech Consultant and Digital Transformation Strategist with over 25 years of hands-on experience in the agri-input industry. He has successfully designed and scaled digital platforms for leading agricultural organizations.",
  },
] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 bg-surface">
      <div className="container-wide grid lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5">
          <span className="eyebrow">FAQ</span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            How can we <span className="text-gradient-green">help</span>?
          </h2>

          <p className="mt-5 text-muted-foreground max-w-md">
            Everything you need to know about Agvanta's agritech consultancy, digital solutions, and custom SaaS platforms. Still curious? We're here to help.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={item.q}
                className="rounded-2xl bg-card border border-border overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-6 p-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg">
                    {item.q}
                  </span>

                  <span
                    className={`h-9 w-9 shrink-0 rounded-full grid place-items-center transition-all ${
                      isOpen
                        ? "bg-gradient-green text-primary-foreground rotate-45"
                        : "bg-accent text-primary-deep"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}