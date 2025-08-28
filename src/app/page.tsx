import HeroPrime from "@/components/HeroPrime";
import LeatherCard from "@/components/LeatherCard";

export default function Home() {
  return (
    <>
      <HeroPrime />
      {/* Leathers preview */}
      <section className="bg-background">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Leathers</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            A wide range of athletic and casual leathers, crafted for performance, style and consistency.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <LeatherCard
              title="PrimeFlex"
              collection="Athletic"
              type="Calf"
              finish="Matte"
              href="/leathers/primeflex"
              image="https://picsum.photos/seed/primeflex/1200/800"
            />
            <LeatherCard
              title="EcoSoft"
              collection="Casual"
              type="Cow"
              finish="Soft"
              href="/leathers/ecosoft"
              image="https://picsum.photos/seed/ecosoft/1200/800"
            />
            <LeatherCard
              title="TrailGuard"
              collection="Outdoor"
              type="Buffalo"
              finish="Oiled"
              href="/leathers/trailguard"
              image="https://picsum.photos/seed/trailguard/1200/800"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-secondary">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Sustainability</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Consciously Crafted strategy across four pillars: Operational Excellence, Circularity, Climate Action, Social Impact.
          </p>
          {/* TODO: 4 колонки с пиларами */}
        </div>
      </section>

      {/* Brands */}
      <section>
        <div className="container py-16">
          <h3 className="text-xl text-muted-foreground">Trusted by</h3>
          {/* TODO: лого-маркиза Adidas, Nike, Puma, etc. */}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary">
        <div className="container py-16">
          <h2 className="text-3xl md:text-4xl font-semibold">Highlights</h2>
          {/* TODO: 3 карточки с последними постами/новостями */}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-20 text-center">
          <a href="/contact" className="inline-flex px-6 py-4 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
            Contact us
          </a>
        </div>
      </section>
    </>
  );
}
