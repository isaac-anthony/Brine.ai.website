"use client";

import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { Section } from "./Section";
import { 
  Zap as LucideZap, 
  Target as LucideTarget, 
  TrendingUp as LucideTrendingUp, 
  BarChart3 as LucideBarChart3 
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");

  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const hasPlus = value.includes("+");
  const hasDollar = value.includes("$");
  const hasPercent = value.includes("%");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 3,
        ease: [0.16, 1, 0.3, 1], // Custom "heavy" ease
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, numericValue, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      let formatted = v.toLocaleString();
      if (hasDollar) formatted = "$" + formatted;
      if (hasPercent) formatted = formatted + "%";
      if (hasPlus) formatted = formatted + "+";
      setDisplayValue(formatted);
    });
  }, [rounded, hasDollar, hasPercent, hasPlus]);

  return <span ref={ref}>{displayValue}</span>;
};

export const LeadScoring = () => {
  return (
    <Section id="lead-scoring" className="py-24 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <LucideZap size={14} /> Breaking Point Feature
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Lead Scoring that <span className="text-blue-500">Thinks.</span>
            </h2>
            <p className="text-[#1d1d1f]/60 text-lg mb-8 leading-relaxed">
              Most scoring tools look at job titles. We use GPT-4o to analyze company news, 
              hiring patterns, and technical debt to find businesses at their breaking point—exactly 
              when they need your solution most.
            </p>
            
            <ul className="space-y-4">
              {[
                "Recursive Intent Analysis",
                "Technical Debt Signals",
                "Hiring Pattern Velocity",
                "Executive Move Triggers"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-[#1d1d1f]/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-black/10 to-transparent p-1">
              <div className="w-full h-full rounded-[1.4rem] bg-white p-8 flex flex-col justify-center">
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <div className="text-sm text-[#1d1d1f]/40 mb-1">Current Prospect</div>
                    <div className="text-xl font-bold">TechCorp Solutions</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#1d1d1f]/40 mb-1">Fit Score</div>
                    <div className="text-3xl font-bold text-blue-500">98/100</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                    />
                  </div>
                  
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <div className="text-xs text-blue-400 font-bold uppercase mb-2">GPT-4o Insights</div>
                    <p className="text-sm text-[#1d1d1f]/70 italic">
                      "Company recently lost Head of Sales. Hiring patterns show 40% increase in SDR roles. 
                      Technical signals indicate migration to AWS. High breaking point probability."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Stats = () => {
  const stats = [
    { 
      label: "Lead Performance", 
      value: "250+", 
      suffix: "Qualified Leads Monthly",
      subtext: (
        <>
          <span className="font-bold text-foreground/90">Guaranteed monthly volume</span> of high-intent prospects tailored to your <span className="font-bold text-foreground/90">exact standards.</span>
        </>
      ),
      icon: LucideTarget 
    },
    { 
      label: "Operational Efficiency", 
      value: "100+", 
      suffix: "Hours Saved Monthly",
      subtext: (
        <>
          <span className="font-bold text-foreground/90">Rapid implementation</span> of custom workflows that automate manual research, scoring, and <span className="font-bold text-foreground/90">follow-up tasks.</span>
        </>
      ),
      icon: LucideZap 
    },
    { 
      label: "Client Success", 
      value: "95%", 
      suffix: "Client Retention Rate",
      subtext: (
        <>
          Ongoing <span className="font-bold text-foreground/90">optimization</span> ensures your autonomous sales engine <span className="font-bold text-foreground/90">grows with your business.</span>
        </>
      ),
      icon: LucideTrendingUp 
    },
    { 
      label: "Strategic Leverage", 
      value: "10x - 50x", 
      suffix: "Output Multiplier",
      subtext: (
        <>
          Scale your <span className="font-bold text-foreground/90">custom business logic</span> across any industry <span className="font-bold text-foreground/90">without increasing headcount.</span>
        </>
      ),
      icon: LucideBarChart3 
    },
  ];

  return (
    <div id="stats" className="relative z-30 px-6 mt-8 mb-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <FadeIn 
            key={i} 
            delay={i * 0.1}
            className="h-full"
          >
            <div className="glass bg-white/80 backdrop-blur-2xl p-6 rounded-[2rem] shadow-xl shadow-black/5 border border-white flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 hover:shadow-primary/10 h-full min-h-[220px]">
              <div className="w-8 h-8 text-primary bg-primary/5 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                <stat.icon size={16} />
              </div>
              <div className="text-muted text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">{stat.label}</div>
              <div className="text-3xl font-bold tracking-tighter text-foreground mb-0.5">
                {stat.label === "Strategic Leverage" ? stat.value : <Counter value={stat.value} />}
              </div>
              <div className="text-[13px] font-bold text-foreground/90 mb-3 leading-tight">{stat.suffix}</div>
              <div className="text-xs text-muted leading-relaxed px-1">
                {stat.subtext}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
