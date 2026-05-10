"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Award,
  Zap,
  Globe2,
  ChevronRight,
  BarChart3,
  Dna,
  CheckCircle2,
  X,
  Clock,
  BookOpen,
  Lightbulb,
} from "lucide-react";

import { SPECIALTIES } from "@/lib/specialties";
import Link from "next/link";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedSpecialty = SPECIALTIES.find((s) => s.id === selectedId);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-white overflow-hidden">
        {/* Dynamic Institutional Hero */}
        <BrandedHero
          subtitle="Empowering the healthcare ecosystem with AAPC/AHIMA aligned precision training and strategic revenue cycle documentation."
          image="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzlpZDJ1NDRodDV3cG1waGZ2dnczdXBlNHBqOWQ2Y3JqczBodnQzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOEbLRT4SwD35IELiQ/giphy.gif"
          title={undefined}
        />

        {/* Institutional Mission & Vision - Premium High-Fidelity Replacement */}
        <section className="py-32 relative overflow-hidden bg-[#fafbfc]">
          {/* Decorative grid pattern and glowing elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          <div className="absolute top-1/4 left-10 size-[30rem] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 size-[30rem] bg-secondary/[0.015] rounded-full blur-3xl pointer-events-none" />

          <Container>
            <div className="w-full">
              {/* High-Fidelity Interactive Vision & Mission Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden text-left"
                >
                  <div className="absolute top-0 right-0 p-8 select-none pointer-events-none"></div>

                  <div className="relative z-10 space-y-8">
                    {/* Glowing Accent Icon container */}
                    <div className="size-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-transparent transition-all duration-500">
                      <Target className="size-6" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-navy leading-tight">
                        Our Vision
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                        "To redefine the healthcare revenue cycle through
                        ethical coding excellence and advanced analytics,
                        ensuring the financial sustainability and operational
                        success of our partners."
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden text-left"
                >
                  <div className="absolute top-0 right-0 p-8 select-none pointer-events-none"></div>

                  <div className="relative z-10 space-y-8">
                    {/* Glowing Accent Icon container */}
                    <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-sm group-hover:bg-blue-500 group-hover:text-white group-hover:border-transparent transition-all duration-500">
                      <Lightbulb className="size-6" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-navy leading-tight">
                        Our Mission
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                        "To ensure healthcare data integrity through rigorous
                        accuracy, total confidentiality, and revenue cycle
                        excellence, allowing providers to focus entirely on
                        client requirements."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Specialized Pathways - High Visibility */}
        <section className="py-24 relative overflow-hidden bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                    Clinical Pathways
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-navy leading-[1.05] tracking-tight text-left">
                  Specialized Architecture.
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-slate-200 text-navy hover:bg-slate-50 rounded-none px-10 py-7 text-xs font-black uppercase tracking-widest"
                onClick={() => (window.location.href = "/specialties")}
              >
                View All Specialities <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {SPECIALTIES.map((specialty, i) => (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedId(specialty.id)}
                  className="group relative flex flex-col text-left focus:outline-none w-full"
                >
                  <motion.div {...fadeIn} transition={{ delay: i * 0.1 }}>
                    {/* Visual Base */}
                    <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                      <img
                        src={specialty.image}
                        alt={specialty.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>

                    {/* Layered Content Box */}
                    <div className="relative -mt-20 mx-6 bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] group-hover:-translate-y-3 transition-all duration-500 border border-slate-50">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-navy leading-tight group-hover:text-primary transition-colors">
                          {specialty.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">
                          {specialty.description}
                        </p>

                        <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            View Details
                          </span>
                          <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <ChevronRight className="size-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Institutional Proof - Testimonials */}
        <section className="py-32 bg-white relative">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-12">
                <div className="flex justify-center space-x-2 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="size-8" />
                  ))}
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-4xl font-black text-navy tracking-tight leading-relaxed">
                    "The ERO Healthcare framework didn't just provide a
                    certification; it redefined my entire professional
                    methodology."
                  </h2>
                  <div className="space-y-2">
                    <p className="text-lg font-black text-navy uppercase tracking-widest">
                      Santhosh Kumar
                    </p>
                    <p className="text-sm font-bold text-primary tracking-widest uppercase">
                      Senior Lead Auditor, UnitedHealth Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final Institutional CTA - Premium Redesign */}
        <section className="pb-32 relative">
          <Container>
            <div className="relative rounded-3xl bg-[#020b1d] p-10 lg:p-16 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] text-left">
              {/* Background Ornaments */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(45,108,223,0.15),transparent)] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 size-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

              {/* Subtle Tech Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-5">
                    <div className="inline-flex items-center space-x-3 text-primary">
                      <div className="h-px w-10 bg-current" />
                      <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                        Strategic Integration
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                      Secure Your <br />
                      <span className="text-primary">Clinical Future.</span>
                    </h2>
                    <p className="text-lg text-white/50 font-medium leading-relaxed max-w-md">
                      Join our elite network of healthcare professionals.
                      Connect with an institutional advisor for a comprehensive
                      career placement brief.
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex justify-end pr-8">
                  <div className="relative">
                    {/* Professional Credentialing Seal Visual */}
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] animate-pulse" />
                    <div className="relative size-80 rounded-full border border-white/10 p-4 backdrop-blur-3xl">
                      <div className="w-full h-full rounded-full border-2 border-dashed border-white/5 animate-spin-slow flex items-center justify-center">
                        <div className="size-60 rounded-full border border-primary/20 flex items-center justify-center p-8 bg-white/[0.02]">
                          <div className="text-center space-y-2">
                            <Award className="size-16 text-primary mx-auto mb-4" />
                            <div className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">
                              Official
                            </div>
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">
                              Certification <br /> ISO-9001-2015
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Data Points */}
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute size-2 bg-primary rounded-full animate-ping"
                          style={{
                            top: `${20 + i * 20}%`,
                            left: i % 2 === 0 ? "-10px" : "auto",
                            right: i % 2 !== 0 ? "-10px" : "auto",
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />

      {/* Specialty Detail Drawer */}
      <AnimatePresence>
        {selectedSpecialty && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-[101] overflow-y-auto"
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 left-6 size-10 rounded-full bg-slate-900/10 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-all duration-300 z-10"
                >
                  <X className="size-5" />
                </button>

                {/* Hero Image Section */}
                <div className="h-64 relative">
                  <img
                    src={selectedSpecialty.image}
                    alt={selectedSpecialty.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900" />

                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-secondary text-[8px] text-white px-3 py-0.5 rounded-full font-black uppercase tracking-widest">
                        Active Program
                      </span>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tight leading-none">
                      {selectedSpecialty.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-8">
                  <div className="space-y-4">
                    <p className="text-base text-slate-600 leading-relaxed font-semibold">
                      "{selectedSpecialty.description}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Visual placeholders for icons not explicitly imported
function Building2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
