import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";

export const metadata = {
    title: "Frequently Asked Questions | MedCode Institute",
    description: "Find answers to common questions about medical coding, certifications, and career prospects.",
};

export default function FAQPage() {
    return (
        <>
            <Navbar showTopBanner={true} />
            <main>
                <BrandedHero
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about Medical Coding and our training programs."
                    image="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=2000"
                    gifOverlay="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l0HlJzE6o6sZJb8W4/giphy.gif"
                />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
