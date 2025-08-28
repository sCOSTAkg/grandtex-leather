import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function LeathersPage() {
  // Sample leather products data
  const leatherProducts = [
    {
      id: 'opulent',
      name: 'Opulent',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Naturally Tumbled',
      treatment: 'Semi-Aniline',
      image: 'https://ext.same-assets.com/1118492138/331861169.jpeg',
    },
    {
      id: 'papyrus',
      name: 'Papyrus',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Naturally Tumbled',
      treatment: 'Specialty',
      image: 'https://ext.same-assets.com/1118492138/3988412587.jpeg',
    },
    {
      id: 'boho',
      name: 'Boho',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Embossed',
      treatment: 'Aniline',
      image: 'https://ext.same-assets.com/1118492138/3513175735.jpeg',
    },
    {
      id: 'sterling',
      name: 'Sterling',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Smooth',
      treatment: 'Aniline',
      image: 'https://ext.same-assets.com/1118492138/3442149313.jpeg',
    },
    {
      id: 'vortex',
      name: 'Vortex',
      collection: 'Fall-Winter 26',
      type: 'Nubuck',
      finish: 'Embossed',
      treatment: 'Waxed',
      image: 'https://ext.same-assets.com/1118492138/1400919951.jpeg',
    },
    {
      id: 'meridian',
      name: 'Meridian',
      collection: 'Fall-Winter 26',
      type: 'Split',
      finish: 'Naturally Tumbled',
      treatment: 'Specialty',
      image: 'https://ext.same-assets.com/1118492138/542915801.jpeg',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/3442149313.jpeg"
            alt="Our Leathers"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Our Leathers</h1>
            <p className="text-xl max-w-2xl">
              Discover our premium leather products, crafted with expertise and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                <option>All Collections</option>
                <option>Spring-Summer 27</option>
                <option>Fall-Winter 26</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                <option>All Types</option>
                <option>Grain</option>
                <option>Nubuck</option>
                <option>Split</option>
                <option>Lining</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                <option>All Treatments</option>
                <option>Aniline</option>
                <option>Semi-Aniline</option>
                <option>Specialty</option>
                <option>Waxed</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                <option>Newest</option>
                <option>Name (A-Z)</option>
                <option>Collection</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leatherProducts.map((product) => (
              <Link
                key={product.id}
                href={`/leathers/${product.id}`}
                className="group border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.collection} Collection</p>

                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    <div>
                      <span className="text-xs font-medium text-gray-500">TYPE</span>
                      <p className="text-sm">{product.type}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">FINISH</span>
                      <p className="text-sm">{product.finish}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">TREATMENT</span>
                      <p className="text-sm">{product.treatment}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Request Samples CTA */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request Samples</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in our leather products? Request physical samples to experience the quality firsthand.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
