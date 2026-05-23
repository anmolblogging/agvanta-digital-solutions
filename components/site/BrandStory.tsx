"use client";

import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

export function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background leaf/shape */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 0C400 0 400 200 200 400C0 600 0 800 0 800H800C800 800 800 600 600 400C400 200 400 0 400 0Z" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight"
          >
            The Spirit of Agvanta
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>Agvanta Services is an Agritech Consultancy &amp; Digital Solutions company focused on transforming
the agriculture ecosystem through innovative technology, intelligent automation, and data-driven
business solutions. We partner with agri-input companies, agritech startups, agribusiness
enterprises, and corporates to accelerate growth, strengthen customer engagement, streamline
operations, and build scalable digital ecosystems for the future of agriculture.</p>
<p>With a strong foundation in agriculture and deep understanding of agri-business operations,
Agvanta delivers customized solutions that bridge the gap between traditional agricultural
practices and modern digital transformation. Our approach combines domain expertise,
technology innovation, analytics, and business intelligence to help organizations achieve
operational excellence and sustainable growth.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-border">
              <img 
                src="/about.png" 
                alt="Agvanta Brand Story" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Logo Interpretation Card */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -left-2 md:-left-16 bg-white p-6 rounded-2xl shadow-glow ring-1 ring-border max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 bg-gradient-brand rounded-lg grid place-items-center">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">Logo Meaning</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The elegant "A" represents both Agvanta and Aham. The green leaf merging into vibrant blue symbolizes the fusion of nature's wisdom with modern data-driven technology.
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
