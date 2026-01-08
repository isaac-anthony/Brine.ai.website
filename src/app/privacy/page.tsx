"use client";

import { Header } from "@/components/Header";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { LucideShieldCheck, LucideLock, LucideDatabase, LucideEye, LucideUserCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              Privacy Policy: <span className="text-primary">Governance.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              How Brine AI Architects Protect Your Digital Infrastructure. Ensuring your business data remains autonomous, secure, and entirely yours.
            </p>
            <div className="mt-8 text-xs font-bold text-muted/40 uppercase tracking-widest">
              Last Updated: January 5, 2026
            </div>
          </FadeIn>

          <FadeInStagger className="space-y-12" staggerChildren={0.02}>
            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideEye size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">1. Scope of Data Access & Collection</h2>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  To deploy your Autonomous Workforce, we require specific technical permissions to interface with your existing ecosystem. This involves the collection and use of:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">System Credentials:</span> Temporary passwords, API keys, and OAuth secret tokens for platforms including, but not limited to, CRM, ERP, GRC, and Project Management Systems.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Operational Context:</span> Real-time data fetched via Model Context Protocol (MCP) to allow agents to "read" your inbox, check live database records, and execute business logic.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Business Intelligence:</span> Internal SOPs, case studies, and PDFs used to ground the agent's reasoning in your specific company "voice" and rules.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideLock size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">2. Credential Security & "The Vault" Protocol</h2>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  We treat your access keys as highly sensitive assets:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Encrypted Storage:</span> All API keys and passwords are stored in AES-256 encrypted vaults and are never shared with unauthorized third parties or stored in plain-text local files.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Access Sunset Clause:</span> Brine AI strictly mandates that clients rotate or revoke administrative passwords within 24 hours of successful integration completion.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Least Privilege Access:</span> Where possible, we utilize Service Accounts and limited-scope OAuth tokens to ensure our agents only see the data required to perform their specific role (e.g., SDR vs. Support).
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideDatabase size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">3. Data Processing & Model Isolation</h2>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  Unlike standard "chatbot" agencies, Brine AI ensures your data remains your own:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">No AI Training:</span> We guarantee that no customer data, email content, or internal business intelligence (from your ERP, GRC, or Project Management tools) accessed via our agents is ever used to train public or private Large Language Models (LLMs).
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Stateless Processing:</span> Our MCP-driven agents function on a "stateless" basis—reading information to generate a response and discarding that context immediately after task resolution.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Human-in-the-Loop Logs:</span> All autonomous actions (emails sent, database updates) are logged and available for your review to ensure 100% transparency.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideShieldCheck size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">4. Third-Party Disclosures & SMS</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Service Integrity:</span> We do not sell, rent, or trade your mobile phone numbers, API data, or business information to third-party marketers or affiliates.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Technical Partners:</span> Data is only shared with essential third-party service providers (e.g., the LLM provider or hosting environment) under strict confidentiality agreements and solely for the purpose of executing your workflows.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.2}>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <LucideUserCheck size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">5. Your Rights and Revocation</h2>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  You maintain absolute control over your autonomous workforce:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Instant Revocation:</span> You may revoke our access at any time by deleting the Google Cloud Web App or deactivating the API tokens we implemented in your CRM or ERP.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted">
                      <span className="font-bold text-foreground">Data Deletion:</span> Upon termination of service, all Knowledge Base files and local configuration data will be purged from our systems.
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

