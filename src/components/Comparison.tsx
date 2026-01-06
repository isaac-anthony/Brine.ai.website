"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X as LucideX, 
  Check as LucideCheck, 
  Minus as LucideMinus 
} from "lucide-react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { useState } from "react";

export const sdrComparison = [
  {
    manual: "Manual Prospecting: Manually searching for leads and hoping for a match.",
    ai: (
      <>
        On-Demand Discovery: Agents <span className="font-bold text-foreground">hunt 24/7</span> based on your <span className="font-bold text-foreground text-primary">exact standards</span>, delivering fresh leads at the time you choose.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  },
  {
    manual: "Static Data: Relying on basic contact info without knowing if the lead is \"warm.\"",
    ai: (
      <>
        Deep Verification: Every lead is <span className="font-bold text-foreground text-primary">verified and scored (1–10)</span> based on their actual website data and <span className="font-bold text-foreground">business intent</span>.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  },
  {
    manual: "Generic Outreach: Sending the same template to everyone and getting ignored.",
    ai: (
      <>
        Hyper-Personalized Hooks: <span className="font-bold text-foreground">Unique, context-aware messages</span> that <span className="font-bold text-foreground text-primary">sound human</span> and get responses.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  },
  {
    manual: "Manual Follow-up: Leads die in the inbox because you're too busy to reply.",
    ai: (
      <>
        The Full-Cycle Agent: Our agents handle the <span className="font-bold text-foreground text-primary">entire "Front-of-House"</span>—answering questions, sending demos, and <span className="font-bold text-foreground">booking calls</span>.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  },
  {
    manual: "Siloed Data: Constant copy-pasting between your inbox and your CRM.",
    ai: (
      <>
        Total Stack Integration: A <span className="font-bold text-foreground">centralized hub</span> that syncs with your tools and answers questions about your <span className="font-bold text-foreground text-primary">own business data</span>.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  }
];

export const supportComparison = [
  {
    manual: "Reactive Support: Waiting for a human to wake up and check the ticket queue.",
    ai: (
      <>
        Instant Resolution: Agents <span className="font-bold text-foreground text-primary">trigger 24/7</span>, fetching <span className="font-bold text-foreground">live order data</span> via our Intelligent Brain to resolve queries in <span className="font-bold text-foreground text-primary">seconds</span>.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  },
  {
    manual: "Outdated Knowledge: Relying on a human's memory of the latest company policies or pricing.",
    ai: (
      <>
        Live-Sync Memory: The agent is <span className="font-bold text-foreground text-primary">natively connected</span> to your Website and SOPs for <span className="font-bold text-foreground">zero-hallucination accuracy</span>.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  },
  {
    manual: "Information Silos: Toggling between Gmail, Shopify, and Google Sheets to find one answer.",
    ai: (
      <>
        Total Stack Orchestration: A <span className="font-bold text-foreground">centralized brain</span> that "reads" your entire ecosystem to provide a <span className="font-bold text-foreground text-primary">full-context reply</span>.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  },
  {
    manual: "Manual Escalation: Tickets getting lost or forgotten if they are too complex for the first responder.",
    ai: (
      <>
        Safety Protocol: <span className="font-bold text-foreground text-primary">High-confidence autonomous replies</span>, with seamless <span className="font-bold text-foreground">"Second Pair of Eyes"</span> drafts for complex cases.
      </>
    ),
    manualIcon: LucideMinus,
    aiIcon: LucideCheck,
  }
];

export const Comparison = () => {
  const [activeComparison, setActiveComparison] = useState<"sdr" | "support">("sdr");

  const currentComparison = activeComparison === "sdr" ? sdrComparison : supportComparison;
  const oldWayHeader = activeComparison === "sdr" ? "The Old Way (Manual & Reactive)" : "The Old Way (Static & Human-Dependent)";
  const brineWayHeader = activeComparison === "sdr" ? "The Brine Way (Autonomous & Proactive)" : "The Brine Way (Autonomous & Live)";

  return (
    <section id="comparison" className="py-40 px-6 relative bg-[#fbfbfd]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tighter">
            Stop doing <span className="text-muted italic">manual labor.</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up">
          <div className="flex justify-center gap-4 mb-12">
            <motion.button
              onClick={() => setActiveComparison("sdr")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeComparison === "sdr" 
                ? "bg-primary text-white shadow-md" 
                : "bg-white text-muted hover:bg-black/5 border border-black/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our SDR
            </motion.button>
            <motion.button
              onClick={() => setActiveComparison("support")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeComparison === "support" 
                ? "bg-primary text-white shadow-md" 
                : "bg-white text-muted hover:bg-black/5 border border-black/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Support
            </motion.button>
          </div>

          <FadeInStagger
            className="glass rounded-[2.5rem] overflow-hidden border-black/5 shadow-2xl shadow-black/5 bg-white"
          >
            <div className="grid grid-cols-2 border-b border-black/5 bg-black/[0.02]">
               <div className="p-6 text-center text-sm font-bold text-muted uppercase tracking-widest">{oldWayHeader}</div>
               <div className="p-6 text-center text-sm font-bold text-primary uppercase tracking-widest bg-primary/5">{brineWayHeader}</div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComparison}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col"
              >
                {currentComparison.map((row, i) => (
                  <FadeIn 
                    key={i} 
                    direction="left"
                    className="grid grid-cols-2 border-b border-black/5 last:border-0 group hover:bg-black/[0.01] transition-colors"
                  >
                    <div className="p-8 flex items-start gap-4 border-r border-black/5">
                       <row.manualIcon className="text-muted/40 mt-1 shrink-0" size={20} />
                       <div className="text-muted font-medium text-sm leading-relaxed">
                         {row.manual}
                       </div>
                    </div>
                    <div className="p-8 flex items-start gap-4 bg-primary/[0.01]">
                       <row.aiIcon className="text-primary mt-1 shrink-0" size={20} />
                       <div className="text-foreground font-bold text-sm leading-relaxed">
                         {row.ai}
                       </div>
                    </div>
                  </FadeIn>
                ))}
              </motion.div>
            </AnimatePresence>
          </FadeInStagger>
        </FadeIn>
      </div>
    </section>
  );
};
