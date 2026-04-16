import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";

export const metadata = {
    title: "Contact Us | MedCode Institute",
    description: "Get in touch with MedCode Institute for inquiries about medical coding courses and placements.",
};

export default function ContactPage() {
    return (
        <>
            <Navbar showTopBanner={true} />
            <main>
                <BrandedHero
                    title="Get In Touch"
                    subtitle="Have questions? We're here to help. Contact our counselors today for a free career roadmap."
                    image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
                    gifOverlay="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l0HlJzE6o6sZJb8W4/giphy.gif"
                />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
