import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

const getCollection = (id: string) => {
  const collections = {
    'spring-summer-2027': {
      id: 'spring-summer-2027',
      title: 'Spring-Summer 27',
      headline: 'Accelerate Ahead',
      description: 'From court to commute, SS27 reflects the depth and range of what GRANDTEX does best—crafting versatile leathers that scale with your needs.',
      longDescription: "As part of our rebrand, this season marks a renewed commitment to serving brands of every size with precision, purpose, and partnership. Whether you're building high-volume lines or limited-run silhouettes, our products are designed to adapt. From smooth full grains to rugged nubucks, each leather is a result of expert craftsmanship and industrial precision—backed by a brand identity built to accelerate ahead. This is GRANDTEX—refreshed, refined, and ready to move with you.",
      season: 'Spring-Summer',
      year: '2027',
      mainImage: 'https://ext.same-assets.com/1118492138/1829320189.jpeg',
      galleryImages: [
        'https://ext.same-assets.com/1118492138/3505676007.jpeg',
        'https://ext.same-assets.com/1118492138/3442149313.jpeg',
        'https://ext.same-assets.com/1118492138/331861169.jpeg',
        'https://ext.same-assets.com/1118492138/3988412587.jpeg',
      ],
      products: [
        {
          id: 'opulent',
          name: 'Opulent',
          type: 'Grain',
          image: 'https://ext.same-assets.com/1118492138/331861169.jpeg',
        },
        {
          id: 'papyrus',
          name: 'Papyrus',
          type: 'Grain',
          image: 'https://ext.same-assets.com/1118492138/3988412587.jpeg',
        },
        {
          id: 'boho',
          name: 'Boho',
          type: 'Grain',
          image: 'https://ext.same-assets.com/1118492138/3513175735.jpeg',
        },
        {
          id: 'sterling',
          name: 'Sterling',
          type: 'Grain',
          image: 'https://ext.same-assets.com/1118492138/3442149313.jpeg',
        },
      ],
      themes: [
        {
          title: 'Natural Versatility',
          description: 'Leathers designed to adapt to multiple applications while maintaining their natural appeal.',
        },
        {
          title: 'Urban Performance',
          description: 'Durable yet refined leathers that stand up to city life without sacrificing style.',
        },
        {
          title: 'Sustainable Luxury',
          description: 'Premium leathers created with environmentally responsible processes.',
        },
      ]
    },
    'fw26': {
      id: 'fw26',
      title: 'Fall-Winter 26',
      headline: 'Enduring Elegance',
      description: 'Our Fall-Winter 26 collection combines durability with sophistication, offering premium leathers designed for the colder season.',
      longDescription: "The Fall-Winter 26 collection draws inspiration from the resilience of nature during winter months. We've developed leathers that provide warmth and protection without compromising on style or flexibility. This season features rich textures, deep tones, and innovative finishes that perform beautifully in challenging conditions. Each leather in the collection has been tested for durability, weather resistance, and comfort, ensuring they meet the demands of both designers and end users.",
      season: 'Fall-Winter',
      year: '2026',
      mainImage: 'https://ext.same-assets.com/1118492138/68077734.jpeg',
      galleryImages: [
        'https://ext.same-assets.com/1118492138/1829320189.jpeg',
        'https://ext.same-assets.com/1118492138/1034291345.jpeg',
        'https://ext.same-assets.com/1118492138/3133292209.jpeg',
        'https://ext.same-assets.com/1118492138/1743258186.jpeg',
      ],
      products: [
        {
          id: 'vortex',
          name: 'Vortex',
          type: 'Nubuck',
          image: 'https://ext.same-assets.com/1118492138/1400919951.jpeg',
        },
        {
          id: 'meridian',
          name: 'Meridian',
          type: 'Split',
          image: 'https://ext.same-assets.com/1118492138/542915801.jpeg',
        },
      ],
      themes: [
        {
          title: 'Winter Resilience',
          description: 'Leathers that maintain their character and performance in cold, wet conditions.',
        },
        {
          title: 'Tactile Depth',
          description: 'Rich textures that add dimension and interest to seasonal designs.',
        },
        {
          title: 'Refined Protection',
          description: 'Elegant finishes with enhanced durability for winter wear.',
        },
      ]
    },
  };

  return collections[id as keyof typeof collections] || null;
};

export default function CollectionDetailPage({ params }: { params: { id: string } }) {
  const collection = getCollection(params.id);

  if (!collection) {
    return (
      <MainLayout>
        <div className="py-40 px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Collection Not Found</h1>
          <p className="mb-8">The collection you're looking for doesn't exist or has been removed.</p>
          <Link href="/collections" className="px-6 py-2 bg-black text-white rounded-full">
            Back to Collections
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] bg-black text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={collection.mainImage}
              alt={collection.title}
              fill
              style={{ objectFit: 'cover', opacity: 0.7 }}
              priority
            />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold mb-2">{collection.title}</h1>
                <h2 className="text-2xl font-light mb-6">{collection.headline}</h2>
                <p className="text-xl">{collection.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Overview */}
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Collection Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p>{collection.longDescription}</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Collection Themes</h3>
                  <div className="space-y-4">
                    {collection.themes.map((theme, index) => (
                      <div key={index} className="bg-gray-50 p-5 rounded-md">
                        <h4 className="text-lg font-bold mb-2">{theme.title}</h4>
                        <p className="text-gray-700">{theme.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="#"
                    className="px-6 py-3 bg-black text-white rounded-full inline-block"
                  >
                    Download Lookbook
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {collection.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative rounded-md overflow-hidden ${
                      index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${collection.title} image ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collection Products */}
        <section className="py-16 px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Leathers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/leathers/${product.id}`}
                  className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.type}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/leathers"
                className="px-6 py-3 border border-black rounded-full inline-block"
              >
                View All Leathers
              </Link>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Applications</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              The {collection.title} collection is designed for versatility across multiple product categories. Here are some key applications for this season's leathers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Footwear', 'Accessories', 'Apparel', 'Home Goods'].map((application, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">{application}</h3>
                  <p className="text-gray-700">
                    Leathers specially developed to excel in {application.toLowerCase()} applications.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in this Collection?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our team to request samples, detailed specifications, or to discuss custom applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-full"
              >
                Request Samples
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white text-white rounded-full"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
