"use client";

import { motion } from "framer-motion";
import { 
  X as LucideX, 
  Check as LucideCheck, 
  Minus as LucideMinus 
} from "lucide-react";
import { FadeIn, FadeInStagger } from "./FadeIn";

const comparison = [
  {
    manual: "Manual Prospecting: Manually searching for leads and hoping for a match.",
    ai: "On-Demand Discovery: Agents hunt 24/7 based on your exact standards, delivering fresh leads at the time you choose.",
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
    manualColor: "text-muted/40",
    aiColor: "text-primary"
  },
  {
    manual: "Static Data: Relying on basic contact info without knowing if the lead is \"warm.\"",
    ai: "Deep Verification: Every lead is verified and scored (1–10) based on their actual website data and business intent.",
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
    manualColor: "text-muted/40",
    aiColor: "text-primary"
  },
  {
    manual: "Generic Outreach: Sending the same template to everyone and getting ignored.",
    ai: "Hyper-Personalized Hooks: Unique, context-aware messages that sound human and get responses.",
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
    manualColor: "text-muted/40",
    aiColor: "text-primary"
  },
  {
    manual: "Manual Follow-up: Leads die in the inbox because you're too busy to reply.",
    ai: "The Full-Cycle Agent: Our agents handle the entire \"Front-of-House\"—answering questions, sending demos, and booking calls.",
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
    manualColor: "text-muted/40",
    aiColor: "text-primary"
  },
  {
    manual: "Siloed Data: Constant copy-pasting between your inbox and your CRM.",
    ai: "Total Stack Integration: A centralized hub that syncs with your tools and answers questions about your own business data.",
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
    manualColor: "text-muted/40",
    aiColor: "text-primary"
  }
];

export const Comparison = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-[#fbfbfd]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tighter">
            Stop doing <span className="text-muted italic">manual labor.</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up">
          <FadeInStagger
            className="glass rounded-[2.5rem] overflow-hidden border-black/5 shadow-2xl shadow-black/5 bg-white"
          >
            <div className="grid grid-cols-2 border-b border-black/5 bg-black/[0.02]">
               <div className="p-6 text-center text-sm font-bold text-muted uppercase tracking-widest">The Old Way (Manual & Reactive)</div>
               <div className="p-6 text-center text-sm font-bold text-primary uppercase tracking-widest bg-primary/5">The Brine Way (Autonomous & Proactive)</div>
            </div>
            
            <div className="flex flex-col">
              {comparison.map((row, i) => (
                <FadeIn 
                  key={i} 
                  direction="left"
                  className="grid grid-cols-2 border-b border-black/5 last:border-0 group hover:bg-black/[0.01] transition-colors"
                >
                  <div className="p-8 flex items-start gap-4 border-r border-black/5">
                     <row.manualIcon className="text-muted/40 mt-1 shrink-0" size={20} />
                     <span className="text-muted font-medium text-sm leading-relaxed">{row.manual}</span>
                  </div>
                  <div className="p-8 flex items-start gap-4 bg-primary/[0.01]">
                     <row.aiIcon className="text-primary mt-1 shrink-0" size={20} />
                     <span className="text-foreground font-bold text-sm leading-relaxed">{row.ai}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </FadeIn>
      </div>
    </section>
  );
};
