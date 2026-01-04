"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight as LucideArrowRight, 
  Play as LucidePlay 
} from "lucide-react";
import { FadeIn, FadeInStagger } from "./FadeIn";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-40 overflow-hidden bg-[#fbfbfd] mesh-hero">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] blue-glow -z-10 animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] neutral-glow -z-10 animate-pulse delay-1000 opacity-20" />

      <FadeInStagger className="max-w-5xl w-full text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-2xl text-xs font-semibold text-primary mb-8 border border-primary/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            TRUSTED BY 50+ SMALL BUSINESSES
          </div>
        </FadeIn>

        <FadeIn>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-foreground">
            The Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#1d1d1f] to-primary/80">
              Sales Engine.
            </span>
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Brine.ai Consulting designs and implements custom autonomous workflows that solve your unique business bottlenecks. We don't just sell software; we build the bespoke AI infrastructure your organization needs to scale.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 0px 20px rgba(0, 113, 227, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              <span className="relative">Start Automating</span>
              <LucideArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <button className="flex items-center gap-3 text-muted hover:text-foreground transition-colors font-semibold group">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-black/5 transition-colors">
                <LucidePlay className="w-5 h-5 fill-foreground text-foreground" />
              </div>
              Watch Demo
            </button>
          </div>
        </FadeIn>
      </FadeInStagger>

      {/* Hero Visual - Dashboard Preview */}
      <FadeIn delay={0.6}>
        <div className="mt-80 w-full max-w-6xl glass rounded-3xl p-4 relative overflow-hidden group shadow-2xl shadow-primary/5 bg-white">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="aspect-[16/9] bg-black/[0.02] rounded-2xl flex items-center justify-center border border-black/[0.05]">
             {/* Decorative placeholder removed to clear background for stats */}
             <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-20" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};





