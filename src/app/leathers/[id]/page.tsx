import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

// This would typically come from a database or API
const getLeatherProduct = (id: string) => {
  const products = {
    'opulent': {
      id: 'opulent',
      name: 'Opulent',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Naturally Tumbled',
      treatment: 'Semi-Aniline',
      description: 'Opulent leather brings a rich, sophisticated texture with excellent color depth. Perfect for luxury footwear and accessories that demand both elegance and durability.',
      colors: ['Black', 'Brown', 'Burgundy', 'Navy', 'Olive'],
      thickness: '1.2-1.4mm',
      applications: ['Luxury Footwear', 'Bags', 'Belts', 'Wallets'],
      sustainability: 'Produced using our water-efficient processes, reducing water consumption by 30% compared to traditional methods.',
      images: [
        'https://ext.same-assets.com/1118492138/331861169.jpeg',
        'https://ext.same-assets.com/1118492138/3505676007.jpeg',
        'https://ext.same-assets.com/1118492138/1829320189.jpeg',
      ]
    },
    'papyrus': {
      id: 'papyrus',
      name: 'Papyrus',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Naturally Tumbled',
      treatment: 'Specialty',
      description: 'Papyrus leather offers a distinctive, subtle texture reminiscent of ancient paper. This specialty leather is treated with innovative techniques.',
      colors: ['White', 'Cream', 'Sand', 'Light Gray', 'Natural'],
      thickness: '1.0-1.2mm',
      applications: ['Fashion Footwear', 'Accessories', 'Upholstery Accents'],
      sustainability: 'Processed using our biodegradable tanning agents, minimizing environmental impact.',
      images: [
        'https://ext.same-assets.com/1118492138/3988412587.jpeg',
        'https://ext.same-assets.com/1118492138/3757510803.jpeg',
        'https://ext.same-assets.com/1118492138/3872106694.jpeg',
      ]
    },
    'boho': {
      id: 'boho',
      name: 'Boho',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Embossed',
      treatment: 'Aniline',
      description: 'Boho leather features a distinctive embossed pattern that adds character and visual interest. The aniline treatment allows the natural beauty to shine through.',
      colors: ['Cognac', 'Tan', 'Russet', 'Ochre', 'Dark Brown'],
      thickness: '1.1-1.3mm',
      applications: ['Casual Footwear', 'Bags', 'Belts', 'Furniture'],
      sustainability: 'Sourced from LWG Gold-rated tanneries with full traceability.',
      images: [
        'https://ext.same-assets.com/1118492138/3513175735.jpeg',
        'https://ext.same-assets.com/1118492138/3036160331.jpeg',
        'https://ext.same-assets.com/1118492138/1119344263.jpeg',
      ]
    },
    'sterling': {
      id: 'sterling',
      name: 'Sterling',
      collection: 'Spring-Summer 27',
      type: 'Grain',
      finish: 'Smooth',
      treatment: 'Aniline',
      description: 'Sterling leather boasts a sleek, smooth finish with a subtle natural grain. The aniline treatment enhances its luxurious feel while allowing natural characteristics.',
      colors: ['Silver Gray', 'Platinum', 'Charcoal', 'Blue-Gray', 'Black'],
      thickness: '1.2-1.4mm',
      applications: ['Premium Footwear', 'Luxury Goods', 'Fashion Accessories'],
      sustainability: 'Processed using solar power, reducing carbon footprint by 40%.',
      images: [
        'https://ext.same-assets.com/1118492138/3442149313.jpeg',
        'https://ext.same-assets.com/1118492138/1034291345.jpeg',
        'https://ext.same-assets.com/1118492138/68077734.jpeg',
      ]
    },
  };

  return products[id as keyof typeof products] || null;
};

export default function LeatherDetailPage({ params }: { params: { id: string } }) {
  const product = getLeatherProduct(params.id);

  if (!product) {
    return (
      <MainLayout>
        <div className="py-40 px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The leather product you're looking for doesn't exist or has been removed.</p>
          <Link href="/leathers" className="px-6 py-2 bg-black text-white rounded-full">
            Back to Leathers
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mt-20 pt-8">
        {/* Breadcrumb */}
        <div className="container mx-auto px-8 mb-8">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leathers" className="hover:text-black">Leathers</Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-md overflow-hidden border border-gray-200">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden border border-gray-200">
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.collection} Collection</p>

              <div className="prose max-w-none mb-8">
                <p>{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">TYPE</h3>
                  <p>{product.type}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">FINISH</h3>
                  <p>{product.finish}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">TREATMENT</h3>
                  <p>{product.treatment}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">THICKNESS</h3>
                  <p>{product.thickness}</p>
                </div>

                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">APPLICATIONS</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">AVAILABLE COLORS</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sustainability Info */}
              <div className="bg-gray-50 p-6 rounded-md mb-8">
                <h3 className="text-lg font-medium mb-2">Sustainability</h3>
                <p className="text-gray-700">{product.sustainability}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-black text-white rounded-full"
                >
                  Request Samples
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 border border-black rounded-full"
                >
                  Technical Specifications
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 py-16 px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10">You May Also Like</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(getLeatherProduct('opulent') ? {
                'papyrus': getLeatherProduct('papyrus'),
                'boho': getLeatherProduct('boho'),
                'sterling': getLeatherProduct('sterling'),
                'opulent': getLeatherProduct('opulent'),
              } : {})
                .filter(p => p.id !== params.id)
                .slice(0, 3)
                .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  href={`/leathers/${relatedProduct.id}`}
                  className="group border border-gray-200 bg-white rounded-md overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-500">{relatedProduct.collection} Collection</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
