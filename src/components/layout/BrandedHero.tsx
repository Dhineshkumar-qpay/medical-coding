"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface BrandedHeroProps {
    title: string | React.ReactNode;
    subtitle: string;
    image: string;
    gifOverlay?: string;
    isSplit?: boolean;
    height?: string;
    action?: React.ReactNode;
    titleClassName?: string;
}

export function BrandedHero({
    title,
    subtitle,
    image,
    gifOverlay,
    isSplit = false,
    height = "h-[650px] lg:h-[800px]",
    action,
    titleClassName = "text-3xl lg:text-5xl font-black"
}: BrandedHeroProps) {
    return (
        <section className={`relative w-full ${height} overflow-hidden bg-navy flex items-center pt-20`}>
            {/* Base Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Optional Animated GIF Overlay */}
            {gifOverlay && (
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay">
                    <img
                        src={gifOverlay}
                        alt="Animation"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
            )}

            {/* Design Overlays */}
            {isSplit ? (
                <>
                    {/* Diagonal Split Layout (Reference Image Style) */}
                    <div
                        className="absolute inset-0 z-20 bg-gradient-to-r from-primary via-primary/95 to-transparent hidden lg:block"
                        style={{ clipPath: "polygon(0 0, 55% 0, 40% 100%, 0% 100%)" }}
                    />
                    <div className="absolute inset-0 z-20 bg-gradient-to-r from-primary/90 to-primary/40 lg:hidden" />
                </>
            ) : (
                /* Immersive Dark Gradient */
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
            )}

            <Container className="relative z-30">
                <div className={`${isSplit ? "max-w-2xl" : "max-w-4xl mx-auto text-center"} text-white space-y-6`}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`flex items-center space-x-2 text-xs font-extra-bold tracking-[0.3em] uppercase text-primary/80 mb-6 ${!isSplit && "justify-center"}`}>
                            <div className="h-px w-8 bg-primary" />
                            <span>MedCode Global</span>
                        </div>
                        <h1 className={`font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-2xl ${titleClassName}`}>
                            {title}
                        </h1>
                        <p className={`text-lg lg:text-xl text-slate-100/90 leading-relaxed font-medium drop-shadow-md ${!isSplit && "max-w-xl mx-auto"}`}>
                            {subtitle}
                        </p>
                    </motion.div>

                    {action && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="pt-6"
                        >
                            {action}
                        </motion.div>
                    )}
                </div>
            </Container>

            {/* Responsive Branded Border */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-transparent z-40" />
        </section>
    );
}

