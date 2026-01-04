"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Menu as LucideMenu, 
  X as LucideX, 
  ArrowUpRight as LucideArrowUpRight 
} from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] p-6 flex justify-center"
      >
        <nav className="glass px-6 py-3 rounded-2xl flex items-center justify-between w-full max-w-7xl backdrop-blur-md border-b border-slate-200/10 shadow-sm">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/Brine.ai_Logo.png" 
                alt="Brine.ai Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-foreground">
              Brine<span className="text-primary">.ai</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="/#architecture" className="hover:text-primary transition-colors">Architecture</Link>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(0, 113, 227, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group hidden md:flex items-center gap-2 bg-primary px-5 py-2 rounded-xl text-sm font-semibold text-white shadow-sm overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Book a call</span>
              <LucideArrowUpRight className="w-4 h-4 relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-muted hover:text-foreground bg-white/5 rounded-xl border border-white/5"
            >
              {isOpen ? <LucideX className="w-5 h-5" /> : <LucideMenu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-white/80 md:hidden flex flex-col items-center justify-center gap-8"
          >
            <Link href="/#services" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-muted hover:text-foreground transition-colors">Services</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-muted hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/#architecture" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-muted hover:text-foreground transition-colors">Architecture</Link>
            <button className="mt-8 bg-primary text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20">
              Book a call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


