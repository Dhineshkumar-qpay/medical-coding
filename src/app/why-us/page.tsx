import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandedHero } from "@/components/layout/BrandedHero";
import {
  Zap,
  ShieldCheck,
  Target,
  Award,
  BarChart3,
  Users,
  Globe,
  Code,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Why Us | ERO Healthcare Institutional Excellence",
  description:
    "Our core philosophy, performance metrics, and the institutional standards that define ERO Healthcare.",
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-white">
        <BrandedHero
          title={
            <>
              The Institutional <br />{" "}
              <span className="text-secondary tracking-tighter">
                Manifesto.
              </span>
            </>
          }
          subtitle="Establishing the global benchmark for medical coding excellence through rigorous operational validation and clinical integrity."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          gifOverlay="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l41lI4bYucsR8SUTe/giphy.gif"
        />

        {/* Section 1: Strategic Architecture */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[160px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[160px] -z-10" />

          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                <div className="space-y-6 max-w-2xl">
                  <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-navy text-white border border-white/10 shadow-xl">
                    <BarChart3 className="size-3.5 text-accent animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                      Operational DNA
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-[0.9] uppercase">
                    Engineering <br />{" "}
                    <span className="text-primary/20 outline-text">
                      Clinical
                    </span>{" "}
                    <br /> Excellence.
                  </h2>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed border-l-4 border-primary pl-8 py-2">
                    Our architecture is built on diagnostic reasoning and
                    medical decision-making complexity, ensuring every candidate
                    enters the workforce with executive-level precision.
                  </p>
                </div>
                <div className="hidden lg:block pb-4">
                  <div className="size-32 rounded-full border border-dashed border-slate-300 flex items-center justify-center animate-spin-slow">
                    <div className="size-24 rounded-full border border-primary/30 flex items-center justify-center">
                      <ShieldCheck className="size-8 text-primary opacity-40" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                {[
                  {
                    title: "Academic Rigor",
                    desc: "Built on diagnostic reasoning and complexity.",
                    icon: Code,
                  },
                  {
                    title: "Placement Hub",
                    desc: "150+ global recruitment channels.",
                    icon: Target,
                  },
                  {
                    title: "Expert Mentors",
                    desc: "Veteran AAPC certified professionals.",
                    icon: Users,
                  },
                  {
                    title: "Global Standards",
                    desc: "ISO 9001:2015 institutional alignment.",
                    icon: Globe,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-10 space-y-8 hover:bg-navy hover:text-white transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute -right-4 -top-4 size-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                    <div className="size-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-navy transition-all duration-500">
                      <item.icon className="size-6" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-black uppercase tracking-tight leading-none">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold leading-relaxed opacity-60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Performance Metrics Grid */}
        <section className="py-32 bg-navy relative overflow-hidden">
          {/* Decorative Circuit Board Pattern (Conceptual) */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <Container>
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-12 text-white">
                <div className="space-y-8">
                  <div className="h-px w-24 bg-accent" />
                  <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-none uppercase">
                    Clinical <br />{" "}
                    <span className="text-accent">Velocity</span> <br />{" "}
                    In Motion.
                  </h2>
                  <p className="text-base text-white/50 font-medium leading-relaxed max-w-sm">
                    We measure success through operational throughput and
                    immediate clinical placement. Integrity is our benchmark.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "98.4% First-Attempt Certification",
                    "Multi-Specialty Lab Environment",
                    "Executive Branding Suite",
                    "24/7 Global Support Matrix",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-6 group border-b border-white/5 pb-4 last:border-0 hover:border-accent transition-colors"
                    >
                      <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity">
                        0{i + 1}
                      </span>
                      <span className="text-sm font-bold tracking-tight text-white/70 group-hover:text-white transition-all uppercase tracking-widest">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  {/* Big Data Visualizer Card */}
                  <div className="col-span-2 md:col-span-1 p-10 rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/10 space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="size-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                        <Zap className="size-6" />
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30">
                        Real-Time Data
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-5xl font-black tracking-tighter text-white">
                        96.8%
                      </h3>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                        Institutional Placement
                      </p>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[96.8%] shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                    </div>
                  </div>

                  <div className="col-span-2 md:col-span-1 space-y-8">
                    {/* Financial Growth Card */}
                    <div className="p-8 rounded-[2.5rem] bg-white text-navy space-y-4 shadow-2xl">
                      <div className="flex items-center space-x-3 text-primary">
                        <BarChart3 className="size-4" />
                        <p className="text-[9px] font-black uppercase tracking-widest">
                          Growth Delta
                        </p>
                      </div>
                      <p className="text-3xl font-black tracking-tighter">
                        +65%{" "}
                        <span className="text-xs opacity-30 tracking-normal font-bold">
                          Avg. Salary
                        </span>
                      </p>
                    </div>

                    {/* Global Network Card */}
                    <div className="p-8 rounded-[2.5rem] border border-white/20 bg-transparent text-white space-y-4">
                      <div className="flex items-center space-x-3 text-secondary">
                        <Globe className="size-4" />
                        <p className="text-[9px] font-black uppercase tracking-widest">
                          Connect Hub
                        </p>
                      </div>
                      <p className="text-3xl font-black tracking-tighter">
                        150+{" "}
                        <span className="text-xs opacity-30 tracking-normal font-bold">
                          Hiring Nodes
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/20 rounded-full blur-[120px] -z-0" />
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: The Global Integrity Note */}
        <section className="py-32 relative bg-white overflow-hidden">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="flex items-center justify-center space-x-8 opacity-20">
                <Award className="size-16 text-navy" />
                <div className="h-16 w-px bg-slate-300" />
                <ShieldCheck className="size-16 text-navy" />
              </div>
              <div className="space-y-8">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] leading-relaxed">
                  Clinical Integrity • Operational Professionalism •
                  Institutional Excellence
                </h3>
                <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.4em] max-w-xl mx-auto">
                  ERO Healthcare Institutional Framework © 2024. All Rights
                  Reserved. Redefining the Global Revenue Cycle.
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
