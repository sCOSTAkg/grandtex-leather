import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function CollectionsPage() {
  const collections = [
    {
      id: 'spring-summer-2027',
      title: 'Spring-Summer 27',
      description: 'From court to commute, SS27 reflects the depth and range of what GRANDTEX does best—crafting versatile leathers that scale with your needs.',
      image: 'https://ext.same-assets.com/1118492138/1829320189.jpeg',
      season: 'Spring-Summer',
      year: '2027',
      isLatest: true,
    },
    {
      id: 'fw26',
      title: 'Fall-Winter 26',
      description: 'Our Fall-Winter 26 collection combines durability with sophistication, offering premium leathers designed for the colder season.',
      image: 'https://ext.same-assets.com/1118492138/68077734.jpeg',
      season: 'Fall-Winter',
      year: '2026',
      isLatest: false,
    },
    {
      id: 'spring-summer-2026',
      title: 'Spring-Summer 26',
      description: 'The Spring-Summer 26 collection showcases lightweight, breathable leathers perfect for warmer weather and outdoor activities.',
      image: 'https://ext.same-assets.com/1118492138/3513175735.jpeg',
      season: 'Spring-Summer',
      year: '2026',
      isLatest: false,
    },
    {
      id: 'fw25',
      title: 'Fall-Winter 25',
      description: 'Our Fall-Winter 25 collection emphasizes rich textures and deep colors, perfect for creating statement pieces in the cooler months.',
      image: 'https://ext.same-assets.com/1118492138/3505676007.jpeg',
      season: 'Fall-Winter',
      year: '2025',
      isLatest: false,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/1829320189.jpeg"
            alt="Leather Collections"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Collections</h1>
            <p className="text-xl max-w-2xl">
              Explore our seasonal leather collections, designed to meet the evolving needs of fashion and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Collection */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-md overflow-hidden">
                <Image
                  src={collections[0].image}
                  alt={collections[0].title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-accent text-white rounded-full text-sm font-medium mb-4">
                Latest Collection
              </div>
              <h2 className="text-4xl font-bold mb-4">{collections[0].title}</h2>
              <p className="text-lg text-gray-700 mb-8">{collections[0].description}</p>
              <p className="mb-8">
                As part of our rebrand, this season marks a renewed commitment to serving brands of every size with precision, purpose, and partnership. Whether you're building high-volume lines or limited-run silhouettes, our products are designed to adapt.
              </p>
              <Link href={`/collections/${collections[0].id}`} className="px-6 py-3 bg-black text-white rounded-full inline-block self-start">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Collections */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Past Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(1).map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{collection.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {collection.season}, {collection.year}
                    </span>
                    <span className="text-accent font-medium group-hover:underline">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Collection Lookbooks</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Download our collection lookbooks for detailed information on leather specifications, colors, and applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-600 mb-4">Lookbook</p>
                <button className="px-4 py-2 bg-black text-white rounded-md text-sm w-full">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team can help you develop custom leather solutions tailored to your specific requirements and brand identity.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-white text-gray-900 rounded-full text-lg inline-block">
            Contact Our Team
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
