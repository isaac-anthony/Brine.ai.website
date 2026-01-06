"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight as LucideArrowRight, 
  Play as LucidePlay 
} from "lucide-react";
import { FadeIn, FadeInStagger } from "./FadeIn";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-10 overflow-hidden bg-[#fbfbfd] mesh-hero">
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
            Building Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#1d1d1f] to-primary/80">
              Autonomous Workforce.
            </span>
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Engineered by <span className="font-bold text-foreground">UC Berkeley Alum</span> and former <span className="font-bold text-foreground">Database Architects</span>. Brine Ai Consulting builds and deploys <span className="font-bold text-foreground">custom autonomous agents</span> that handle your sales, support, and business operations. <span className="font-bold text-foreground text-primary">Scalable growth, zero headcount.</span>
          </p>
        </FadeIn>

                <FadeIn>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.a
                      href="https://calendly.com/brineaiconsulting/30min"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </motion.a>

            <button className="flex items-center gap-3 text-muted hover:text-foreground transition-colors font-semibold group">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-black/5 transition-colors">
                <LucidePlay className="w-5 h-5 fill-foreground text-foreground" />
              </div>
              Watch Demo
            </button>
          </div>
        </FadeIn>
      </FadeInStagger>
    </section>
  );
};





