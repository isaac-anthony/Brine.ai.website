"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Check as LucideCheck, 
  ArrowRight as LucideArrowRight, 
  Zap as LucideZap, 
  ShieldCheck as LucideShieldCheck, 
  Layers as LucideLayers, 
  Target as LucideTarget, 
  Cpu as LucideCpu, 
  Users as LucideUsers, 
  Database as LucideDatabase, 
  Plus as LucidePlus, 
  Minus as LucideMinus 
} from "lucide-react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { useState } from "react";

const solutions = [
  {
    name: "The SDR",
    icon: LucideZap,
    setup: "$3,999",
    setupLabel: "Custom Implementation",
    monthly: "$650",
    monthlyLabel: "Operational Infrastructure",
    target: "A fully autonomous SDR infrastructure that executes the entire sales lifecycle—from high-intent discovery and multi-channel outreach to persistent, intelligent nurturing. It synchronizes every interaction into your CRM and serves as a unified MCP bridge for your application stack.",
    features: [
      {
        title: "Finding Your Best Leads",
        desc: "The system hunts for your perfect customers around the clock. It finds them, confirms they match your exact standards, and double-checks their info so every message reaches its target.",
        icon: LucideTarget
      },
      {
        title: "Knowing Who is Ready to Buy",
        desc: "Our AI reads through every lead to find the ones who need your help most. When it identifies a high-value opportunity, it alerts you instantly so you can step in and win.",
        icon: LucideCpu
      },
      {
        title: "Handling the Conversations",
        desc: "The agent manages your inbox for you. It reads every reply, answers their questions, and sends your booking link directly to people when they are ready to talk.",
        icon: LucideUsers
      },
      {
        title: "Keeping Everything on Track",
        desc: "The system ensures no lead is ever forgotten. It follows up with people who haven't replied and constantly learns how to get more people to say 'Yes' to your business.",
        icon: LucideZap
      }
    ],
    recommended: true,
    badge: "Flagship Solution"
  },
  {
    name: "The Enterprise Partner",
    icon: LucideLayers,
    setup: "Custom",
    setupLabel: "Starting at $7,500",
    monthly: "$1,999",
    monthlyLabel: "Enterprise Infrastructure",
    target: "High-volume operations requiring multi-agent collaboration and deep data orchestration.",
    features: [
      {
        title: "Multi-Agent Ecosystems",
        desc: "Multiple agents working in tandem (Sales + Support + Operations) to handle the entire business cycle.",
        icon: LucideLayers
      },
      {
        title: "Custom Data Ingestion",
        desc: "Integration with large internal datasets or private vector databases for high-fidelity, context-aware responses.",
        icon: LucideDatabase
      },
      {
        title: "Priority Recursive Learning",
        desc: "Weekly optimization of prompts and strategies based on large-scale response data and market shifts.",
        icon: LucideCpu
      }
    ],
    recommended: false
  }
];

export const Pricing = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-40 px-6 relative overflow-hidden bg-[#fbfbfd] scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,113,227,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tighter">
            Strategic <span className="text-primary">Implementation Tiers.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Outcome-focused pricing for businesses ready to transition from manual labor to autonomous infrastructure.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {solutions.map((solution, i) => {
            const isExpanded = expandedId === solution.name;
            
            return (
              <FadeIn key={solution.name} direction="up" className="h-full">
                <motion.div 
                  layout
                  onClick={() => setExpandedId(isExpanded ? null : solution.name)}
                  transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  className={`relative h-full glass p-8 md:p-10 rounded-[3rem] flex flex-col group transition-all duration-500 bg-white border-black/5 cursor-pointer ${
                    isExpanded 
                    ? "ring-2 ring-primary/20 shadow-2xl shadow-primary/10" 
                    : "hover:shadow-xl hover:shadow-black/5"
                  }`}
                >
                  {solution.recommended && (
                    <motion.div 
                      layout
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg z-10 whitespace-nowrap"
                    >
                      {solution.badge}
                    </motion.div>
                  )}
                  
                  <motion.div layout className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                        <solution.icon size={24} />
                      </div>
                      <div className={`p-2 rounded-full border border-black/5 transition-colors ${isExpanded ? "bg-primary text-white" : "bg-black/5 text-muted"}`}>
                        {isExpanded ? <LucideMinus size={16} /> : <LucidePlus size={16} />}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">{solution.name}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-8">
                      {solution.target}
                    </p>
                    
                    <div className="flex flex-col gap-3 p-6 rounded-[2rem] bg-black/[0.02] border border-black/5">
                      <div className="flex items-baseline justify-between">
                        <span className="text-4xl font-bold text-foreground">{solution.setup}</span>
                        <span className="text-muted text-[10px] font-bold uppercase tracking-widest">{solution.setupLabel}</span>
                      </div>
                      <div className="h-px bg-black/5 w-full" />
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-primary">{solution.monthly}</span>
                          <span className="text-primary/60 text-sm font-medium">/mo</span>
                        </div>
                        <span className="text-muted text-[10px] font-bold uppercase tracking-widest">{solution.monthlyLabel}</span>
                      </div>
                    </div>
                  </motion.div>

                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div 
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-8 mb-12">
                          <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Full Infrastructure Deliverables:</p>
                          {solution.features.map((feature) => (
                            <motion.div 
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              key={feature.title} 
                              className="flex items-start gap-5 group/item"
                            >
                              <div className="mt-1 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                                <feature.icon size={18} />
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-foreground font-bold text-md tracking-tight">{feature.title}</span>
                                <span className="text-sm text-muted leading-relaxed">{feature.desc}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                          className={`w-full py-6 rounded-2xl font-bold text-md flex items-center justify-center gap-3 transition-all shadow-lg mb-4 ${
                            solution.recommended 
                            ? "bg-primary text-white shadow-primary/20" 
                            : "bg-[#1d1d1f] text-white hover:bg-black"
                          }`}
                        >
                          Apply for Implementation
                          <LucideArrowRight size={20} />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {!isExpanded && (
                    <motion.div 
                      layout
                      className="flex items-center justify-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mt-auto pt-4"
                    >
                      View Full Details <LucidePlus size={12} />
                    </motion.div>
                  )}
                </motion.div>
              </FadeIn>
            );
          })}
        </FadeInStagger>

        <FadeIn className="mt-32 p-16 glass rounded-[3rem] bg-[#0f172a] text-center border-white/10 relative overflow-hidden shadow-2xl shadow-primary/10 group">
           <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-700">
              <LucideLayers size={180} />
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Need Custom Architecture?</h2>
              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                For organizations requiring unique multi-agent ecosystems or specialized private data models, our consultants design custom roadmaps starting from the ground up.
              </p>
              <button className="bg-white text-[#0f172a] px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                Consult with an Architect →
              </button>
           </div>
        </FadeIn>
      </div>
    </section>
  );
};
