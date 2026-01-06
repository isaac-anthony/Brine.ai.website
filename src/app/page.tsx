import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Comparison } from "@/components/Comparison";
import { Services } from "@/components/Services";
import { Architecture } from "@/components/Architecture";
import { Stats } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

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
                src="/Brine.ai_Logo.png" 
                alt="Brine.ai Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="text-3xl font-bold tracking-tighter text-foreground">
              Brine Ai <span className="text-primary">Consulting</span>
            </div>
            <div className="text-xs text-muted font-medium mt-1">Custom Autonomous Agents — Engineered by Brine Consulting</div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 text-sm text-[#1d1d1f]/40 font-medium mb-12">
            <a href="#services" className="hover:text-primary transition-colors">About Us</a>
            <a href="#architecture" className="hover:text-primary transition-colors">The Architecture</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Our Agents</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </nav>
          
          <div className="text-[#1d1d1f]/20 text-xs font-medium tracking-[0.2em] uppercase">
            © 2026 Brine.ai — Custom AI Agent Workflows, Implemented by Brine Consulting.
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}
