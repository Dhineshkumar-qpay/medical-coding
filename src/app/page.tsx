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
          title={
            <>
              Institutional Accuracy. <br />{" "}
              <span className="text-secondary tracking-tighter">
                Global Integrity.
              </span>
            </>
          }
          subtitle="Empowering the healthcare ecosystem with AAPC/AHIMA aligned precision training and strategic revenue cycle documentation."
          image="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzlpZDJ1NDRodDV3cG1waGZ2dnczdXBlNHBqOWQ2Y3JqczBodnQzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOEbLRT4SwD35IELiQ/giphy.gif"
          gifOverlay="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l0HlJzE6o6sZJb8W4/giphy.gif"
          action={
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-7 text-xs font-black uppercase tracking-[0.2em] shadow-2xl">
                Enter Enrollment Portal
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-none px-10 py-7 text-xs font-black uppercase tracking-[0.2em]"
              >
                Institutional Brief
              </Button>
            </div>
          }
        />

        {/* Global Stats Overlay - Professional High-Density Design */}
        <section className="relative -mt-20 z-40">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  label: "Audit Accuracy",
                  value: "99.9%",
                  icon: Target,
                  color: "bg-emerald-500",
                  textColor: "text-emerald-600",
                  description: "Institutional Standard"
                },
                {
                  label: "Placement Rate",
                  value: "96.8%",
                  icon: Zap,
                  color: "bg-amber-500",
                  textColor: "text-amber-600",
                  description: "Global Network"
                },
                {
                  label: "Hiring Partners",
                  value: "150+",
                  icon: Globe2,
                  color: "bg-blue-500",
                  textColor: "text-blue-600",
                  description: "Strategic Alliances"
                },
                {
                  label: "Certifications",
                  value: "12,000+",
                  icon: Award,
                  color: "bg-indigo-500",
                  textColor: "text-indigo-600",
                  description: "Professional Alumni"
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white rounded-[2rem] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 overflow-hidden"
                >
                  {/* Decorative Glow */}
                  <div className={`absolute -top-12 -right-12 size-24 rounded-full ${stat.color} opacity-[0.03] group-hover:opacity-[0.08] blur-3xl transition-opacity duration-500`} />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`size-11 rounded-xl ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <stat.icon className="size-5" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`text-[7px] font-black uppercase tracking-[0.3em] ${stat.textColor} opacity-40`}>
                          Verified
                        </span>
                        <div className="h-0.5 w-4 bg-slate-100 mt-1" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-3xl lg:text-4xl font-black text-navy leading-none tabular-nums tracking-tighter">
                        {stat.value}
                      </p>
                      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</h3>
                    </div>

                    <div className="pt-5 border-t border-slate-50">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{stat.description}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* The ERO Architectural Framework - Institutional Redesign */}
        <section className="py-32 relative overflow-hidden bg-[#fdfdfd]">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-[80%] bg-primary/[0.03] rounded-bl-[10rem] -z-10" />
          <div className="absolute top-[20%] -left-20 size-[30rem] bg-secondary/[0.02] rounded-full blur-3xl -z-10" />

          <Container>
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <motion.div {...fadeIn} className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-[10px] font-black text-navy tracking-[0.3em] uppercase">
                      Core Methodology
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-5xl font-black text-navy leading-[1.05] tracking-tight">
                    Engineering Precision at Every Stage.
                  </h2>

                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                    Our institutional framework bridges the gap between clinical complexity and financial integrity with unparalleled accuracy.
                  </p>
                </div>

                <div className="grid gap-4 text-left">
                  {[
                    "Clinical Diagnostic Engineering",
                    "Advanced RCM Optimization",
                    "Global Compliance Standards",
                    "Elite Corporate Placement",
                  ].map((feat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-primary/20 transition-all group"
                    >
                      <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="size-5" />
                      </div>
                      <span className="text-base font-bold text-navy opacity-80 group-hover:opacity-100 transition-opacity">
                        {feat}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Medical Integrity",
                    desc: "Upholding the highest standards of clinical documentation and ethical coding protocols.",
                    icon: ShieldCheck,
                    num: "01",
                    color: "text-emerald-500",
                    bgColor: "bg-emerald-50",
                  },
                  {
                    title: "Diagnostic Velocity",
                    desc: "Optimizing throughput without compromising the structural integrity of clinical data.",
                    icon: Zap,
                    num: "02",
                    color: "text-amber-500",
                    bgColor: "bg-amber-50",
                  },
                  {
                    title: "Placement Intelligence",
                    desc: "Leveraging our 150+ partner network for immediate executive-level integration.",
                    icon: Users,
                    num: "03",
                    color: "text-blue-500",
                    bgColor: "bg-blue-50",
                  },
                  {
                    title: "Operational Rigor",
                    desc: "Continuous audit loops ensuring 100% compliance with AAPC/AHIMA protocols.",
                    icon: Award,
                    num: "04",
                    color: "text-indigo-500",
                    bgColor: "bg-indigo-50",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500 overflow-hidden text-left"
                  >
                    <div className="absolute top-0 right-0 p-6">
                      <span className="text-3xl font-black text-slate-50 group-hover:text-slate-100 transition-colors">
                        {card.num}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-6">
                      <div
                        className={`size-13 rounded-2xl ${card.bgColor} ${card.color} flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner`}
                      >
                        <card.icon className="size-6" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-black text-navy leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                          {card.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-50 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-black uppercase tracking-widest">Learn More</span>
                        <ChevronRight className="ml-2 size-3.5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                  Specialized <br />{" "}
                  <span className="text-primary/10 outline-text">Training</span>{" "}
                  <br /> Architecture.
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
                        <div className="flex items-center space-x-2">
                          <div className="h-1 w-8 bg-secondary rounded-full" />
                          <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">
                            Medical Specialty
                          </span>
                        </div>

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
                      <span className="text-[9px] font-black uppercase tracking-[0.4em]">Strategic Integration</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                      Secure Your <br />
                      <span className="text-primary">Clinical Future.</span>
                    </h2>
                    <p className="text-lg text-white/50 font-medium leading-relaxed max-w-md">
                      Join our elite network of healthcare professionals. Connect with an institutional advisor for a comprehensive career placement brief.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-5">
                    <Button className="group bg-primary hover:bg-white text-white hover:text-navy rounded-xl px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500">
                      <span>Get Started Now</span>
                      <ChevronRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/10 text-white hover:bg-white/5 rounded-xl px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-md transition-all"
                    >
                      Institutional Standards
                    </Button>
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
                            <div className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">Official Institutional</div>
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Certification Hub</div>
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
                            left: i % 2 === 0 ? '-10px' : 'auto',
                            right: i % 2 !== 0 ? '-10px' : 'auto',
                            animationDelay: `${i * 0.5}s`
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

                    <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                      <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                        <Clock className="size-4 text-secondary mx-auto" />
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                          Duration
                        </div>
                        <div className="text-sm font-black text-primary">
                          6 Months
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                        <BookOpen className="size-4 text-secondary mx-auto" />
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                          Modules
                        </div>
                        <div className="text-sm font-black text-primary">
                          12 Units
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                        <ShieldCheck className="size-4 text-secondary mx-auto" />
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                          Type
                        </div>
                        <div className="text-sm font-black text-primary">
                          Online
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-slate-900">
                      Learning Path
                    </h4>
                    <div className="grid gap-3">
                      {[
                        "Advanced ICD-10-CM guidelines",
                        "Complex coding scenarios",
                        "RCM lifecycle management",
                        "Compliance & audit prep",
                      ].map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-3 p-4 rounded-xl border border-slate-50 hover:border-secondary/20 transition-colors"
                        >
                          <div className="size-4 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ShieldCheck className="size-3" />
                          </div>
                          <span className="text-xs text-slate-600 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-primary py-7 text-xs font-black uppercase tracking-widest"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Enroll in Program
                  </Button>
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
