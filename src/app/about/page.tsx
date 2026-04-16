"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  Globe,
  Award,
  Users,
  LineChart,
  Dna,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import ceo from "@/assets/ceo.jpeg";

export default function AboutPage() {
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
        {/* Institutional Hero */}
        <BrandedHero
          title={
            <>
              Pioneering <br />{" "}
              <span className="text-secondary tracking-tighter">
                Clinical Intelligence.
              </span>
            </>
          }
          subtitle="We are transforming the healthcare revenue cycle through unyielding precision, ethical documentation, and forward-thinking analytics."
          image="/images/about-hero.png"
          gifOverlay="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l0HlJzE6o6sZJb8W4/giphy.gif"
        />

        {/* Executive Vision Section - Swapped for Professional Flow */}
        <section className="py-32 relative bg-slate-50/30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white -z-10 shadow-inner" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.02] -z-10" />

          <Container>
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Visual Presence - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="relative z-10">
                  <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white group">
                    <Image
                      src={ceo.src}
                      alt="CEO"
                      fill
                      className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-2xl font-black tracking-tight">
                        Poovarasan Krishnamoorthi
                      </p>
                      <p className="text-accent text-xs font-bold tracking-widest uppercase">
                        Founder & Chief Executive Officer
                      </p>
                    </div>
                  </div>

                  {/* Floating Professional Badge */}
                  <div className="absolute -bottom-6 -right-6 size-32 bg-white rounded-full p-2 shadow-2xl z-20 flex items-center justify-center border border-slate-100 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <div className="size-full rounded-full border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center">
                      <Award className="text-primary size-6 mb-1" />
                      <span className="text-[8px] font-black text-navy leading-none uppercase tracking-tighter">
                        Certified
                        <br />
                        Excellence
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-12 -left-12 size-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-12 -right-12 size-64 bg-accent/5 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/2 -left-6 w-1 h-32 bg-accent/30 rounded-full" />
              </motion.div>

              {/* Intellectual Narrative - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-10"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-3">
                    <div className="h-px w-8 bg-accent" />
                    <span className="text-[10px] font-black text-accent tracking-[0.3em] uppercase">
                      The Visionary Lead
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-navy leading-[1.1] tracking-tight">
                    Crafting the Future of <br />
                    <span className="text-gradient">Medical Integrity.</span>
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-xl">
                    “ERO Health is dedicated to client success and the professional growth of our team. By continually raising the bar on our performance results, we ensure our clients receive the highest level of service.”
                  </p>
                </div>

                <div className="relative p-10 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 group overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                    <ShieldCheck className="size-48 text-navy" />
                  </div>
                  <div className="space-y-6 relative z-10">
                    <p className="text-xl text-navy font-bold leading-relaxed">
                      “As Aslan famously noted, the purpose of a new experience is to "know me better" in one’s own world. At ERO Health, we believe the work we do here empowers our clients to achieve excellence in their world.”
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="size-10 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center">
                        <Target className="size-5 text-primary" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="space-y-1">
                    <p className="text-3xl font-black text-navy">10+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Years of Clinical Leadership
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-black text-primary">A+ Rated</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Institutional Trust Score
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Core Pillars - Enhanced Institutional Card Design */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tight">
                Our Foundation
              </h2>
              <p className="text-accent/60 text-[10px] font-black uppercase tracking-[0.4em]">
                Vision & mission
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Vision",
                  desc: '"To redefine the healthcare revenue cycle through ethical coding excellence and advanced analytic, ensuring the financial sustainability and operational success of our partners."',
                  color: "text-accent",
                  border: "group-hover:border-accent/30",
                  glow: "group-hover:shadow-accent/5",
                  num: "01",
                },
                {
                  icon: Lightbulb,
                  title: "Our Mission",
                  desc: '"To ensure healthcare data integrity through rigorous accuracy, total confidentiality, and revenue cycle excellence, allowing providers to focus entirely on client requirements."',
                  color: "text-secondary",
                  border: "group-hover:border-secondary/30",
                  glow: "group-hover:shadow-secondary/5",
                  num: "02",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/5 ${pillar.border} transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.4)] ${pillar.glow} overflow-hidden`}
                >
                  <div className="absolute -bottom-6 -right-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-700">
                    {pillar.num}
                  </div>

                  <div className="relative z-10 space-y-8">
                    <div
                      className={`size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${pillar.color} shadow-2xl group-hover:bg-white group-hover:text-navy transition-all duration-500`}
                    >
                      <pillar.icon className="size-8" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-white/40 text-base leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-white/5">
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest group-hover:text-accent transition-colors">
                        Institutional Core
                      </span>
                      <div className="size-2 rounded-full bg-white/10 group-hover:bg-accent animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Institutional Impact Section */}
        <section className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10" />
          <Container>
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div {...fadeIn} className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50 transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/images/data-analytics.png"
                    alt="Data Analytics"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                </div>
                <div className="absolute -bottom-8 -right-8 p-6 rounded-[2rem] bg-white shadow-2xl border border-slate-50 z-20 group hover:border-accent/20 transition-all">
                  <div className="flex items-center space-x-3 mb-2">
                    <LineChart className="text-accent size-4" />
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                      Audit Metrics
                    </span>
                  </div>
                  <p className="text-4xl font-black text-navy tabular-nums group-hover:text-accent transition-colors">
                    99.9%
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-black text-navy leading-tight">
                    Quantifiable Excellence in{" "}
                    <span className="text-primary">
                      Every Interaction.
                    </span>
                  </h2>
                  <p className="text-base text-slate-500 font-medium leading-relaxed max-w-xl">
                    We don't just teach coding; we engineer institutional
                    efficiency. Our metrics are verified by independent audits,
                    ensuring that our partners remain at the forefront of the
                    industry.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Global Partners",
                      value: "250+",
                      icon: Globe,
                      color: "text-primary",
                    },
                    {
                      label: "Certified Coders",
                      value: "15,000+",
                      icon: Users,
                      color: "text-orange-500",
                    },
                    {
                      label: "Compliance Rate",
                      value: "100%",
                      icon: ShieldCheck,
                      color: "text-accent",
                    },
                    {
                      label: "RCM Optimization",
                      value: "25%",
                      icon: Dna,
                      color: "text-indigo-500",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-5 p-5 rounded-2xl bg-slate-50/50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className={`size-10 rounded-lg bg-white flex items-center justify-center ${stat.color} shadow-sm border border-slate-100 group-hover:scale-110 transition-transform`}
                      >
                        <stat.icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-navy">
                          {stat.value}
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Call to Action - Professional Banner */}
        <section className="pb-24">
          <Container>
            <motion.div
              {...fadeIn}
              className="relative rounded-[3rem] bg-navy p-12 lg:p-20 overflow-hidden group shadow-2xl shadow-navy/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 group-hover:translate-x-[40%] transition-transform duration-1000" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                    Ready to elevate your{" "}
                    <span className="text-accent underline decoration-accent/20">
                      integrity?
                    </span>
                  </h2>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="/contact"
                      className="px-8 py-4 bg-white text-navy font-black rounded-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center space-x-2 text-sm"
                    >
                      <span>Consultation</span>
                      <ArrowRight className="size-4" />
                    </a>
                    <a
                      href="/why-us"
                      className="px-8 py-4 bg-white/5 text-white font-black rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all text-sm"
                    >
                      Methodology
                    </a>
                  </div>
                </div>
                <div className="hidden lg:flex justify-end pr-10">
                  <div className="size-48 rounded-full border border-white/5 flex items-center justify-center animate-spin-slow">
                    <div className="size-32 rounded-full border border-accent/20 flex items-center justify-center">
                      <div className="size-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-xl">
                        <Target className="text-accent size-8 opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
