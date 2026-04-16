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
  BookOpen
} from "lucide-react";

import { SPECIALTIES } from "@/lib/specialties";
import Link from "next/link";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedSpecialty = SPECIALTIES.find(s => s.id === selectedId);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-white overflow-hidden">
        {/* Dynamic Institutional Hero */}
        <BrandedHero
          title={<>Institutional Accuracy. <br /> <span className="text-secondary tracking-tighter">Global Integrity.</span></>}
          subtitle="Empowering the healthcare ecosystem with AAPC/AHIMA aligned precision training and strategic revenue cycle documentation."
          image="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=2000"
          gifOverlay="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l0HlJzE6o6sZJb8W4/giphy.gif"
          action={
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-7 text-xs font-black uppercase tracking-[0.2em] shadow-2xl">
                Enter Enrollment Portal
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-none px-10 py-7 text-xs font-black uppercase tracking-[0.2em]">
                Institutional Brief
              </Button>
            </div>
          }
        />

        {/* Global Stats Overlay - High Density */}
        <section className="relative -mt-16 z-40">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
              {[
                { label: "Audit Accuracy", value: "99.9%", icon: Target, color: "text-accent" },
                { label: "Placement Rate", value: "96.8%", icon: Zap, color: "text-secondary" },
                { label: "Hiring Partners", value: "150+", icon: Globe2, color: "text-primary" },
                { label: "Certifications", value: "12,000+", icon: Award, color: "text-navy" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 space-y-4 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center space-x-3">
                    <div className={`size-8 rounded-lg bg-slate-50 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon className="size-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                  </div>
                  <p className="text-4xl font-black text-navy leading-none tabular-nums tracking-tighter">{stat.value}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* The ERO Architectural Framework */}
        <section className="py-32 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10" />

          <Container>
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <motion.div {...fadeIn} className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-3">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Core Methodology</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-navy leading-[1.1] tracking-tight">
                    Engineering precision at <br />
                    <span className="text-gradient font-black">Every Lifecycle Stage.</span>
                  </h2>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                    Our institutional framework is designed to bridge the gap between clinical documentation and financial integrity. We don't just teach; we validate professional excellence.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  {[
                    "Clinical Diagnostic Engineering",
                    "Advanced RCM Optimization",
                    "Global Compliance Standards (HIPAA/ISO)",
                    "Elite Corporate Placement Matrix"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="size-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-navy opacity-80">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Medical Integrity",
                    desc: "Upholding the highest standards of clinical documentation and ethical coding.",
                    icon: ShieldCheck,
                    num: "01",
                    color: "text-accent"
                  },
                  {
                    title: "Diagnostic Velocity",
                    desc: "Optimizing throughput without compromising the structural integrity of clinical data.",
                    icon: Zap,
                    num: "02",
                    color: "text-secondary"
                  },
                  {
                    title: "Placement Intelligence",
                    desc: "Leveraging our 150+ partner network for immediate executive-level integration.",
                    icon: Users,
                    num: "03",
                    color: "text-primary"
                  },
                  {
                    title: "Operational Rigor",
                    desc: "Continuous audit loops ensuring 100% compliance with AAPC/AHIMA protocols.",
                    icon: Award,
                    num: "04",
                    color: "text-navy"
                  }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute -bottom-4 -right-4 text-7xl font-black text-slate-50 group-hover:text-slate-100 transition-colors">
                      {card.num}
                    </div>
                    <div className="relative z-10 space-y-6">
                      <div className={`size-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${card.color} group-hover:bg-navy group-hover:text-white transition-all duration-500 shadow-inner`}>
                        <card.icon className="size-6" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-navy">{card.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{card.desc}</p>
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
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Clinical Pathways</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-navy leading-[1.1] tracking-tight">
                  Specialized <br /> <span className="text-primary/10 outline-text">Training</span> <br /> Architecture.
                </h2>
              </div>
              <Button variant="outline" className="border-slate-200 text-navy hover:bg-slate-50 rounded-none px-10 py-7 text-xs font-black uppercase tracking-widest" onClick={() => window.location.href = '/specialties'}>
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
                  <motion.div
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                  >
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
                          <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Medical Specialty</span>
                        </div>

                        <h3 className="text-2xl font-black text-navy leading-tight group-hover:text-primary transition-colors">
                          {specialty.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">
                          {specialty.description}
                        </p>

                        <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">View Details</span>
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
                  {[...Array(5)].map((_, i) => <Award key={i} className="size-8" />)}
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-4xl font-black text-navy tracking-tight leading-relaxed">
                    "The ERO Healthcare framework didn't just provide a certification; it redefined my entire professional methodology. The depth of their clinical insights is unmatched."
                  </h2>
                  <div className="space-y-2">
                    <p className="text-lg font-black text-navy uppercase tracking-widest">Santhosh Kumar</p>
                    <p className="text-sm font-bold text-primary tracking-widest uppercase">Senior Lead Auditor, UnitedHealth Group</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final Institutional CTA */}
        <section className="pb-32">
          <Container>
            <div className="relative rounded-[2rem] bg-navy p-12 lg:p-24 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-50" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 group-hover:translate-x-[45%] transition-transform duration-1000" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                    Secure Your <br />
                    <span className="text-accent underline decoration-accent/20">Clinical Future.</span>
                  </h2>
                  <p className="text-lg text-white/60 font-medium leading-relaxed max-w-md">
                    Connect with our institutional advisors today for a comprehensive career diagnostic and placement brief.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="bg-white text-navy hover:bg-accent hover:text-white rounded-none px-10 py-7 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                      Consultation Brief
                    </Button>
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 rounded-none px-10 py-7 text-xs font-black uppercase tracking-widest">
                      Institutional Standards
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:flex justify-end relative">
                  <div className="size-64 rounded-full border border-white/5 flex items-center justify-center animate-spin-slow">
                    <div className="size-48 rounded-full border border-primary/20 flex items-center justify-center">
                      <div className="size-32 rounded-full border border-secondary/20 flex items-center justify-center">
                        <Award className="text-accent size-12 opacity-40" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-4 rounded-full bg-accent animate-ping" />
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
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Duration</div>
                        <div className="text-sm font-black text-primary">6 Months</div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                        <BookOpen className="size-4 text-secondary mx-auto" />
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Modules</div>
                        <div className="text-sm font-black text-primary">12 Units</div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                        <ShieldCheck className="size-4 text-secondary mx-auto" />
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Type</div>
                        <div className="text-sm font-black text-primary">Online</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-slate-900">Learning Path</h4>
                    <div className="grid gap-3">
                      {[
                        "Advanced ICD-10-CM guidelines",
                        "Complex coding scenarios",
                        "RCM lifecycle management",
                        "Compliance & audit prep"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3 p-4 rounded-xl border border-slate-50 hover:border-secondary/20 transition-colors">
                          <div className="size-4 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ShieldCheck className="size-3" />
                          </div>
                          <span className="text-xs text-slate-600 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-primary py-7 text-xs font-black uppercase tracking-widest" onClick={() => window.location.href = '/contact'}>
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
  )
}
