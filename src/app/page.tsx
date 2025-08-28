import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import {
  latestProducts,
  featuredBrands,
  sustainabilityPillars,
} from "@/data/home";

export default function Home() {
  return (
    <MainLayout transparentHeader={true}>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/3414069527.jpeg"
            alt="Leather texture background"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
            className="animate-ken-burns"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-8 pt-40 h-full flex flex-col justify-between pb-32">
          <div className="animate-fade-in">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 animate-reveal">
              Accelerate <br />
              <span className="inline-block mt-2">Ahead.</span>
            </h1>
            <div className="mt-8 max-w-xl">
              <p className="text-xl sm:text-2xl font-medium animate-reveal-delay">
                Your Future-Forward
                <br />
                Tannery Partner.
              </p>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <Link
                href="/about-grandtex"
                className="relative h-40 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] group"
              >
                <Image
                  src="https://ext.same-assets.com/1118492138/1723594169.jpeg"
                  alt="About GRANDTEX"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white font-medium text-xl mb-1 block">
                      About GRANDTEX
                    </span>
                    <p className="text-gray-300 text-sm">
                      Discover our story, values, and vision
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/tanneries"
                className="relative h-40 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] group"
              >
                <Image
                  src="https://ext.same-assets.com/1118492138/3036160331.jpeg"
                  alt="Our Tanneries"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white font-medium text-xl mb-1 block">
                      Our Tanneries
                    </span>
                    <p className="text-gray-300 text-sm">
                      Explore our state-of-the-art facilities
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="/leathers"
                className="px-8 py-3 border border-white text-white rounded-full inline-block hover:bg-white hover:text-black transition-colors duration-300"
              >
                Explore Our Leathers
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Leathers Section */}
      <section className="w-full py-24 px-8 bg-white opacity-0 animate-fade-in-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-scroll">
            <h2 className="text-4xl font-bold mb-4">Latest Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our Spring-Summer 27 collection, featuring premium
              leathers designed for versatility and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/leathers/${product.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.collection}
                  </p>
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Type</span>
                      <span className="text-sm">{product.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Finish</span>
                      <span className="text-sm">{product.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Treatment</span>
                      <span className="text-sm">{product.treatment}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            className="mt-16 text-center opacity-0 animate-fade-in-scroll"
            style={{ animationDelay: "600ms" }}
          >
            <p className="mb-8 text-gray-700 max-w-3xl mx-auto">
              From court to commute, SS27 reflects the depth and range of what
              GRANDTEX does best—crafting versatile leathers that scale with
              your needs. As part of our rebrand, this season marks a renewed
              commitment to serving brands of every size with precision,
              purpose, and partnership.
            </p>
            <Link
              href="/collections/spring-summer-2027"
              className="px-8 py-3 bg-black text-white rounded-full inline-block hover:bg-gray-900 transition-colors"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="w-full py-24 px-8 bg-gray-50 relative overflow-hidden opacity-0 animate-fade-in-scroll">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://ext.same-assets.com/1118492138/180971912.jpeg"
            alt="Sustainability background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="opacity-0 animate-fade-in-scroll">
              <h2 className="text-4xl font-bold mb-6">Sustainability</h2>
              <p className="text-lg text-gray-700 mb-8">
                Sustainability has always been at the heart of GRANDTEX's
                business. We took our commitment further, setting targets under
                four pillars: Operational Excellence, Circularity, Climate
                Action, and Social Impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {sustainabilityPillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="bg-white p-6 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-[1.03] opacity-0 animate-fade-in-scroll"
                    style={{ animationDelay: `${index * 150 + 300}ms` }}
                  >
                    <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/sustainability"
                className="px-8 py-3 bg-black text-white rounded-full inline-block hover:bg-gray-900 transition-colors"
              >
                Learn More About Our Initiatives
              </Link>
            </div>

            <div
              className="relative opacity-0 animate-fade-in-scroll"
              style={{ animationDelay: "600ms" }}
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/180971912.jpeg"
                  alt="Sustainability"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-bold mb-2">Our Commitment</h3>
                <p className="text-gray-700">
                  By 2030, we aim to reduce our water usage by 50%, achieve
                  carbon neutrality, and ensure 100% of our leather waste is
                  recycled or repurposed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full py-24 px-8 bg-white opacity-0 animate-fade-in-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-scroll">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Global Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with brands of all sizes, combining world-class
              craftsmanship with personalized service to deliver exceptional
              leather products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {featuredBrands.map((brand, index) => (
              <div
                key={brand.name}
                className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden group hover:shadow-md transition-all opacity-0 animate-fade-in-scroll"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "cover", opacity: 0.8 }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium">{brand.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-20 bg-gray-900 rounded-2xl p-12 text-white text-center opacity-0 animate-fade-in-scroll"
            style={{ animationDelay: "800ms" }}
          >
            <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the GRANDTEX difference and discover how our premium
              leathers can elevate your products.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-medium inline-block hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
