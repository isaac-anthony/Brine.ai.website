"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  FileCode as LucideFileCode, 
  Cpu as LucideCpu, 
  Users as LucideUsers, 
  ChevronDown as LucideChevronDown 
} from "lucide-react";
import { FadeIn, FadeInStagger } from "./FadeIn";

const layers = [
  {
    id: "directives",
    title: "Directives",
    subtitle: "Custom-Tuned Executive Intelligence",
    description: "We don't use generic prompts. We codify your tribal knowledge into high-fidelity AI SOPs that ensure every agent interaction—from sales to complex operations—reflects your brand's specific logic and ethics.",
    note: "Beyond simple chat. We build the digital SOPs that ensure your AI handles any business process with the precision of your top executive.",
    features: [
      { 
        label: "Tone-Matched Logic", 
        text: "We codify your brand's specific 'voice' so every AI interaction feels like a human member of your team." 
      },
      { 
        label: "Dynamic Decision Trees", 
        text: "Sophisticated 'if/then' frameworks that handle complex sales objections and customer inquiries with 100% accuracy." 
      },
      { 
        label: "Institutional Memory", 
        text: "Your agents are trained on your specific case studies, whitepapers, and pricing sheets to act as a 24/7 subject matter expert." 
      }
    ],
    footer: "Your business logic, immortalized in code.",
    icon: LucideFileCode,
    color: "rgba(0, 113, 227, 0.3)", // Apple Blue
    glow: "blue-glow"
  },
  {
    id: "orchestration",
    title: "Orchestration",
    subtitle: "Universal Process Orchestration",
    description: "Experience a deterministic engine that executes any business workflow. Our orchestration layer handles the 'invisible labor'—from deep data extraction to recursive problem-solving across your entire stack.",
    note: "Universal execution. While others focus on one task, our engine orchestrates complex multi-step workflows across your business 24/7.",
    features: [
      { 
        label: "Multi-Source Data Hunt", 
        text: "Our engine hunts for leads across Google Maps, LinkedIn, and niche directories simultaneously based on your exact criteria." 
      },
      { 
        label: "Recursive Logic Engines", 
        text: "Not just a scraper—a thinker. The system evaluates website data to find the 'Breaking Point' signals where your help is needed most." 
      },
      { 
        label: "Self-Healing Workflows", 
        text: "If a lead data point is missing, the engine automatically pivots to a secondary verification source to ensure zero data gaps." 
      }
    ],
    footer: "Automating 100+ hours of custom business logic monthly.",
    icon: LucideCpu,
    color: "rgba(66, 180, 255, 0.3)", // Light Blue
    glow: "blue-glow"
  },
  {
    id: "clients",
    title: "Clients",
    subtitle: "Seamless Enterprise Connectivity",
    description: "Zero friction, total adoption. Our agents are 'Ghost Team Members' that live inside any API-enabled tool, updating your CRM, alerting your phone, or triggering your specific software actions automatically.",
    note: "Universal Connectivity. Brine.ai works within any of your current tools to turn custom automation into an invisible team member. Note: We provide full white-glove integration with your existing SmartSuite or Salesforce environment.",
    features: [
      { 
        label: "Any-Stack Integration", 
        text: "We connect your agents directly to Slack, Gmail, and SmartSuite so results appear exactly where your team already works." 
      },
      { 
        label: "The Business Intel Hub", 
        text: "Turn your sales data into a chat-ready hub where you can ask, 'What’s our pipeline value this week?' and get an instant answer." 
      },
      { 
        label: "Automated Action Triggers", 
        text: "From booking a Calendly demo to updating a CRM status, every 'Front-of-House' task is handled autonomously." 
      }
    ],
    footer: "High-impact custom work, happening in the background.",
    icon: LucideUsers,
    color: "rgba(107, 114, 128, 0.3)", // Gray
    glow: "neutral-glow"
  }
];

export const Architecture = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(layers[0].id);

  return (
    <section id="architecture" className="py-40 px-6 relative overflow-hidden bg-[#fbfbfd] scroll-mt-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,113,227,0.03),transparent)] pointer-events-none" />
              <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-20">
                  <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tighter">
                    Custom <span className="text-primary">Implementation Architecture.</span>
                  </h2>
                  <p className="text-muted text-lg max-w-xl">
                    The strategic blueprint Brine Consulting uses to design and implement your custom autonomous workflows.
                  </p>
                </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeInStagger className="space-y-4" staggerChildren={0.03}>
            {layers.map((layer) => (
              <FadeIn direction="right" key={layer.id}>
                <motion.button
                  onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                  className={`w-full text-left p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group ${
                    activeLayer === layer.id 
                    ? "bg-white border-black/10 shadow-xl" 
                    : "bg-transparent border-black/5 hover:border-black/10"
                  }`}
                >
                  {activeLayer === layer.id && (
                    <motion.div 
                      layoutId="active-bg"
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10"
                    />
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                        activeLayer === layer.id ? "bg-primary text-white" : "bg-black/5 text-muted group-hover:text-foreground"
                      }`}>
                        <layer.icon size={28} />
                      </div>
                      <div>
                        <h4 className={`text-2xl font-bold transition-colors ${
                          activeLayer === layer.id ? "text-foreground" : "text-muted group-hover:text-foreground"
                        }`}>
                          {layer.title}
                        </h4>
                        <p className={`text-sm transition-colors ${
                          activeLayer === layer.id ? "text-primary font-semibold" : "text-muted/40"
                        }`}>
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: activeLayer === layer.id ? 180 : 0 }}
                      className="text-black/20"
                    >
                      <LucideChevronDown size={24} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeLayer === layer.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-8 text-muted leading-relaxed text-lg italic border-l-2 border-primary/20 pl-6">
                          {layer.description}
                        </p>
                        
                        <div className="mt-8 flex flex-col gap-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest w-fit">
                            Consultant Note
                          </div>
                          <p className="text-foreground font-semibold leading-relaxed">
                            {layer.note}
                          </p>
                        </div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="mt-8 flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest"
                        >
                          Explore Layer Logic <span>→</span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </FadeIn>
            ))}
          </FadeInStagger>

          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {layers.map((layer) => (
                activeLayer === layer.id && (
                  <motion.div 
                    key={layer.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Unique Layer Glow */}
                    <div className={`absolute inset-0 ${layer.glow} opacity-40 animate-pulse`} />
                    
                    <div className="relative glass w-full h-full rounded-[3rem] p-12 border-black/5 overflow-hidden group shadow-2xl shadow-black/5 bg-white">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                       <div className="h-full flex flex-col justify-center gap-8">
                          <div className="flex flex-col gap-4">
                             <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                                <layer.icon size={40} />
                             </div>
                             <h3 className="text-4xl font-bold text-foreground">{layer.title}</h3>
                          </div>
                          
                          <motion.div 
                            variants={{
                              hidden: { opacity: 0 },
                              show: {
                                opacity: 1,
                                transition: {
                                  staggerChildren: 0.05,
                                  delayChildren: 0.1
                                }
                              }
                            }}
                            initial="hidden"
                            animate="show"
                            className="space-y-6"
                          >
                             {layer.features.map((feature, i) => (
                               <motion.div 
                                 key={i} 
                                 variants={{
                                   hidden: { opacity: 0, x: -20 },
                                   show: { opacity: 1, x: 0 }
                                 }}
                                 className="flex gap-4 items-start"
                               >
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                  <div className="flex flex-col gap-1">
                                     <span className="text-foreground font-bold text-lg">{feature.label}</span>
                                     <span className="text-muted text-sm leading-relaxed">{feature.text}</span>
                                  </div>
                               </motion.div>
                             ))}
                          </motion.div>
                          
                          <div className="mt-auto p-6 rounded-2xl bg-black/[0.02] border border-black/5">
                             <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-muted/30 uppercase tracking-[0.2em]">{layer.footer}</span>
                                <span className="text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded-full">ACTIVE</span>
                             </div>
                             <div className="flex gap-1 h-8 items-end">
                                {[...Array(20)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    animate={{ height: [4, 24, 8, 16, 4] }}
                                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                                    className="flex-1 bg-primary/30 rounded-t-sm"
                                  />
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
