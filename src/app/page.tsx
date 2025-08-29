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
          <h2 className="text-3xl md:text-4xl font-semibold">Collections</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            A curated selection of apparel staples, built for comfort, durability, and style.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="Classic Tee"
              collection="Casual"
              type="Cotton"
              finish="Regular fit"
              href="/collections/classic-tee"
              image="https://picsum.photos/seed/classictee/1200/800"
            />
            <ProductCard
              title="Denim Jacket"
              collection="Denim"
              type="Denim"
              finish="Slim fit"
              href="/collections/denim-jacket"
              image="https://picsum.photos/seed/denimjacket/1200/800"
            />
            <ProductCard
              title="Trail Hoodie"
              collection="Outdoor"
              type="Fleece"
              finish="Relaxed fit"
              href="/collections/trail-hoodie"
              image="https://picsum.photos/seed/trailhoodie/1200/800"
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

