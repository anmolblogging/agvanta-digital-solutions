"use client";

import { motion } from "framer-motion";
import { 
  Sprout, 
  Award, 
  Cpu, 
  Sparkles, 
  Heart, 
  BarChart3, 
  Layers, 
  UserCheck, 
  Trophy 
} from "lucide-react";

const ITEMS = [
  { 
    icon: Sprout, 
    title: "Deep Agriculture Understanding", 
    desc: "A rich understanding of the agriculture ecosystem and its unique challenges.",
    tone: "green" 
  },
  { 
    icon: Award, 
    title: "25+ Years of Industry Experience", 
    desc: "Led by professionals with decades of domain knowledge and success.",
    tone: "blue" 
  },
  { 
    icon: Cpu, 
    title: "Digital Transformation & Automation", 
    desc: "Expertise in digitizing processes, optimizing operations, and automating tasks.",
    tone: "green" 
  },
  { 
    icon: Sparkles, 
    title: "AI-driven Business Solutions", 
    desc: "Leveraging state-of-the-art AI technology for smart decision support.",
    tone: "blue" 
  },
  { 
    icon: Heart, 
    title: "CRM & Loyalty Program Expertise", 
    desc: "Proven capabilities in establishing distributor networks and dealer loyalty programs.",
    tone: "green" 
  },
  { 
    icon: BarChart3, 
    title: "Data Analytics & Business Intelligence", 
    desc: "Transforming complex agri-business datasets into actionable insights.",
    tone: "blue" 
  },
  { 
    icon: Layers, 
    title: "Customized & Scalable Tech", 
    desc: "Tailor-made software architectures built to scale with your enterprise growth.",
    tone: "green" 
  },
  { 
    icon: UserCheck, 
    title: "Farmer & Channel-Centric Approach", 
    desc: "Tailored engagement strategies for farmers, distributors, retailers, and field teams.",
    tone: "blue" 
  },
  { 
    icon: Trophy, 
    title: "Strategic Consulting & Execution", 
    desc: "Bridging the gap between corporate planning and practical, result-driven execution.",
    tone: "green" 
  },
] as const;

export function WhyAgvanta() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
          alt="Farm background"
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container-wide">
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Why Choose <span className="text-gradient-green">Agvanta</span>?
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed text-sm md:text-base">
            We combine deep agricultural expertise with practical digital execution to deliver business-oriented, scalable, and result-driven solutions.
          </p>
        </div>

        {/* 9-Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="group relative rounded-3xl border border-border bg-card/60 backdrop-blur-xs p-6 hover:shadow-elegant hover:bg-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className={`h-12 w-12 rounded-2xl grid place-items-center text-primary-foreground shadow-sm group-hover:scale-105 transition-transform ${
                    item.tone === "green" ? "bg-gradient-green" : "bg-gradient-blue"
                  }`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-medium leading-snug text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}