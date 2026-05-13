"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Globe2, 
  Zap, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  ArrowRight,
  GraduationCap
} from "lucide-react";

export default function CareerPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-white overflow-hidden pt-20">
        
        {/* Section 1: Modern Corporate Hero Header */}
        <section className="relative py-20 lg:py-28 bg-[radial-gradient(circle_at_top_right,rgba(75,186,195,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(12,85,151,0.05),transparent_50%),linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#f1f5f9_100%)] overflow-hidden border-b border-slate-100">
          {/* Grid mesh backdrop */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.015] pointer-events-none" />
          
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Placement Track Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0c5597]/5 border border-[#0c5597]/10 text-[#0c5597] shadow-sm"
              >
                <Briefcase className="size-4 text-[#0c5597]" />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0c5597]">
                  Career Placement Ecosystem
                </span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-2xl md:text-3xl lg:text-3xl font-black text-navy leading-none tracking-tight uppercase"
                >
                  Your Path to <br />
                  <span className="text-[#0c5597] bg-gradient-to-r from-[#0c5597] to-[#4bbac3] bg-clip-text text-transparent">
                    Career Eminence.
                  </span>
                </motion.h1>
                
                {/* Brand Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="h-1.5 w-24 bg-gradient-to-r from-[#0c5597] via-[#4bbac3] to-[#78bb30] rounded-full mx-auto"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed text-justify md:text-center"
              >
                Step into a high-demand, multi-billion dollar healthcare ecosystem with our certified professional pathways and premier placement alliances. We equip you with the advanced analytical frameworks, regulatory precision, and industry certifications necessary to stand out to global healthcare giants.
              </motion.p>

              {/* Action Trigger button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pt-2"
              >
                <Button 
                  onClick={() => {
                    const event = new CustomEvent("openEnrollModal");
                    window.dispatchEvent(event);
                  }}
                  className="bg-[#0c5597] hover:bg-[#09152b] text-white font-black tracking-wider uppercase text-xs px-8 py-6 rounded-xl shadow-lg hover:shadow-[#0c5597]/20 transition-all duration-300 flex items-center justify-center space-x-2.5 mx-auto border border-transparent"
                >
                  <span>Connect with placement advisor</span>
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Section 2: High-Fidelity Audited Placement Diagnostics */}
        <section className="py-24 relative overflow-hidden bg-white">
          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              
              {/* Sub-header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4bbac3]/5 border border-[#4bbac3]/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4bbac3] animate-pulse" />
                  <span className="text-[9px] font-black text-navy uppercase tracking-widest">
                    Audited Diagnostic Milestones
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                  Our Career <span className="text-[#0c5597]">Benchmarks.</span>
                </h2>
                <p className="text-sm text-slate-500 font-semibold max-w-2xl mx-auto text-justify md:text-center">
                  Verified professional outcomes representing certified healthcare billing, coding, and clinical documentation pathways realized by our candidates.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    label: "Career Placement Rate",
                    value: "98%",
                    description: "Immediate corporate placement and direct executive integration across our global network of medical-tech partners.",
                    icon: Users,
                    pulseColor: "bg-emerald-500",
                    badgeText: "Placement Engine Active",
                    accent: "border-l-[#78bb30]",
                    goals: [
                      "98% Verified Immediate Placement",
                      "Direct Interview Portals",
                      "Executive Network Alignments"
                    ]
                  },
                  {
                    label: "Starting Salary Range",
                    value: "$45,000 - $60,000",
                    description: "Highly competitive starting salary and incentives for fully credentialed, professional medical coding candidates.",
                    icon: TrendingUp,
                    pulseColor: "bg-blue-500",
                    badgeText: "Global Industry Scale",
                    accent: "border-l-[#0c5597]",
                    goals: [
                      "Industry Certified Entry Rate",
                      "High Incentive Accretions",
                      "Tier-1 Regional Scaling"
                    ]
                  },
                  {
                    label: "Hiring Partnerships",
                    value: "150+ Companies",
                    description: "Direct talent-acquisition pipelines connecting our alumni directly to major hospital chains and billing groups.",
                    icon: Globe2,
                    pulseColor: "bg-cyan-500",
                    badgeText: "Allied Medical Channels",
                    accent: "border-l-[#4bbac3]",
                    goals: [
                      "Hospital Chain Integration",
                      "Corporate Recruiter Pipelines",
                      "Alumni Referral Networks"
                    ]
                  },
                  {
                    label: "Average Salary Increment",
                    value: "45% Hike",
                    description: "Demonstrated beginning income elevation realized by candidates completing our curriculum standards.",
                    icon: Zap,
                    pulseColor: "bg-indigo-500",
                    badgeText: "Alumni Scale Optimized",
                    accent: "border-l-[#0c5597]",
                    goals: [
                      "Demonstrated Wage Trajectory",
                      "Post-Graduate Wage Audits",
                      "Skill-Based Level Increases"
                    ]
                  }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className={`group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 border-l-4 ${stat.accent} shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(12,85,151,0.06)] hover:-translate-y-1.5 transition-all duration-500 text-left`}
                  >
                    {/* Glow background on card hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="flex items-center space-x-2">
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${stat.pulseColor}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${stat.pulseColor}`}></span>
                        </span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {stat.badgeText}
                        </span>
                      </div>
                      <div className="size-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0c5597]/5 group-hover:text-[#0c5597] group-hover:border-[#0c5597]/20 transition-all duration-300">
                        <stat.icon className="size-5" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-4 relative z-10">
                      <div className="space-y-1">
                        <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight leading-none group-hover:text-[#0c5597] transition-colors">
                          {stat.value}
                        </h3>
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 block pt-1">
                          {stat.label}
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold text-justify">
                        {stat.description}
                      </p>
                    </div>

                    {/* Goals Bullets */}
                    <div className="space-y-3 pt-6 mt-6 border-t border-slate-100 relative z-10">
                      {stat.goals.map((goal, index) => (
                        <div key={index} className="flex items-center space-x-3 text-[10.5px] font-black text-slate-700">
                          <span className="size-4.5 rounded-full bg-[#0c5597]/5 border border-[#0c5597]/10 flex items-center justify-center text-[#0c5597]">
                            <CheckCircle2 className="size-3" />
                          </span>
                          <span>{goal}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Interactive Career Support Pillars (Visual Excellence) */}
        <section className="py-24 relative overflow-hidden bg-slate-50/50 border-t border-b border-slate-100">
          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-br from-[#0c5597]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
          
          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#78bb30]/5 border border-[#78bb30]/10">
                  <Sparkles className="size-3.5 text-[#78bb30]" />
                  <span className="text-[9px] font-black text-navy uppercase tracking-widest">
                    Your Lifelong Career Partners
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                  Pillars of <span className="text-[#0c5597]">Placement Support.</span>
                </h2>
                <p className="text-sm text-slate-500 font-semibold max-w-2xl mx-auto text-justify md:text-center">
                  We don't just train you; we systematically build your professional value and directly advocate for your placement across our global employer portals.
                </p>
              </div>

              {/* 3 Pillars Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Direct Corporate Referrals",
                    desc: "Skip the generic job boards. We host direct referral programs that feed candidate profiles straight into active recruitment databases of multi-specialty clinical groups and billing organizations.",
                    badge: "Direct Route",
                    icon: Award
                  },
                  {
                    title: "Audit & Sandbox Testing",
                    desc: "Build flawless operational confidence. Candidates undergo rigorous sandbox coding audits, mimicking live corporate workflow environments and preparing them to execute accurately on day one.",
                    badge: "Technical Auditing",
                    icon: ShieldCheck
                  },
                  {
                    title: "Executive Interview Coaching",
                    desc: "Command authority during interviews. Work with seasoned clinical managers on clinical scenario role-play, structured coding interview methodology, and resume alignment.",
                    badge: "Career Sculpting",
                    icon: Users
                  }
                ].map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeIn}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_12px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_24px_50px_rgba(12,85,151,0.04)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left group"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[9px] font-black text-[#0c5597] bg-[#0c5597]/5 border border-[#0c5597]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                      <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#4bbac3]/10 group-hover:text-[#4bbac3] transition-colors duration-300">
                        <pillar.icon className="size-5" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                      <h3 className="text-lg font-black text-navy group-hover:text-[#0c5597] transition-colors uppercase tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed text-justify">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-[#0c5597] transition-colors">
                      <span>Pillar Active</span>
                      <div className="size-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#0c5597] group-hover:text-white transition-colors">
                        <ChevronRight className="size-3.5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: Employer Network Visualization */}
        <section className="py-24 bg-white relative">
          <Container>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left text column */}
              <div className="lg:col-span-5 text-left space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0c5597]/5 border border-[#0c5597]/10">
                  <Building2 className="size-3.5 text-[#0c5597]" />
                  <span className="text-[9px] font-black text-navy uppercase tracking-widest">
                    Employer Footprint
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-none uppercase">
                  Connected <br />
                  <span className="text-[#0c5597]">Employer Grid.</span>
                </h2>
                <p className="text-xs md:text-sm text-slate-500 font-semibold leading-relaxed text-justify">
                  Our alumni operate within major healthcare channels, including multi-specialty clinical groups, technology-driven Revenue Cycle Management (RCM) multinationals, premium insurance carriers, and healthcare software consulting firms globally.
                </p>
                
                <div className="pt-2">
                  <Button 
                    onClick={() => {
                      const event = new CustomEvent("openEnrollModal");
                      window.dispatchEvent(event);
                    }}
                    className="bg-[#0c5597] hover:bg-[#09152b] text-white font-black tracking-wider uppercase text-xs px-6 py-5 rounded-xl transition-all duration-300"
                  >
                    Apply for placements
                  </Button>
                </div>
              </div>

              {/* Right Grid visual column */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
                {/* Glowing decorative blur element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 bg-[#4bbac3]/10 rounded-full blur-3xl -z-10" />

                {[
                  { name: "Clinical Entities", desc: "Top Hospital Chains & Multi-Specialty Clinics", icon: Building2 },
                  { name: "RCM Conglomerates", desc: "Tech-Enabled Billing & Coding Multinationals", icon: Briefcase },
                  { name: "Payer Networks", desc: "Premium Medical Insurance & Auditing Carriers", icon: ShieldCheck },
                  { name: "Academic Alliances", desc: "AAPC/AHIMA Licensed Training & Testing Centers", icon: GraduationCap }
                ].map((network, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-left space-y-4 hover:border-[#4bbac3]/30 hover:bg-white transition-all duration-300 group shadow-sm"
                  >
                    <div className="size-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#4bbac3] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <network.icon className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-navy uppercase tracking-tight group-hover:text-[#0c5597] transition-colors">
                        {network.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
                        {network.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
