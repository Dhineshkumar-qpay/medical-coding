"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Send, User, Mail, Phone, BookOpen, MessageSquare, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { TopBanner } from "./TopBanner";
import LogoImg from "@/assets/app-logo.jpeg";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
    {
        name: "Specialties",
        href: "/specialties",
        dropdown: [
            "Anesthesia",
            "Emergency Medicine",
            "Hospital Medicine",
            "Radiology",
            "Pathology"
        ]
    },
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Why Us", href: "/why-us" },
    { name: "FAQ's", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export function Navbar({ showTopBanner = false }: { showTopBanner?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [enrollStatus, setEnrollStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleEnrollSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnrollStatus("loading");

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
                setEnrollStatus("success");
            } else {
                setEnrollStatus("error");
            }
        } catch (error) {
            setEnrollStatus("error");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 z-50 w-full">
            {showTopBanner && !scrolled && <TopBanner />}
            <nav
                className={cn(
                    "w-full transition-all duration-500 border-b",
                    scrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 border-slate-200/50"
                        : "bg-white/50 backdrop-blur-sm py-5 border-transparent"
                )}
            >
                <Container className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-4 group">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-primary/5 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
                            <div className="relative size-12 bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center p-2 group-hover:shadow-secondary/10 transition-all duration-500">
                                <img
                                    src={LogoImg.src}
                                    alt="ERO Health Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col border-l-2 border-slate-100 pl-4 py-1">
                            <span className="text-xl font-black tracking-tighter text-navy leading-none">
                                ERO <span className="text-primary">HEALTH</span>
                            </span>
                            <div className="flex items-center space-x-2 mt-1.5">
                                <div className="h-0.5 w-3 bg-accent rounded-full" />
                                <span className="text-[7.5px] font-bold tracking-[0.3em] text-slate-500 uppercase leading-none">
                                    Healthcare Innovation
                                </span>
                            </div>
                        </div>
                    </Link>


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <div className="relative flex items-center">
                                        <Link
                                            href={link.href}
                                            className="px-4 py-2 text-[13px] font-bold text-slate-600 hover:text-secondary transition-all duration-300 cursor-pointer uppercase tracking-wider flex items-center"
                                        >
                                            {link.name}
                                            <ChevronDown className="ml-1 size-4 group-hover:rotate-180 transition-transform duration-300" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-2xl py-4 border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[60]">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`/specialties/${item.toLowerCase().replace(" ", "-")}`}
                                                    className="block px-6 py-3 text-sm font-bold text-navy hover:bg-slate-50 hover:text-secondary transition-colors"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="px-4 py-2 text-[13px] font-bold text-slate-600 hover:text-secondary transition-all duration-300 relative group uppercase tracking-wider block"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pl-4 ml-4 border-l border-slate-200">
                            <Button
                                onClick={() => setIsEnrollOpen(true)}
                                className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 py-5 text-xs font-black uppercase tracking-[0.15em] shadow-xl hover:shadow-primary/20 transition-all duration-300"
                            >
                                Enroll Now
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button
                        className="md:hidden p-2 text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </Container>

                {/* Mobile Navigation Drawer */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[80vh]">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div className="space-y-2">
                                            <div className="text-lg font-black text-slate-400 uppercase tracking-widest text-[10px] mb-2">
                                                {link.name}
                                            </div>
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`/specialties/${item.toLowerCase().replace(" ", "-")}`}
                                                    className="block text-xl font-bold text-slate-800 hover:text-secondary py-1"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-xl font-bold text-slate-800 hover:text-secondary border-b border-slate-50 pb-2 block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsEnrollOpen(true);
                                }}
                                className="w-full bg-primary py-6 text-sm font-black uppercase tracking-widest rounded-none"
                            >
                                Enroll Now
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Side Bar Enroll Menu */}
            <AnimatePresence>
                {isEnrollOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsEnrollOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100]"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-[101] overflow-y-auto"
                        >
                            <div className="p-10 space-y-12">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <div className="h-1 w-6 bg-secondary rounded-full" />
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Registration Hub</span>
                                        </div>
                                        <h2 className="text-3xl font-black text-navy tracking-tight">Enrollment <span className="text-secondary">Portal</span></h2>
                                    </div>
                                    <button
                                        onClick={() => setIsEnrollOpen(false)}
                                        className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-navy hover:bg-secondary hover:text-white transition-all transform hover:rotate-90 duration-300"
                                    >
                                        <X className="size-6" />
                                    </button>
                                </div>

                                <div className="space-y-8">
                                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                            "Secure your position in the next cohort of precision medical coding professionals. Complete the institutional brief below."
                                        </p>
                                    </div>

                                    {enrollStatus === "success" ? (
                                        <div className="space-y-6 text-center animate-in zoom-in duration-500">
                                            <div className="size-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                                <CheckCircle className="size-10" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-black text-navy">Application Received</h3>
                                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                                    Your institutional brief has been registered. Our specialists will contact you soon.
                                                </p>
                                            </div>
                                            <Button
                                                onClick={() => {
                                                    setEnrollStatus("idle");
                                                    setIsEnrollOpen(false);
                                                }}
                                                className="w-full bg-navy text-white rounded-none py-6"
                                            >
                                                Close Portal
                                            </Button>
                                        </div>
                                    ) : (
                                        <form className="space-y-6" onSubmit={handleEnrollSubmit}>
                                            <div className="space-y-5">
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                                        <User className="size-4" />
                                                    </div>
                                                    <input
                                                        required
                                                        name="name"
                                                        type="text"
                                                        placeholder="Candidate Full Name"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-2xl font-bold text-navy focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-slate-400"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                                            <Mail className="size-4" />
                                                        </div>
                                                        <input
                                                            required
                                                            name="email"
                                                            type="email"
                                                            placeholder="Primary Email"
                                                            className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-2xl font-bold text-navy focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-slate-400"
                                                        />
                                                    </div>
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                                            <Phone className="size-4" />
                                                        </div>
                                                        <input
                                                            required
                                                            name="phone"
                                                            type="tel"
                                                            placeholder="Contact Node"
                                                            className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-2xl font-bold text-navy focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-slate-400"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                                        <BookOpen className="size-4" />
                                                    </div>
                                                    <select
                                                        required
                                                        name="course"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-2xl font-bold text-navy focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer"
                                                    >
                                                        <option value="">Select Target Specialty</option>
                                                        {navLinks[0].dropdown?.map(item => (
                                                            <option key={item} value={item}>{item}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                                                        <ChevronDown className="size-4" />
                                                    </div>
                                                </div>

                                                <div className="relative group">
                                                    <div className="absolute top-4 left-4 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                                        <MessageSquare className="size-4" />
                                                    </div>
                                                    <textarea
                                                        name="message"
                                                        rows={4}
                                                        placeholder="Program Notes / Background"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-2xl font-bold text-navy focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-slate-400 resize-none"
                                                    />
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={enrollStatus === "loading"}
                                                className="w-full bg-primary text-white py-8 rounded-2xl text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                                            >
                                                <span>{enrollStatus === "loading" ? "Processing..." : "Transmit Application"}</span>
                                                <Send className="ml-3 size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Button>

                                            <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                                By submitting, you agree to the institutional protocols for professional certification training.
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div >
    );
}
