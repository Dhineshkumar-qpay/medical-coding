"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Globe, Mail, Phone, MessageSquare } from "lucide-react";
import appLogo from "@/assets/app-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-[#09152b] text-white/75 relative overflow-hidden border-t border-slate-800 flex flex-col w-full">
      
      {/* Abstract Diagonal Vector Geometric Lines Overlay */}
      <svg className="absolute inset-0 size-full pointer-events-none opacity-[0.04]" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none">
        <line x1="5%" y1="0%" x2="75%" y2="100%" />
        <line x1="25%" y1="0%" x2="95%" y2="100%" />
        <line x1="60%" y1="0%" x2="15%" y2="100%" />
        <line x1="85%" y1="0%" x2="40%" y2="100%" />
      </svg>

      {/* Main Grid Content Container */}
      <Container className="max-w-6xl relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Column 1: Identity & Brand Info (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="size-9 rounded-xl overflow-hidden bg-white p-1.5 shadow-md flex items-center justify-center shrink-0">
                <img
                  src={appLogo.src}
                  alt="ERO Healthcare Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-base font-black tracking-widest text-white uppercase leading-none">
                ERO Healthcare
              </span>
            </div>

            <p className="text-xs leading-relaxed font-semibold text-slate-400 max-w-sm">
              Empowering healthcare professionals with advanced clinical billing and coding standardizations to optimize international revenue cycles.
            </p>

            {/* Minimalist Outlined Social Icons */}
            <div className="flex items-center space-x-4 pt-1">
              {[
                { Icon: Globe, href: "#" },
                { Icon: MessageSquare, href: "#" },
                { Icon: Mail, href: "#" },
                { Icon: Phone, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <social.Icon className="size-4" />
                </a>
              ))}
            </div>

            {/* Outlined "BACK TO TOP" Interactive Button */}
            <div className="pt-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center space-x-2 border border-slate-700 hover:border-slate-400 px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all cursor-pointer outline-none"
              >
                <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Column 2: Site Map Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest pl-0.5">
              Site Map
            </h4>
            <div className="h-0.5 w-8 bg-primary rounded-full mb-2" />
            <ul className="space-y-3 text-xs font-semibold text-slate-400">
              {[
                { name: "Homepage", href: "/" },
                { name: "Careers", href: "/career" },
                { name: "Why Us", href: "/why-us" },
                { name: "Contact Us", href: "/contact" },
                { name: "About Us", href: "/about" },
                { name: "FAQ", href: "/faq" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialities Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest pl-0.5">
              Specialities
            </h4>
            <div className="h-0.5 w-8 bg-secondary rounded-full mb-2" />
            <ul className="space-y-3 text-xs font-semibold text-slate-400">
              {[
                { name: "Anesthesia", href: "/specialities/anesthesia" },
                { name: "Emergency Medicine", href: "/specialities/emergency-medicine" },
                { name: "Hospital Medicine", href: "/specialities/hospital-medicine" },
                { name: "Radiology", href: "/specialities/radiology" },
                { name: "Pathology", href: "/specialities/pathology" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal Policy Links (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest pl-0.5">
              Legal
            </h4>
            <div className="h-0.5 w-8 bg-slate-500 rounded-full mb-2" />
            <ul className="space-y-3 text-xs font-semibold text-slate-400">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Services", href: "/terms" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>

      {/* Full-width Accent Golden/Orange Bottom Bar */}
      <div className="bg-stone py-4 px-6 text-center border-t border-slate-800 w-full relative z-10">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white">
          Copyright © 2026 ERO Healthcare. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
