"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { SPECIALTIES } from "@/lib/specialties";
import { ChevronRight, X, ArrowRight, ShieldCheck, Clock, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpecialtiesPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedSpecialty = SPECIALTIES.find(s => s.id === selectedId);

    return (
        <>
            <Navbar showTopBanner={true} />
            <main>
                <BrandedHero
                    title="Our Specialties"
                    subtitle="Expert-led training in high-demand medical coding disciplines."
                    image="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=2000"
                    gifOverlay="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l0HlJzE6o6sZJb8W4/giphy.gif"
                />

                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="h-[1px] w-12 bg-secondary" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Institutional Excellence</span>
                                <div className="h-[1px] w-12 bg-secondary" />
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
                                Specialized Training for a <span className="text-primary">Complex Healthcare</span> Ecosystem
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                At the Medical Coding Training Institute, we recognize that excellence in modern healthcare requires more than general knowledge. Our specialized tracks are meticulously designed by industry veterans to provide deep-dive expertise in the highest-accuracy coding domains. Each specialization is mapped to current global standards, ensuring our graduates are prepared for high-precision institutional environments.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
                                {[
                                    { label: "Industry Validated", icon: ShieldCheck },
                                    { label: "Expert Instructors", icon: BookOpen },
                                    { label: "Job Oriented", icon: ArrowRight },
                                    { label: "24/7 Support", icon: Clock },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center space-y-2">
                                        <item.icon className="size-5 text-secondary" />
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="pb-24 pt-0 bg-slate-50 relative overflow-hidden">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                            {SPECIALTIES.map((specialty) => (
                                <button
                                    key={specialty.id}
                                    onClick={() => setSelectedId(specialty.id)}
                                    className="group relative flex flex-col text-left focus:outline-none"
                                >
                                    {/* Visual Base */}
                                    <div className="relative h-64 w-full rounded-[2rem] overflow-hidden shadow-xl">
                                        <img
                                            src={specialty.image}
                                            alt={specialty.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    </div>

                                    {/* Layered Content Box */}
                                    <div className="relative -mt-16 mx-6 bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 transition-all duration-500 border border-slate-50">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2">
                                                <div className="h-1 w-8 bg-secondary rounded-full" />
                                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Medical Specialty</span>
                                            </div>

                                            <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">
                                                {specialty.title}
                                            </h3>

                                            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">
                                                {specialty.description}
                                            </p>

                                            <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                                                <span className="text-xs font-bold text-slate-400">View Program Details</span>
                                                <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                    <ChevronRight className="size-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </Container>

                    {/* Background Decorative Shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
                </section>
            </main>
            <Footer />

            {/* Right Side Drawer */}
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
                                {/* Close Button - More Minimal */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-6 left-6 size-10 rounded-full bg-slate-900/10 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-all duration-300 z-10"
                                >
                                    <X className="size-5" />
                                </button>

                                {/* Hero Image Section - Reduced Height */}
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

                                {/* Content Section - Tightened */}
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
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
