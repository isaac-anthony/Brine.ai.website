"use client";

import { Header } from "@/components/Header";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { LucideHandshake, LucideKey, LucideUserCheck, LucideScale, LucideCreditCard, LucideAlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="relative">
      <Header />
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] blue-glow opacity-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] neutral-glow opacity-10" />
      </div>

      <section className="pt-40 pb-40 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-20" duration={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tighter">
              Terms of <span className="text-primary">Service.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              Autonomous Workforce & Infrastructure Agreement. The legal framework for deploying custom AI agents into your business ecosystem.
            </p>
            <div className="mt-8 text-xs font-bold text-muted/40 uppercase tracking-widest">
              Effective Date: January 5, 2026
            </div>
          </FadeIn>

          <FadeInStagger className="space-y-12" staggerChildren={0.02}>
            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideHandshake size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">1. Nature of the Engagement</h2>
                </div>
                <p className="text-muted leading-relaxed">
                  Brine AI Consulting provides specialized AI architectural services, including the design, deployment, and maintenance of autonomous agents. These agents are designed to perform roles such as <span className="font-bold text-foreground">Lead Generation (SDR)</span> and <span className="font-bold text-foreground">Knowledge Orchestration (Customer Support)</span> by interfacing with your existing CRM, ERP, GRC, and Project Management systems.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideUserCheck size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">2. Authorization of Agency</h2>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  By engaging Brine AI, the Client explicitly grants our agents the authority to act as an <span className="font-bold text-foreground text-primary">"Authorized Representative"</span> within their digital ecosystem. This includes, but is not limited to:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Outbound Communication:</span> Scraping public data, drafting, and autonomously sending emails to prospective leads.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Inbound Resolution:</span> Accessing company SOPs and live databases to respond to customer inquiries in real-time.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">System Execution:</span> Updating records, rescheduling events, and logging data across connected platforms.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideKey size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">3. Provision of Access & Security</h2>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  The Client agrees to provide the necessary infrastructure for these agents to function:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Credential Sharing:</span> Providing API keys, OAuth secret tokens, and temporary administrative access through Brine AI’s designated secure vault.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Cloud Infrastructure:</span> Assisting in the creation of Google Cloud Web Apps or similar environment bridges required for MCP connectivity.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Password Rotation:</span> Per our Security Protocol, Clients must rotate or revoke administrative passwords within 24 hours of successful integration.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideAlertTriangle size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">4. "Human-in-the-Loop" & Output Responsibility</h2>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  While Brine AI implements high-confidence thresholds and a "Second Pair of Eyes" safety protocol, the following conditions apply:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Final Oversight:</span> The Client is responsible for the final accuracy of all autonomous communications and database updates.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Draft Mode:</span> Brine AI recommends a mandatory "Draft-Only" period of 14 days for all new agents to ensure the AI's reasoning aligns with company standards.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground text-primary">Non-Reliance:</span> AI agents utilize probabilistic reasoning; Brine AI is not liable for hallucinations or errors resulting from incomplete or conflicting data in the Client's Knowledge Base or SOPs.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideScale size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">5. Compliance & Ethics</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Legal Responsibility:</span> The Client warrants that their use of AI for lead generation and support complies with all applicable laws, including CAN-SPAM, GDPR, and sector-specific regulations.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground text-primary">Prohibited Use:</span> Clients may not use Brine AI agents for deceptive practices, spamming, or the creation of harmful content.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideCreditCard size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">6. Fees, Retainers, and Suspensions</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Implementation Fees:</span> Non-refundable setup fees cover the custom architectural build of your specific agents.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Operational Retainers:</span> Monthly fees cover ongoing MCP maintenance and knowledge base grooming.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground text-primary">Suspension:</span> Failure to maintain an active retainer will result in the immediate deactivation of all MCP bridges and agent autonomous functions.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </FadeInStagger>

          <FadeIn className="mt-20 pt-20 border-t border-black/5 flex flex-col items-center gap-12" duration={0.2}>
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-bold text-muted uppercase tracking-[0.3em]">Contact Us</span>
              <motion.a 
                href="mailto:Brineaiconsulting@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass px-8 py-4 rounded-2xl border border-primary/10 bg-white/50 text-lg font-bold text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center gap-3 shadow-xl shadow-primary/5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                Brineaiconsulting@gmail.com
              </motion.a>
            </div>

            <Link 
              href="/"
              className="text-sm font-bold text-primary hover:opacity-70 transition-opacity uppercase tracking-widest flex items-center gap-2"
            >
              ← Back to Main Page
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

