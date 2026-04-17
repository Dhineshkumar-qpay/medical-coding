"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Headphones, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            course: formData.get("course"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                trackEvent("form_submission", "contact", "course_inquiry");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="py-24 bg-white">
                <Container>
                    <div className="max-w-2xl mx-auto text-center space-y-8 animate-in zoom-in duration-500">
                        <div className="size-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                            <CheckCircle className="size-12" />
                        </div>
                        <h2 className="text-4xl font-black text-navy tracking-tight">Transmission Received</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Our institutional protocol has initiated. An admissions director will review your brief and establish contact within 24 operational hours.
                        </p>
                        <Button onClick={() => setStatus("idle")} className="bg-navy text-white hover:bg-primary px-10 py-6 rounded-none font-black text-[10px] uppercase tracking-widest">
                            Return to Command Center
                        </Button>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <section id="contact" className="py-24 bg-white overflow-hidden relative">
            {/* Scientific Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.02] pointer-events-none" />

            <Container>
                {/* Access Channels Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24 relative z-10">
                    {[
                        {
                            label: "Strategic Hotline",
                            value: "+1 (555) 000-0000",
                            detail: "Counselors Online Now",
                            icon: Phone,
                            color: "text-primary",
                            href: "tel:+15550000000"
                        },
                        {
                            label: "Global Admissions",
                            value: "admissions@medcode.com",
                            detail: "2-Hour Response SLA",
                            icon: Mail,
                            color: "text-secondary",
                            href: "mailto:admissions@medcode.com"
                        },
                        {
                            label: "Center of Excellence",
                            value: "Health City, HC 12345",
                            detail: "Institutional Headquarters",
                            icon: MapPin,
                            color: "text-accent",
                            href: "https://maps.google.com/?q=Health+City+12345"
                        }
                    ].map((channel, i) => (
                        <motion.a
                            key={i}
                            href={channel.href}
                            target={channel.href.startsWith('http') ? '_blank' : undefined}
                            rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-6 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden hover:bg-navy shadow-lg hover:shadow-[0_15px_40px_rgba(0,102,204,0.12)] transition-all duration-700 block outline-none"
                        >
                            <channel.icon className="absolute -bottom-4 -right-4 size-24 text-slate-100 group-hover:text-white/5 transition-all duration-700 pointer-events-none" />
                            <div className="relative z-10 space-y-4 text-left">
                                <div className="size-12 rounded-xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm group-hover:scale-110">
                                    <channel.icon className="size-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-400 group-hover:text-white/40 uppercase tracking-[0.3em] transition-colors">{channel.label}</p>
                                    <p className="text-xl font-black text-navy group-hover:text-white tracking-tight transition-colors">{channel.value}</p>
                                    <div className="flex items-center space-x-2">
                                        <div className="size-1.5 rounded-full bg-secondary animate-pulse" />
                                        <p className="text-[9px] font-black text-secondary group-hover:text-secondary/80 uppercase tracking-widest">{channel.detail}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                    {/* Inquiry Interface Copy */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="h-0.5 w-12 bg-primary" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Inquiry Protocol</span>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-black text-navy leading-none tracking-tight text-left">
                                Establish Contact with <br />
                                <span className="text-primary/10 outline-text">Academic Leadership.</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-lg">
                                Our institutional advisors provide deep-dive career diagnostics to help you navigate medical coding certifications with clinical precision.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "Global Availability", icon: Globe, desc: "24/7 Strategic Support Lines" },
                                { title: "Priority Dispatch", icon: Headphones, desc: "Immediate Counseling Alignment" },
                                { title: "Encrypted Portal", icon: ShieldCheck, desc: "Secure Institutional Data Transmission" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-6 p-6 rounded-3xl border border-slate-50 hover:border-slate-100 transition-colors">
                                    <div className="size-12 rounded-2xl bg-slate-50 text-navy flex items-center justify-center flex-shrink-0">
                                        <item.icon className="size-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-navy leading-none mb-1">{item.title}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Inquiry Submission Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-navy p-10 lg:p-14 rounded-2xl shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 pl-4">Full Identity</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-8 py-5 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-white/30 text-white font-bold placeholder:text-white/20 text-sm outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 pl-4">Comm. Line</label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-8 py-5 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-white/30 text-white font-bold placeholder:text-white/20 text-sm outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 pl-4">Institutional Email</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full px-8 py-5 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-white/30 text-white font-bold placeholder:text-white/20 text-sm outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 pl-4">Program Selection</label>
                                <select
                                    name="course"
                                    className="w-full px-8 py-5 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-white/30 text-white font-bold text-sm outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option className="bg-navy">Anesthesia Specialty</option>
                                    <option className="bg-navy">Emergency Medicine</option>
                                    <option className="bg-navy">Hospital Inpatient</option>
                                    <option className="bg-navy">Radiology Track</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 pl-4">Message Brief</label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Details of inquiry..."
                                    className="w-full px-8 py-5 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-white/30 text-white font-bold placeholder:text-white/20 text-sm outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-primary text-white hover:bg-white hover:text-navy rounded-none py-8 text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl transition-all border border-transparent hover:border-white/10"
                            >
                                <span>{status === "loading" ? "Transmitting..." : "Dispatch Briefing"}</span>
                                <Send className="size-4 ml-3" />
                            </Button>

                            <div className="flex items-center justify-center space-x-3 text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">
                                <ShieldCheck className="size-3" />
                                <span>SECURE INSTITUTIONAL GATEWAY</span>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
