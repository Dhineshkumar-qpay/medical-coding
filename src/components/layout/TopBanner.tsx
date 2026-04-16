"use client";

import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, Clock } from "lucide-react";

export function TopBanner() {
    return (
        <div className="bg-slate-900 overflow-hidden relative">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-pulse" />

            <Container className="relative">
                <div className="flex flex-col sm:flex-row justify-between items-center py-2.5 space-y-2 sm:space-y-0 text-[10px] md:text-xs font-medium text-slate-300">
                    {/* Left Side: Contact Info */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 group cursor-pointer hover:text-white transition-colors">
                            <div className="p-1 rounded-md bg-slate-800 group-hover:bg-primary/20 transition-colors">
                                <Phone className="size-3 text-primary" />
                            </div>
                            <span>{SITE_CONFIG.contact.phone}</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-2 group cursor-pointer hover:text-white transition-colors">
                            <div className="p-1 rounded-md bg-slate-800 group-hover:bg-primary/20 transition-colors">
                                <Mail className="size-3 text-primary" />
                            </div>
                            <span>{SITE_CONFIG.contact.email}</span>
                        </div>
                    </div>

                    {/* Right Side: Announcement */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            <span className="text-white font-bold uppercase tracking-wider">Admissions Open 2024-25</span>
                        </div>
                        <div className="h-4 w-px bg-slate-700 hidden sm:block" />
                        <div className="hidden sm:flex items-center space-x-2">
                            <Clock className="size-3 text-primary" />
                            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
