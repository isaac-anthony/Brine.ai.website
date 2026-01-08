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
    name: "The Solo Pilot",
    icon: LucideShieldCheck,
    setup: "Starting at $850",
    monthly: "Starting at $250",
    target: (
      <>
        The <span className="font-bold text-foreground text-primary">perfect starting point</span> for solo business owners who want to <span className="font-bold text-foreground">automate their first sales loop</span>. We build a focused <span className="font-bold text-foreground">'Agent Brain'</span> that finds and contacts your ideal customers while you focus on running your business.
      </>
    ),
    note: (
      <>
        Our <span className="font-bold text-foreground text-primary">'Brain'</span> allows the AI to <span className="font-bold text-foreground">'talk'</span> to your email and database in <span className="font-bold text-foreground">real-time</span>, just like a human employee would.
      </>
    ),
    features: [
      {
        title: "Connect Your Core Tools",
        desc: (
          <>
            We link your email and primary database (like HubSpot or Sheets) so your outreach runs on <span className="font-bold text-foreground text-primary">autopilot with zero manual entry</span>.
          </>
        ),
        icon: LucideZap
      },
      {
        title: "24/7 Outreach Engine",
        desc: (
          <>
            The system <span className="font-bold text-foreground text-primary">never stops looking</span> for new leads and sends <span className="font-bold text-foreground">persistent, friendly follow-ups</span> until you get a response.
          </>
        ),
        icon: LucideTarget
      },
      {
        title: "Monthly Performance Report",
        desc: (
          <>
            Receive a <span className="font-bold text-foreground text-primary">simple, easy-to-read summary</span> every month showing exactly how much work your AI has done and the leads it has found.
          </>
        ),
        icon: LucideDatabase
      },
      {
        title: "Custom Knowledge Base",
        desc: (
          <>
            Your agent is trained on your <span className="font-bold text-foreground text-primary">specific business info</span> and website data so it knows <span className="font-bold text-foreground">exactly who to target</span> and what to say.
          </>
        ),
        icon: LucideCpu
      }
    ],
    recommended: false
  },
  {
    name: "The SDR",
    icon: LucideZap,
    setup: "Starting at $2,000",
    monthly: "Starting at $550",
    target: (
      <>
        Our <span className="font-bold text-foreground text-primary">most popular choice</span> for growing teams. This is a complete <span className="font-bold text-foreground">autonomous sales department</span> that acts as a <span className="font-bold text-foreground">'Central Brain'</span> for your sales stack—syncing discovery, outreach, and CRM updates in <span className="font-bold text-foreground text-primary">real-time</span>.
      </>
    ),
    note: (
      <>
        Our <span className="font-bold text-foreground text-primary">'Central Brain'</span> allows the AI to <span className="font-bold text-foreground">'talk'</span> to your Gmail and CRM in <span className="font-bold text-foreground">real-time</span>, just like a human employee would.
      </>
    ),
    features: [
      {
        title: "Finding Your Best Leads",
        desc: (
          <>
            The system <span className="font-bold text-foreground text-primary">hunts for your perfect customers</span> around the clock. It finds them, confirms they match your <span className="font-bold text-foreground">exact standards</span>, and double-checks their info.
          </>
        ),
        icon: LucideTarget
      },
      {
        title: "Knowing Who is Ready to Buy",
        desc: (
          <>
            Our AI reads through every lead to find the ones who <span className="font-bold text-foreground text-primary">need your help most</span>. When it identifies a <span className="font-bold text-foreground">high-value opportunity</span>, it alerts you instantly.
          </>
        ),
        icon: LucideCpu
      },
      {
        title: "Handling the Conversations",
        desc: (
          <>
            The agent <span className="font-bold text-foreground text-primary">manages your inbox</span> for you. It reads every reply, answers their questions in <span className="font-bold text-foreground">your voice</span>, and sends your booking link directly.
          </>
        ),
        icon: LucideUsers
      },
      {
        title: "Total Relationship Management",
        desc: (
          <>
            The system ensures <span className="font-bold text-foreground text-primary">no deal is ever forgotten</span>. It records <span className="font-bold text-foreground">every interaction</span> in your CRM and follows up to keep your pipeline full.
          </>
        ),
        icon: LucideZap
      }
    ],
    recommended: true,
    badge: "Flagship Solution"
  },
  {
    name: "The Customer Support Agent",
    icon: LucideUsers,
    setup: "Starting at $2,499",
    monthly: "Starting at $799",
    target: (
      <>
        Your business's first <span className="font-bold text-foreground text-primary">'Digital Front Desk.'</span> It serves as an <span className="font-bold text-foreground">'Intelligent Brain'</span> that live-syncs with your inbox and internal data, solving complex customer problems <span className="font-bold text-foreground text-primary">instantly</span>.
      </>
    ),
    note: (
      <>
        Our <span className="font-bold text-foreground text-primary">'Intelligent Brain'</span> allows the AI to <span className="font-bold text-foreground">'talk'</span> to your inbox and business software in <span className="font-bold text-foreground">real-time</span>, just like a human employee would.
      </>
    ),
    features: [
      {
        title: "Instant Support Hub",
        desc: (
          <>
            Every customer email is <span className="font-bold text-foreground text-primary">analyzed and answered in seconds</span> using your <span className="font-bold text-foreground">specific business rules</span> and live order data.
          </>
        ),
        icon: LucideCpu
      },
      {
        title: "Full Team Memory",
        desc: (
          <>
            We feed your <span className="font-bold text-foreground text-primary">entire policy manual</span> into the AI so it responds with the <span className="font-bold text-foreground">precision and knowledge</span> of your best employee.
          </>
        ),
        icon: LucideDatabase
      },
      {
        title: "Safety First Protocol",
        desc: (
          <>
            The agent handles simple issues <span className="font-bold text-foreground text-primary">instantly</span> but flags complex questions for a <span className="font-bold text-foreground">'Second Pair of Eyes'</span> Slack alert.
          </>
        ),
        icon: LucideShieldCheck
      },
      {
        title: "Autonomous Action",
        desc: (
          <>
            The system updates your records and <span className="font-bold text-foreground text-primary">manages your inbox 24/7</span>. It can work in <span className="font-bold text-foreground">fully autonomous mode</span> or draft-only mode.
          </>
        ),
        icon: LucideZap
      }
    ],
    recommended: false
  }
];

const PricingCard = ({ solution, isExpanded, onToggle }: { 
  solution: typeof solutions[0], 
  isExpanded: boolean, 
  onToggle: () => void 
}) => {
  return (
    <FadeIn key={solution.name} direction="up" className="h-full" duration={0.2}>
      <motion.div 
        layout
        onClick={onToggle}
        transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
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

          <div className="h-20 mb-4 flex items-center">
            <h3 className="text-3xl font-bold text-foreground tracking-tight leading-tight">{solution.name}</h3>
          </div>
          <div className="min-h-[180px] md:min-h-[200px]">
            <div className="text-muted text-sm leading-relaxed">
              {solution.target}
            </div>
          </div>
          
          <div className="flex flex-col gap-3 p-6 rounded-[2rem] bg-black/[0.02] border border-black/5 mt-auto h-40 justify-center">
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-muted text-[9px] font-bold uppercase tracking-wider mb-1">Implementation Fee</span>
                <span className={`${solution.setup.length > 12 ? "text-xl" : "text-3xl"} font-bold text-foreground transition-all leading-none`}>{solution.setup}</span>
              </div>
            </div>
            <div className="h-px bg-black/5 w-full" />
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-muted text-[9px] font-bold uppercase tracking-wider mb-1">Monthly</span>
                <div className="flex items-baseline gap-1">
                  <span className={`${solution.monthly.length > 12 ? "text-xl" : "text-2xl"} font-bold text-primary transition-all leading-none`}>{solution.monthly}</span>
                  <span className="text-primary/60 text-[10px] font-medium">/mo</span>
                </div>
              </div>
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
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-8 mb-12">
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
                  <div className="text-xs text-primary leading-relaxed italic font-medium">
                    "{solution.note}"
                  </div>
                </div>
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
                      <div className="text-sm text-muted leading-relaxed">{feature.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://calendly.com/brineaiconsulting/30min"
                target="_blank"
                rel="noopener noreferrer"
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
              </motion.a>
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
};

export const Pricing = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="our-agents" className="pt-40 pb-40 px-6 relative bg-[#fbfbfd] scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,113,227,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-24" duration={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tighter">
            Strategic <span className="text-primary">Implementation Tiers.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Outcome-focused pricing for businesses ready to transition from manual labor to autonomous infrastructure.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-12" staggerChildren={0.02}>
          {/* Category Headers Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 hidden md:grid">
            <div className="col-span-2 flex items-center gap-4">
              <div className="h-px bg-primary/10 flex-1" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary whitespace-nowrap">Our SDR (Growth)</h3>
              <div className="h-px bg-primary/10 flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <div className="h-px bg-secondary/10 flex-1" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary whitespace-nowrap">Our Support (Operations)</h3>
              <div className="h-px bg-secondary/10 flex-1" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {solutions.map((solution) => (
              <PricingCard 
                key={solution.name} 
                solution={solution} 
                isExpanded={expandedId === solution.name}
                onToggle={() => setExpandedId(expandedId === solution.name ? null : solution.name)}
              />
            ))}
          </div>
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
              <a 
                href="https://calendly.com/brineaiconsulting/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0f172a] px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl inline-block"
              >
                Consult with an Architect →
              </a>
           </div>
        </FadeIn>
      </div>
    </section>
  );
};
