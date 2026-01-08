"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Comparison } from "@/components/Comparison";
import { Services } from "@/components/Services";
import { Architecture } from "@/components/Architecture";
import { Stats } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Stats />
      <Comparison />
      <Services />
      <Architecture />
      <Pricing />
      
      <footer className="py-40 px-6 border-t border-black/5 relative overflow-hidden bg-[#fbfbfd]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blue-glow opacity-20 -z-10" />
        
        <FadeIn className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center border border-black/5 shadow-sm">
              <img 
                src="/BC_Logo_new.png" 
                alt="Brine Ai Consulting Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-3xl font-bold tracking-tighter text-foreground">
              Brine Ai <span className="text-primary">Consulting</span>
            </div>
            <div className="text-xs text-muted font-medium mt-1">Custom Autonomous Agents — Engineered by Brine Consulting</div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 text-sm text-[#1d1d1f]/40 font-medium mb-12">
            <a href="#about-us" className="hover:text-primary transition-colors">About Us</a>
            <a href="#the-architecture" className="hover:text-primary transition-colors">The Architecture</a>
            <a href="#our-agents" className="hover:text-primary transition-colors">Our Agents</a>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </nav>
          
          <div className="text-[#1d1d1f]/20 text-xs font-medium tracking-[0.2em] uppercase mb-8">
            © 2026 Brine.ai — Custom AI Agent Workflows, Implemented by Brine Consulting.
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold text-muted uppercase tracking-[0.3em]">Contact Us</span>
            <motion.a 
              href="mailto:Brineaiconsulting@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass px-8 py-4 rounded-2xl border border-primary/10 bg-white/50 text-lg md:text-xl font-bold text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center gap-3 shadow-xl shadow-primary/5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              Brineaiconsulting@gmail.com
            </motion.a>
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}
