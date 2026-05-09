"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Users, TrendingUp, Globe2, Zap } from "lucide-react";

export default function CareerPage() {
    return (
        <>
            <Navbar showTopBanner={true} />
            <main className="bg-[#fafbfc] overflow-hidden">
                <BrandedHero
                    title={
                        <>
                            Elevate Your <br />{" "}
                            <span className="text-secondary tracking-tighter">
                                Professional Destiny.
                            </span>
                        </>
                    }
                    subtitle="Step into a high-demand, multi-billion dollar healthcare ecosystem with our certified professional pathways and premier placement alliances."
                    image="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=2000"
                />

                {/* Redesigned Centered Career Benchmarks Section - Minimalist Analytical Grid */}
                <section className="py-24 relative overflow-hidden bg-[#fafbfc]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                    
                    <Container className="max-w-5xl text-center relative z-10">
                        <div className="space-y-4 max-w-2xl mx-auto mb-16">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[9px] font-black text-navy uppercase tracking-widest">
                                    Audited Placement Stats
                                </span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight leading-tight">
                                Our Key Career <span className="text-secondary">Milestones.</span>
                            </h2>
                            <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                                Verified professional outcomes representing certified healthcare billing, coding, and clinical documentation pathways.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                {
                                    label: "Career Placement Rate",
                                    value: "98%",
                                    description: "Immediate corporate placement and direct executive integration across our global network of medical-tech partners.",
                                    icon: Users,
                                    pulseColor: "bg-emerald-500",
                                    badgeText: "Placement Engine Active",
                                    goals: ["98% Verified Immediate Placement", "Direct Interview Portals", "Executive Network Alignments"]
                                },
                                {
                                    label: "Starting Salary Range",
                                    value: "$45,000 - $60,000",
                                    description: "Highly competitive starting salary and incentives for fully credentialed, professional medical coding candidates.",
                                    icon: TrendingUp,
                                    pulseColor: "bg-amber-500",
                                    badgeText: "Global Industry Scale",
                                    goals: ["Industry Certified Entry Rate", "High Incentive Accretions", "Tier-1 Regional Scaling"]
                                },
                                {
                                    label: "Hiring Partnerships",
                                    value: "150+ Corporations",
                                    description: "Direct talent-acquisition pipelines connecting our alumni directly to major hospital chains and billing groups.",
                                    icon: Globe2,
                                    pulseColor: "bg-blue-500",
                                    badgeText: "Allied Medical Channels",
                                    goals: ["Hospital Chain Integration", "Corporate Recruiter Pipelines", "Alumni Referral Networks"]
                                },
                                {
                                    label: "Average Salary Increment",
                                    value: "45% Hike",
                                    description: "Demonstrated beginning income elevation realized by candidates completing our curriculum standards.",
                                    icon: Zap,
                                    pulseColor: "bg-indigo-500",
                                    badgeText: "Alumni Scale Optimized",
                                    goals: ["Demonstrated Wage Trajectory", "Post-Graduate Wage Audits", "Skill-Based Level Increases"]
                                },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:ring-2 hover:ring-primary/10 transition-all duration-500 text-left overflow-hidden"
                                >
                                    {/* Top Metadata Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center space-x-2">
                                            <span className="relative flex h-2 w-2">
                                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${stat.pulseColor}`}></span>
                                                <span className={`relative inline-flex rounded-full h-2 w-2 ${stat.pulseColor}`}></span>
                                            </span>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.badgeText}</span>
                                        </div>
                                        <div className="size-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                                            <stat.icon className="size-5" />
                                        </div>
                                    </div>

                                    {/* Large Bold Numbers & Primary Labels */}
                                    <div className="space-y-3">
                                        <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight leading-none group-hover:text-primary transition-colors">
                                            {stat.value}
                                        </h3>
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 block">
                                            {stat.label}
                                        </span>
                                    </div>

                                    {/* Core Paragraph Description */}
                                    <p className="text-xs text-slate-500 leading-relaxed font-semibold mt-4 mb-6">
                                        {stat.description}
                                    </p>

                                    {/* Interactive Bulleted Goal Nodes */}
                                    <div className="space-y-3.5 pt-6 border-t border-slate-100/60">
                                        {stat.goals.map((goal, index) => (
                                            <div key={index} className="flex items-center space-x-3 text-[10.5px] font-bold text-slate-700">
                                                <span className="size-4 rounded-full bg-primary/5 flex items-center justify-center text-primary text-[8px] font-black">✓</span>
                                                <span>{goal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
