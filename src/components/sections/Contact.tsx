"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, User } from "lucide-react";
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
            <div className="py-32 bg-[#fafbfc]">
                <Container>
                    <div className="max-w-md mx-auto text-center space-y-8 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] animate-in zoom-in duration-500">
                        <div className="size-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                            <CheckCircle className="size-10 animate-bounce" />
                        </div>
                        <h2 className="text-3xl font-black text-navy tracking-tight">Inquiry Received</h2>
                        <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                            Thank you for reaching out. An admissions counselor will review your selection and contact you shortly.
                        </p>
                        <Button onClick={() => setStatus("idle")} className="w-full bg-navy text-white hover:bg-primary font-black text-[10px] uppercase tracking-widest h-[50px] rounded-xl">
                            Return to Command Center
                        </Button>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <section id="contact" className="py-24 bg-[#fafbfc] overflow-hidden relative">
            {/* Scientific Grid Pattern & Glowing Blur Orbs */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
            <div className="absolute -top-24 -left-24 size-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 size-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <Container className="max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
                    
                    {/* Left Column: Get In Touch With Us Now Info Grid with interactive click anchors */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 flex flex-col border border-slate-200/80 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_65px_rgba(9,21,43,0.06)] hover:-translate-y-1 transition-all duration-500 rounded-[2rem] overflow-hidden group/card"
                    >
                        {/* Top Dark Navy Title Banner with horizontal gradient sheen */}
                        <div className="bg-gradient-to-r from-[#0a1931] via-[#15305b] to-[#0a1931] py-5 px-6 text-center border-b border-white/5">
                            <h3 className="text-white font-black text-sm uppercase tracking-wider">
                                Get In Touch With Us Now!
                            </h3>
                        </div>

                        {/* 2x2 Clean Minimalist Informational Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 flex-1">
                            {/* Cell 1: Phone */}
                            <a 
                                href="tel:+15550000000"
                                className="p-8 flex flex-col items-center text-center space-y-3 border-b border-slate-100 sm:border-r hover:bg-slate-50/40 group/quadrant transition-all duration-300 outline-none cursor-pointer"
                            >
                                <div className="size-11 rounded-full bg-slate-50 flex items-center justify-center text-[#09152b] group-hover/quadrant:bg-primary group-hover/quadrant:text-white group-hover/quadrant:scale-110 transition-all duration-300 shadow-sm">
                                    <Phone className="size-5" />
                                </div>
                                <h4 className="text-base font-black text-navy leading-none group-hover/quadrant:text-primary transition-colors duration-300">Phone Number</h4>
                                <div className="text-xs text-slate-500 font-bold space-y-1">
                                    <p className="group-hover/quadrant:text-primary transition-colors">+1 (555) 000-0000</p>
                                    <p className="text-[10px] text-primary">Click to Call Now</p>
                                </div>
                            </a>

                            {/* Cell 2: Email */}
                            <a 
                                href="mailto:admissions@medcode.com"
                                className="p-8 flex flex-col items-center text-center space-y-3 border-b border-slate-100 hover:bg-slate-50/40 group/quadrant transition-all duration-300 outline-none cursor-pointer"
                            >
                                <div className="size-11 rounded-full bg-slate-50 flex items-center justify-center text-[#09152b] group-hover/quadrant:bg-primary group-hover/quadrant:text-white group-hover/quadrant:scale-110 transition-all duration-300 shadow-sm">
                                    <Mail className="size-5" />
                                </div>
                                <h4 className="text-base font-black text-navy leading-none group-hover/quadrant:text-primary transition-colors duration-300">Email</h4>
                                <div className="text-xs text-slate-500 font-bold space-y-1">
                                    <p className="group-hover/quadrant:text-primary transition-colors">admissions@medcode.com</p>
                                    <p className="text-[10px] text-primary">Click to Send Email</p>
                                </div>
                            </a>

                            {/* Cell 3: Location */}
                            <a 
                                href="https://maps.google.com/?q=Health+City+12345"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 flex flex-col items-center text-center space-y-3 border-b sm:border-b-0 border-slate-100 sm:border-r hover:bg-slate-50/40 group/quadrant transition-all duration-300 outline-none cursor-pointer"
                            >
                                <div className="size-11 rounded-full bg-slate-50 flex items-center justify-center text-[#09152b] group-hover/quadrant:bg-primary group-hover/quadrant:text-white group-hover/quadrant:scale-110 transition-all duration-300 shadow-sm">
                                    <MapPin className="size-5" />
                                </div>
                                <h4 className="text-base font-black text-navy leading-none group-hover/quadrant:text-primary transition-colors duration-300">Location</h4>
                                <div className="text-xs text-slate-500 font-bold space-y-1 leading-relaxed">
                                    <p>Health City, HC 12345</p>
                                    <p className="text-[10px] text-primary">Click to Open Maps</p>
                                </div>
                            </a>

                            {/* Cell 4: WhatsApp Support */}
                            <a 
                                href="https://wa.me/15550000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 flex flex-col items-center text-center space-y-3 hover:bg-slate-50/40 group/quadrant transition-all duration-300 outline-none cursor-pointer"
                            >
                                <div className="size-11 rounded-full bg-slate-50 flex items-center justify-center text-[#09152b] group-hover/quadrant:bg-emerald-500 group-hover/quadrant:text-white group-hover/quadrant:scale-110 transition-all duration-300 shadow-sm">
                                    <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.588 1.974 14.12 1.95 11.47 1.95c-5.434 0-9.858 4.37-9.863 9.8-.001 1.762.486 3.48 1.412 5.013l-1.01 3.693 3.793-.984zM16.57 14.4c-.25-.125-1.476-.725-1.705-.808-.228-.083-.393-.125-.558.125-.166.25-.64.808-.784.975-.145.166-.29.187-.54.062-.25-.125-1.05-.386-2-1.229-.738-.655-1.236-1.465-1.38-1.714-.145-.25-.015-.385.11-.51.112-.11.25-.29.375-.435.125-.145.166-.25.25-.417.083-.166.04-.312-.02-.437-.062-.125-.558-1.333-.765-1.833-.2-.486-.403-.412-.558-.412h-.475c-.166 0-.437.062-.663.312-.228.25-.87.85-.87 2.075s.9 2.408.995 2.541c.095.13 1.762 2.675 4.263 3.746.595.255 1.057.408 1.417.523.598.19 1.143.163 1.573.1.48-.07 1.477-.6 1.684-1.18.207-.58.207-1.08.145-1.18-.062-.1-.228-.145-.478-.27z"/>
                                    </svg>
                                </div>
                                <h4 className="text-base font-black text-navy leading-none group-hover/quadrant:text-emerald-600 transition-colors duration-300">WhatsApp Chat</h4>
                                <div className="text-xs text-slate-500 font-bold space-y-1">
                                    <p className="group-hover/quadrant:text-emerald-600 transition-colors">+1 (555) 000-0000</p>
                                    <p className="text-[10px] text-emerald-500 font-extrabold">Click to Chat Live</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Us Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 flex flex-col border border-slate-200 bg-slate-100/60 shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_65px_rgba(9,21,43,0.06)] hover:-translate-y-1 transition-all duration-500 rounded-[2rem] overflow-hidden text-left"
                    >
                        {/* Top Dark Navy Title Banner with matching horizontal sheen */}
                        <div className="bg-gradient-to-r from-[#0a1931] via-[#15305b] to-[#0a1931] py-5 px-6 text-center border-b border-white/5">
                            <h3 className="text-white font-black text-sm uppercase tracking-wider">
                                Contact Us
                            </h3>
                        </div>

                        {/* Existing Fields Form Content */}
                        <form onSubmit={handleSubmit} className="p-8 flex-1 flex flex-col justify-between space-y-5">
                            <div className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {/* Full Identity / Name */}
                                    <div className="relative group/input">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                                            <User className="size-4" />
                                        </div>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Full Name"
                                            className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative group/input">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                                            <Phone className="size-4" />
                                        </div>
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="relative group/input">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                                        <Mail className="size-4" />
                                    </div>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                                    />
                                </div>

                                {/* Course / Track Program Selection */}
                                <div className="relative group/input">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                                        <Clock className="size-4" />
                                    </div>
                                    <select
                                        name="course"
                                        className="pl-11 pr-8 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy outline-none transition-all appearance-none cursor-pointer shadow-sm"
                                    >
                                        <option className="bg-white">Anesthesia Specialty</option>
                                        <option className="bg-white">Emergency Medicine</option>
                                        <option className="bg-white">Hospital Inpatient</option>
                                        <option className="bg-white">Radiology Track</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-slate-200 pl-2 text-slate-400 text-[10px]">
                                        ▼
                                    </div>
                                </div>

                                {/* Message brief */}
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    placeholder="Message details..."
                                    className="p-4 w-full rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all resize-none shadow-sm"
                                ></textarea>
                            </div>

                            {/* Center-right Aligned Submit Block */}
                            <div className="flex justify-end pt-2">
                                <Button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="bg-[#09152b] text-white hover:bg-primary text-xs font-black uppercase tracking-wider px-8 rounded-xl h-[50px] transition-all flex items-center space-x-2 border border-transparent hover:shadow-lg shadow-sm group/btn"
                                >
                                    <span>{status === "loading" ? "Submitting..." : "Submit"}</span>
                                    <Send className="size-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
