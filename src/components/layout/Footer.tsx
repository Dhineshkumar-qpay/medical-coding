import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { Globe, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import appLogo from "@/assets/app-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-navy text-white/70 pt-24 pb-12 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Logo & About Node */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <Link
                href="/"
                className="flex items-center space-x-5 text-white group"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative size-12 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={appLogo.src}
                      alt="ERO Health Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col border-l border-white/20 pl-4 py-1.5">
                  <span className="text-xl font-black tracking-tight text-white leading-none">
                    ERO <span className="text-accent">HEALTH</span>
                  </span>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="h-0.5 w-3 bg-secondary rounded-full" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-accent opacity-80">
                      Healthcare Innovation
                    </span>
                  </div>
                </div>
              </Link>

              <p className="text-xs leading-relaxed font-semibold text-white/60 max-w-sm border-l-2 border-accent/30 pl-6 py-1">
                ERO Healthcare Innovation Private Limited is an ISO 9001:2015
                Certified institute specializing in medical coding, medical
                billing, and professional certification training.
              </p>
            </div>
            <div className="flex space-x-4">
              {[
                { icon: Globe, href: "#" },
                { icon: MessageSquare, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-300 group"
                >
                  <social.icon className="size-4 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Nodes */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="h-1 w-6 bg-secondary rounded-full" />
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Policies
              </h3>
            </div>
            <ul className="space-y-4 text-[12px] font-black tracking-widest">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-secondary transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="h-1 w-6 bg-primary rounded-full" />
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Clinical Hub
              </h3>
            </div>
            <ul className="space-y-4 text-[12px] font-black tracking-widest">
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Certification
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Placement Hub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Alumni Node
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Command Center */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="h-1 w-6 bg-accent rounded-full" />
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Global Presence
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin className="size-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-50">
                    Headquarters
                  </p>
                  <p className="text-xs font-bold text-white leading-tight">
                    {SITE_CONFIG.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone className="size-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-50">
                    Career Hotline
                  </p>
                  <p className="text-xs font-bold text-white leading-none">
                    {SITE_CONFIG.contact.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail className="size-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-50">
                    Institutional Email
                  </p>
                  <p className="text-xs font-bold text-white leading-none">
                    {SITE_CONFIG.contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex items-center justify-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-40 text-center">
            © 2026 ERO Healthcare. Redefining Medical Excellence.
          </p>
        </div>
      </Container>
    </footer>
  );
}
