"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const faqs = [
    {
        question: "What is the eligibility for the CPC course?",
        answer: "Any graduate (Life Science or Non-Life Science) or healthcare professional can apply. A basic understanding of human anatomy and physiology is helpful but covered in our foundation module.",
    },
    {
        question: "Do you provide online or offline training?",
        answer: "We offer both! You can choose our interactive live online sessions or attend classes at our state-of-the-art training centers. Both formats follow the same curriculum and provide the same certification support.",
    },
    {
        question: "Is the exam fee included in the course fee?",
        answer: "No, the AAPC exam fee is separate from the training fee. However, we provide guidance on exam scheduling and often have exclusive partner discounts for our students.",
    },
    {
        question: "What kind of placement assistance do you provide?",
        answer: "We have a dedicated placement cell that helps with resume building, mock interviews, and scheduled interviews with our 50+ hiring partners in the healthcare IT sector.",
    },
    {
        question: "How long does it take to become a certified coder?",
        answer: "Typically, our intensive CPC training takes 4 months. This includes foundation training, core coding, and exam preparation with mock tests.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-primary font-bold tracking-wider uppercase text-xs">FAQ</h2>
                    <h3 className="text-3xl font-extrabold tracking-tight">Got Questions? We Have Answers</h3>
                    <p className="text-base text-muted">
                        Frequently asked questions about our medical coding programs and placement process.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                        <HelpCircle className="size-5" />
                                    </div>
                                    <span className="text-base font-bold text-slate-900">{faq.question}</span>
                                </div>
                                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}>
                                    {openIndex === index ? <Minus className="size-5 text-primary" /> : <Plus className="size-5 text-muted" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-6 ml-12 text-muted text-sm leading-relaxed border-t border-slate-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
