import HeroPrime from "@/components/HeroPrime";
import ProductCard from "@/components/ProductCard";
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
          <h2 className="text-3xl md:text-4xl font-semibold">Продукция</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Широкий выбор спортивных и повседневных изделий, созданных для
            производительности, стиля и стабильности.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="PrimeFlex"
              collection="Athletic"
              type="Calf"
              finish="Matte"
              href="/products/primeflex"
              image="https://picsum.photos/seed/primeflex/1200/800"
            />
            <ProductCard
              title="EcoSoft"
              collection="Casual"
              type="Cow"
              finish="Soft"
              href="/products/ecosoft"
              image="https://picsum.photos/seed/ecosoft/1200/800"
            />
            <ProductCard
              title="TrailGuard"
              collection="Outdoor"
              type="Buffalo"
              finish="Oiled"
              href="/products/trailguard"
              image="https://picsum.photos/seed/trailguard/1200/800"
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

