"use client";

import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Target,
  Award,
  BarChart3,
  Users,
  Globe,
  Code,
  Activity,
  Cpu,
  BookmarkCheck,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Layers,
  HeartPulse,
  FileText,
  GraduationCap,
  Sparkles,
  Clock,
  Compass,
} from "lucide-react";

export default function WhyUsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-slate-50/50 overflow-hidden">
        {/* Immersive Branded Hero */}
        <BrandedHero
          title="Why Us"
          subtitle="Establishing the global benchmark for medical coding excellence through rigorous operational validation and clinical integrity."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
        />

        {/* Key Statement Section */}
        <section className="relative pt-16 pb-16 z-30">
          <Container>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-[0_30px_70px_rgba(12,85,151,0.06)] hover:shadow-[0_45px_90px_rgba(12,85,151,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Visual side accent matching brand gradient */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0c5597] via-[#4bbac3] to-[#78bb30]" />

                {/* Abstract glowing aura */}
                <div className="absolute -right-36 -top-36 size-96 bg-gradient-to-br from-[#4bbac3]/5 to-[#78bb30]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="md:col-span-8 space-y-4 text-left">
                    <span className="text-primary font-black uppercase text-[10px] tracking-[0.25em] pl-0.5">
                      The Trusted Benchmark
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                      The Bridge Between{" "}
                      <span className="text-primary">Clinical Knowledge</span> &{" "}
                      <span className="text-secondary">Career Dominance.</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed text-justify">
                      At ERO Healthcare, we believe that medical coding is not
                      merely standard documentation. It is a critical science
                      that governs the global healthcare economy. Our
                      methodology is built from the ground up to prepare
                      professionals for absolute precision, direct corporate
                      integration, and long-term industry leadership.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Section 1: Pillars of Distinction */}
        <section className="py-20 relative bg-white border-y border-slate-100">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.015] -z-10" />
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0c5597]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#4bbac3]/5 rounded-full blur-3xl -z-10" />

          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Refined Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                  Pillars of{" "}
                  <span className="text-primary">Corporate distinction.</span>
                </h2>
                <p className="text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto">
                  Discover the systematic operational practices and corporate
                  advantages that make us the premium choice for healthcare
                  revenue cycle and clinical documentation.
                </p>
              </div>

              {/* High-Density 6-Card Custom Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "AAPC & AHIMA Certified Operations",
                    desc: "Our coding workflows are executed by licensed experts rigorously aligned with global gold standards, ensuring absolute clinical accuracy and regulatory compliance.",
                    icon: Award,
                    badge: "Certified",
                    borderHover: "hover:border-[#0c5597]/40",
                    glowColor: "group-hover:bg-[#0c5597]/5",
                    iconBg: "bg-[#0c5597]/10 text-[#0c5597]",
                  },
                  {
                    title: "Seasoned Clinical Auditors",
                    desc: "Our quality assurance leadership brings over 15 years of healthcare revenue cycle tenure, providing rigorous multi-tier reviews and unmatched data integrity.",
                    icon: ShieldCheck,
                    badge: "15+ Years Exp",
                    borderHover: "hover:border-[#78bb30]/40",
                    glowColor: "group-hover:bg-[#78bb30]/5",
                    iconBg: "bg-[#78bb30]/10 text-[#78bb30]",
                  },
                  {
                    title: "Comprehensive RCM Optimization",
                    desc: "End-to-end revenue cycle management solutions engineered to eliminate claim denials, accelerate reimbursement velocity, and maximize operational cash flow.",
                    icon: TrendingUp,
                    badge: "Optimized",
                    borderHover: "hover:border-[#4bbac3]/40",
                    glowColor: "group-hover:bg-[#4bbac3]/5",
                    iconBg: "bg-[#4bbac3]/10 text-[#4bbac3]",
                  },
                  {
                    title: "Advanced Compliance Frameworks",
                    desc: "Strict adherence to HIPAA, safeguarding healthcare organizations against regulatory risks and billing discrepancies.",
                    icon: BookmarkCheck,
                    badge: "100% HIPAA",
                    borderHover: "hover:border-[#0c5597]/40",
                    glowColor: "group-hover:bg-[#0c5597]/5",
                    iconBg: "bg-[#0c5597]/10 text-[#0c5597]",
                  },
                  {
                    title: "Multi-Specialty Domain Expertise",
                    desc: "Deep clinical domain knowledge spanning Anesthesia, Radiology, Emergency Medicine, and complex inpatient/outpatient surgical documentation.",
                    icon: Layers,
                    badge: "Specialized",
                    borderHover: "hover:border-[#78bb30]/40",
                    glowColor: "group-hover:bg-[#78bb30]/5",
                    iconBg: "bg-[#78bb30]/10 text-[#78bb30]",
                  },
                  {
                    title: "Technology-Enabled Workflow",
                    desc: "Leveraging cutting-edge coding analytics and secure EHR integrations to deliver rapid turnaround times and transparent reporting for enterprise health systems.",
                    icon: Cpu,
                    badge: "High Velocity",
                    borderHover: "hover:border-[#4bbac3]/40",
                    glowColor: "group-hover:bg-[#4bbac3]/5",
                    iconBg: "bg-[#4bbac3]/10 text-[#4bbac3]",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className={`group relative p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-[0_25px_50px_rgba(12,85,151,0.05)] ${item.borderHover} transition-all duration-300 text-left overflow-hidden flex flex-col justify-between h-[300px]`}
                  >
                    {/* Glowing card background blob */}
                    <div
                      className={`absolute -right-12 -bottom-12 size-36 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${item.glowColor}`}
                    />

                    <div className="space-y-5 relative z-10">
                      <div className="flex items-center justify-between">
                        <div
                          className={`size-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${item.iconBg} group-hover:bg-navy group-hover:text-white`}
                        >
                          <item.icon className="size-6" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-navy/5 group-hover:text-navy group-hover:border-navy/15 transition-all duration-300">
                          {item.badge}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-black text-navy uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold leading-relaxed text-slate-500 text-justify">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-slate-400 group-hover:text-primary transition-colors relative z-10">
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Excellence Benchmark
                      </span>
                      <Activity className="size-4 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Interactive Path to Coding Mastery */}
        <section className="py-24 relative overflow-hidden bg-slate-50/50">
          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-br from-[#0c5597]/5 to-transparent rounded-full blur-[130px] -z-10" />

          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                  The Path to{" "}
                  <span className="text-primary">Coding Mastery.</span>
                </h2>
                <p className="text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto">
                  A comprehensive, structured operational roadmap that elevates
                  professional medical coders from foundational clinical
                  documentation to elite revenue cycle authorities.
                </p>
              </div>

              {/* 4-Step Professional Roadmap Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    title: "Clinical Foundation",
                    desc: "Mastery of medical terminology, anatomy, and pathophysiology to ensure exact clinical abstraction from provider documentation.",
                    icon: FileText,
                    borderColor: "border-[#0c5597]/20 hover:border-[#0c5597]",
                    textColor: "text-[#0c5597]",
                    bgAccent: "bg-[#0c5597]/10",
                  },
                  {
                    title: "Regulatory Alignment",
                    desc: "Comprehensive integration of CPT, ICD-10-CM, and HCPCS Level II coding guidelines tailored to complex payer policies.",
                    icon: BookmarkCheck,
                    borderColor: "border-[#4bbac3]/20 hover:border-[#4bbac3]",
                    textColor: "text-[#4bbac3]",
                    bgAccent: "bg-[#4bbac3]/10",
                  },
                  {
                    title: "Specialty Sandbox",
                    desc: "Rigorous case abstraction and multi-tier auditing within simulated environments under the direct supervision of senior QA leadership.",
                    icon: ShieldCheck,
                    borderColor: "border-[#78bb30]/20 hover:border-[#78bb30]",
                    textColor: "text-[#78bb30]",
                    bgAccent: "bg-[#78bb30]/10",
                  },
                  {
                    title: "Corporate Deployment",
                    desc: "Autonomous production coding across enterprise healthcare systems, maintaining strict 98.4%+ accuracy thresholds and continuous compliance.",
                    icon: Award,
                    borderColor: "border-slate-900/20 hover:border-slate-900",
                    textColor: "text-slate-900",
                    bgAccent: "bg-slate-900/10",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className={`group relative p-8 bg-white border rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between h-[320px] ${item.borderColor}`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div
                          className={`size-12 rounded-2xl flex items-center justify-center ${item.bgAccent} ${item.textColor} group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                        >
                          <item.icon className="size-6" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-black text-navy uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold leading-relaxed text-slate-500 text-justify">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-slate-400 group-hover:text-primary transition-colors">
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Milestone Verified
                      </span>
                      <CheckCircle className="size-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: High-Impact Performance Metrics Dashboard */}
        <section className="py-24 bg-[#09152b] relative overflow-hidden text-white border-b border-slate-900">
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[40rem] bg-[#0c5597]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 size-[30rem] bg-[#78bb30]/10 rounded-full blur-[130px] pointer-events-none" />

          <Container>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: Context Brief */}
              <div className="lg:col-span-6 space-y-8 text-left">
                <div className="space-y-4">
                  <div className="h-1 w-16 bg-[#4bbac3] rounded-full" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4bbac3]">
                    Verified Clinical Outcomes
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-[1.1] uppercase">
                    Empirical <br />{" "}
                    <span className="text-gradient bg-gradient-to-r from-[#4bbac3] to-[#78bb30] bg-clip-text text-transparent">
                      Velocity
                    </span>{" "}
                    <br /> In Motion.
                  </h2>
                  <p className="text-sm text-slate-400 font-semibold leading-relaxed max-w-md text-justify">
                    We continuously evaluate and report our operational
                    outcomes. Absolute integrity is our benchmark, delivering
                    empirical velocity and financial resilience for healthcare
                    providers.
                  </p>
                </div>

                {/* 3 Core Approaches */}
                <div className="space-y-6 pt-4">
                  {[
                    {
                      title: 'The "White-Glove" Approach',
                      badge: "Focus on Service",
                      desc: "Our white-glove RCM partnership navigates the complexities of the healthcare financial landscape with precision, transforming vendor support into a seamless extension of your clinical mission.",
                      icon: Users,
                      accent: "from-[#0c5597] to-[#4bbac3]",
                    },
                    {
                      title: 'The "Empowerment" Approach',
                      badge: "Focus on Education",
                      desc: "We bridge the gap between clinical documentation and financial stability by empowering your staff through industry-leading education and aggressive, forward-thinking reimbursement strategies.",
                      icon: GraduationCap,
                      accent: "from-[#4bbac3] to-[#78bb30]",
                    },
                    {
                      title: 'The "Growth" Approach',
                      badge: "Focus on Results",
                      desc: "Driven by decades of mastery, we resolve the nuances of the revenue cycle to ensure regulatory hurdles never impede your growth or the quality of your patient outcomes.",
                      icon: TrendingUp,
                      accent: "from-[#78bb30] to-[#0c5597]",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="relative p-6 md:p-7 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(12,85,151,0.2)] hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden"
                    >
                      {/* Gradient top accent bar */}
                      <div
                        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Internal layout */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="size-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#4bbac3] group-hover:bg-[#4bbac3] group-hover:text-white transition-all duration-500 shrink-0 shadow-inner">
                          <item.icon className="size-6" />
                        </div>
                        <div className="space-y-2.5 w-full">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-base font-black text-white tracking-wide uppercase group-hover:text-[#4bbac3] transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-[9px] font-black uppercase px-3 py-1 rounded-full bg-white/[0.08] text-[#4bbac3] border border-[#4bbac3]/30 tracking-widest shadow-sm backdrop-blur-md">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 font-medium leading-relaxed text-justify">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Premium Outcome Widget */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="p-4 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-2xl border border-white/15 rounded-[3rem] w-full max-w-xl hover:border-[#4bbac3]/40 transition-all duration-500 group shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                  {/* Glowing background blob */}
                  <div className="absolute -right-24 -top-24 size-72 bg-[#4bbac3]/15 rounded-full blur-[70px] pointer-events-none group-hover:bg-[#4bbac3]/25 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute -left-24 -bottom-24 size-72 bg-[#0c5597]/15 rounded-full blur-[70px] pointer-events-none" />

                  {/* Relevant Content Image */}
                  <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:border-[#4bbac3]/30 transition-colors duration-500">
                    <img
                      src="https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"
                      alt="Healthcare Financial Accuracy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09152b]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: Compliance Alignment Logos */}
        <section className="py-20 bg-white relative">
          <Container>
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-2">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  Aligned and Compliant With Global Authorities
                </span>
                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
                {[
                  { name: "AAPC Standards", desc: "AAPC Curriculum Aligned" },
                  {
                    name: "AHIMA Guidelines",
                    desc: "ICD-10-CM Industry Standard",
                  },
                  {
                    name: "HIPAA Compliant",
                    desc: "Total Protected Health Information",
                  },
                  {
                    name: "ISO 9001:2015",
                    desc: "Quality Management Certified",
                  },
                ].map((logo, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#0c5597]/5 hover:border-[#0c5597]/15 hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="text-sm font-black uppercase tracking-widest text-navy">
                      {logo.name}
                    </p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-1">
                      {logo.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: Elegant Footer Note */}
        <section className="py-20 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center space-x-6 opacity-25">
                <Award className="size-8 text-navy" />
                <div className="h-8 w-px bg-slate-400" />
                <ShieldCheck className="size-8 text-navy" />
                <div className="h-8 w-px bg-slate-400" />
                <Globe className="size-8 text-navy" />
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] leading-relaxed">
                  Clinical Integrity • Operational Professionalism • Lifetime
                  Launchpad
                </h3>
                <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] max-w-xl mx-auto leading-relaxed">
                  ERO Healthcare Innovation Pvt Ltd © {new Date().getFullYear()}
                  . All Rights Reserved. Redefining global health revenue cycle
                  ecosystems.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
