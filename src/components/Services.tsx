"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Search as LucideSearch, 
  BrainCircuit as LucideBrainCircuit, 
  MousePointer2 as LucideMousePointer2, 
  Zap as LucideZap, 
  CheckCircle2 as LucideCheckCircle2 
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";

const names = [
  { name: "Tech Agency in NY", score: "9.2" },
  { name: "Law Firm in LA", score: "4.5" },
  { name: "SaaS Startup in SF", score: "8.8" },
  { name: "Dental Clinic in Miami", score: "3.2" }
];

const LeadDiscoveryCard = () => {
  const [progress, setProgress] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setNameIndex((ni) => (ni + 1) % names.length);
          return 0;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full justify-center">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted uppercase tracking-widest text-[10px]">Acquisition Velocity</span>
        <span className="text-xs text-primary font-bold">{progress}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div 
          className="h-full bg-primary shadow-[0_0_15px_rgba(124,58,237,0.5)]" 
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="mt-2 p-3 rounded-xl bg-white/5 border border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={nameIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-between text-[10px]"
          >
            <span className="text-muted">Scanned: <span className="text-white">{names[nameIndex].name}</span></span>
            <span className="font-bold text-primary">Result: {names[nameIndex].score} Score</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const LeadScoreWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
        {/* The Animated Ring and Checkmark */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* SVG Circle for the animation */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
             <motion.circle 
               cx="48" cy="48" r="44" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="6"
               strokeDasharray="276"
               initial={{ strokeDashoffset: 276 }}
               whileInView={{ strokeDashoffset: 0 }}
               viewport={{ once: false }}
               transition={{ duration: 1.2, ease: "easeInOut" }}
               className="text-primary"
             />
          </svg>

          {/* The Checkmark that appears after the ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="z-10 text-primary"
          >
            <LucideCheckCircle2 size={48} className="fill-white" />
          </motion.div>
        </motion.div>
      </div>
      <span className="text-xs font-bold text-primary uppercase tracking-widest">Verified Intent</span>
      <p className="text-[10px] text-muted mt-2">Qualified Lead Detected</p>
    </div>
  );
};

export const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} id="about-us" className="py-40 px-6 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Parallax Background Glows */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] blue-glow opacity-10 -z-10" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] neutral-glow opacity-10 -z-10" 
      />

      <FadeIn className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tighter">
          Custom Implementation, <span className="text-primary">Engineered for Velocity.</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          We save <span className="font-bold text-foreground">hundreds of hours</span> of manual labor by implementing <span className="font-bold text-foreground">custom autonomous workflows</span> in weeks, not months. We don't just provide tools; we build the <span className="font-bold text-foreground text-primary">infrastructure that scales your output</span> without increasing your payroll.
        </p>
      </FadeIn>

      <FadeInStagger 
        className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6"
      >
        <FadeIn direction="up" className="md:col-span-2 md:row-span-1">
          <div className="glass p-8 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-xl transition-all bg-white h-full min-h-[350px] border-black/5 backdrop-blur-2xl">
            <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                <LucideSearch size={120} />
            </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">Custom Lead Discovery</h3>
                        <p className="text-muted text-sm max-w-xs">We build <span className="font-bold text-foreground">custom-tuned engines</span> that identify <span className="font-bold text-foreground text-primary">250+ qualified businesses</span> monthly based on your <span className="font-bold text-foreground">exact ideal customer profile</span>, delivered automatically to your chosen stack.</p>
                    </div>
            <div className="mt-8 bg-black/[0.01] p-6 rounded-2xl border border-black/5 h-40">
                <LeadDiscoveryCard />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" className="md:col-span-1 md:row-span-1">
                <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all bg-white h-full min-h-[350px] border-black/5 backdrop-blur-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-4">Zero-Waste Lead Filtering</h3>
                    <p className="text-muted text-xs mb-6 leading-relaxed">We <span className="font-bold text-foreground">tailor leads</span> to your standards. You <span className="font-bold text-foreground text-primary">only spend time</span> on qualified leads.</p>
                    <LeadScoreWidget />
                </div>
        </FadeIn>

        <FadeIn direction="up" className="md:col-span-1 md:row-span-2">
          <div className="glass p-8 rounded-[2rem] flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white h-full min-h-[400px] border-black/5 backdrop-blur-2xl">
            <div className="absolute inset-0 blue-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <LucideZap className="text-primary mb-6" size={32} />
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Total Stack Integration</h3>
                          <p className="text-muted text-sm leading-relaxed">We implement <span className="font-bold text-foreground">universal connectivity</span> across your stack. Brine.ai integrates with <span className="font-bold text-foreground">any of your existing tools</span>—as long as they have an API or application—to act as your <span className="font-bold text-foreground text-primary">central intelligence hub</span>.</p>
                        </div>

                {/* Integration Icons Grid */}
                <div className="grid grid-cols-3 gap-y-6 gap-x-4 mt-8">
                   {[
                     { name: "Slack", domain: "slack.com" },
                     { name: "Gmail", domain: "gmail.com" },
                     { name: "Calendly", domain: "calendly.com" },
                     { name: "Salesforce", domain: "salesforce.com" },
                     { name: "HubSpot", domain: "hubspot.com" },
                     { name: "Sheets", domain: "google.com" }
                   ].map((tool, i) => (
                      <motion.div 
                        key={tool.name}
                        initial={{ opacity: 0.3, filter: "grayscale(1) opacity(0.5)" }}
                        whileInView={{ opacity: 1, filter: "grayscale(0) opacity(1)" }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: (i % 3) * 0.05, duration: 0.2 }}
                        className="flex flex-col items-center gap-2"
                      >
                         <div className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center p-2.5 shadow-sm overflow-hidden group-hover:scale-110 transition-transform duration-500">
                            <img 
                              src={tool.name === "Sheets" 
                                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1024px-Google_Sheets_logo_%282014-2020%29.svg.png"
                                : `https://unavatar.io/${tool.domain}?fallback=https://www.google.com/s2/favicons?sz=128&domain=${tool.domain}`
                              } 
                              alt={tool.name} 
                              className="w-full h-full object-contain"
                            />
                         </div>
                         <span className="text-[7px] text-muted uppercase font-bold tracking-tighter">{tool.name}</span>
                      </motion.div>
                   ))}
                </div>

                <div className="space-y-4 mt-auto pt-8">
                  {[1,2,3].map((i) => (
                      <div key={i} className="h-1 bg-black/[0.03] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                          className="w-1/3 h-full bg-primary/20"
                        />
                      </div>
                  ))}
                </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" className="md:col-span-3 md:row-span-1">
                <div className="glass p-8 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between group relative overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white h-full min-h-[250px] border-black/5 backdrop-blur-2xl">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">Custom Outreach Orchestration—Customized to Your Voice.</h3>
                        <p className="text-muted text-sm leading-relaxed">Brine Consulting designs and handles the <span className="font-bold text-foreground text-primary">entire implementation</span> of your front-of-house agents. We build the logic for <span className="font-bold text-foreground">personalized hooks</span>, prospect question handling, and <span className="font-bold text-foreground">direct calendar booking</span>. You only see the wins.</p>
                    </div>
            <div className="flex gap-4 mt-6 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
                  <LucideMousePointer2 size={32} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform delay-75 shadow-lg">
                  <LucideBrainCircuit size={32} />
                </div>
            </div>
          </div>
        </FadeIn>
      </FadeInStagger>

      <FadeIn className="mt-32">
        <div className="max-w-5xl mx-auto p-16 rounded-[3rem] bg-[#0f172a] border border-white/10 relative overflow-hidden shadow-2xl shadow-primary/20 group">
          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-700">
             <LucideZap size={200} />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-white">
             <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/10 shadow-lg">Pilot Offer Active</div>
                        <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Rapid Workflow Implementation</h3>
                        <p className="text-white/60 text-lg leading-relaxed italic mb-0">
                          "We don't just install software; we <span className="font-bold text-white">engineer your time back</span>. Brine Ai Consulting implements <span className="font-bold text-white">custom autonomous workflows</span> that save <span className="font-bold text-primary">hundreds of hours monthly</span>, allowing you to scale without the 'human bottleneck' or overhead."
                        </p>
             </div>
             <motion.a 
               href="https://calendly.com/brineaiconsulting/30min"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(124, 58, 237, 0.8)" }}
               animate={{ 
                 scale: [1, 1.03, 1],
                 boxShadow: [
                   "0px 0px 0px 0px rgba(124, 58, 237, 0)", 
                   "0px 0px 25px 4px rgba(124, 58, 237, 0.5)", 
                   "0px 0px 0px 0px rgba(124, 58, 237, 0)"
                 ] 
               }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className="bg-white text-[#0f172a] px-12 py-6 rounded-2xl font-bold text-xl whitespace-nowrap border-2 border-primary/20 relative overflow-hidden flex items-center justify-center"
             >
                <span className="relative z-10">Claim Your Pilot →</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             </motion.a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
