"use client";

import { Header } from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import { FadeIn } from "@/components/FadeIn";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd]">
      <Header />
      
      <div className="pt-10">
        <Pricing />
      </div>

      <footer className="py-40 px-6 border-t border-black/5 bg-[#fbfbfd]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/5 shadow-sm">
              <img src="/Brine.ai_Logo.png" alt="Brine.ai Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <div>
              <div className="text-3xl font-bold tracking-tighter text-foreground">Brine<span className="text-primary">.ai</span></div>
              <div className="text-xs text-muted font-medium mt-1">Custom Autonomous Agents — Engineered by Brine Consulting</div>
            </div>
          </div>
          <nav className="flex gap-8 text-sm text-muted font-medium">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/#services" className="hover:text-primary transition-colors">Services</a>
            <a href="/pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="/#architecture" className="hover:text-primary transition-colors">Architecture</a>
          </nav>
          <div className="text-[#1d1d1f]/20 text-xs font-medium tracking-[0.2em] uppercase">
            © 2026 Brine.ai — Custom Sales Infrastructure, Implemented by Brine Consulting.
          </div>
        </div>
      </footer>
    </main>
  );
}
