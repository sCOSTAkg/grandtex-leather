import HeroPrime from "@/components/HeroPrime";
import LeatherCard from "@/components/LeatherCard";
import AnimatedSection from "@/components/AnimatedSection";
import SustainabilityPillars from "@/components/SustainabilityPillars";
import LogoMarquee from "@/components/LogoMarquee";
import Highlights from "@/components/Highlights";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <HeroPrime />

      <AnimatedSection className="bg-background">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Products</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            A selection of modern apparel crafted for comfort, style and durability.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <LeatherCard
              title="Classic Tee"
              collection="Лето 27"
              type="Футболки"
              finish="100% хлопок"
              href="/products/classic-tee"
              image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            />
            <LeatherCard
              title="Denim Jacket"
              collection="Осень 26"
              type="Куртки"
              finish="100% хлопок (деним)"
              href="/products/denim-jacket"
              image="https://images.unsplash.com/photo-1520975967284-cf9d0b05a76a?auto=format&fit=crop&w=800&q=80"
            />
            <LeatherCard
              title="Flowy Dress"
              collection="Лето 27"
              type="Платья"
              finish="Вискоза"
              href="/products/flowy-dress"
              image="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </AnimatedSection>

      <SustainabilityPillars />
      <LogoMarquee />
      <Highlights />
      <CTA />
    </>
  );
}

