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
  GraduationCap,
} from "lucide-react";

export default function CareerPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
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
                Step into a high-demand, multi-billion dollar healthcare
                ecosystem with our certified professional pathways and premier
                placement alliances. We equip you with the advanced analytical
                frameworks, regulatory precision, and industry certifications
                necessary to stand out to global healthcare giants.
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
                  <span>Connect with us</span>
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
                  Verified professional outcomes representing certified
                  healthcare billing, coding, and clinical documentation
                  pathways realized by our candidates.
                </p>
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
                  Our alumni operate within major healthcare channels, including
                  multi-specialty clinical groups, technology-driven Revenue
                  Cycle Management (RCM) multinationals, premium insurance
                  carriers, and healthcare software consulting firms globally.
                </p>
              </div>

              {/* Right Grid visual column */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
                {/* Glowing decorative blur element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 bg-[#4bbac3]/10 rounded-full blur-3xl -z-10" />

                {[
                  {
                    name: "Clinical Entities",
                    desc: "Top Hospital Chains & Multi-Specialty Clinics",
                    icon: Building2,
                  },
                  {
                    name: "RCM Conglomerates",
                    desc: "Tech-Enabled Billing & Coding Multinationals",
                    icon: Briefcase,
                  },
                  {
                    name: "Payer Networks",
                    desc: "Premium Medical Insurance & Auditing Carriers",
                    icon: ShieldCheck,
                  },
                  {
                    name: "Academic Alliances",
                    desc: "AAPC/AHIMA Licensed Training & Testing Centers",
                    icon: GraduationCap,
                  },
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
