import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function TanneriesPage() {
  const tanneries = [
    {
      id: 'vietnam',
      name: 'GRANDTEX Vietnam',
      location: 'Ho Chi Minh City, Vietnam',
      established: 2003,
      size: '45,000 m²',
      capacity: '8 million square feet annually',
      specialties: ['Athletic Footwear Leather', 'Performance Leather', 'Sustainable Processes'],
      description: 'Our flagship facility in Vietnam specializes in high-performance leathers for athletic and lifestyle footwear. Equipped with state-of-the-art machinery and staffed by skilled technicians, this tannery combines traditional craftsmanship with modern manufacturing techniques.',
      sustainability: "The Vietnam facility features a cutting-edge water recycling system that reduces water consumption by 40% compared to conventional tanneries. Solar panels provide 30% of the facility's energy needs.",
      certifications: ['LWG Gold Rated', 'ISO 14001', 'ISO 9001'],
      image: 'https://ext.same-assets.com/1118492138/3036160331.jpeg',
      additionalImages: [
        'https://ext.same-assets.com/1118492138/2874748320.jpeg',
        'https://ext.same-assets.com/1118492138/2563376526.jpeg',
      ]
    },
    {
      id: 'china',
      name: 'GRANDTEX China',
      location: 'Guangzhou, China',
      established: 2005,
      size: '38,000 m²',
      capacity: '6 million square feet annually',
      specialties: ['Fashion Leather', 'Specialty Finishes', 'Embossed Leather'],
      description: 'Our China facility focuses on innovative finishes and fashion-forward leathers. This tannery is known for its versatility and ability to produce smaller batches of specialty leathers with unique characteristics and finishes.',
      sustainability: "The China tannery utilizes a closed-loop production system that minimizes waste and emissions. The facility has reduced chemical usage by 25% through innovative processing techniques.",
      certifications: ['LWG Silver Rated', 'ISO 14001', 'ZDHC Level 3'],
      image: 'https://ext.same-assets.com/1118492138/800804989.jpeg',
      additionalImages: [
        'https://ext.same-assets.com/1118492138/3646578739.jpeg',
        'https://ext.same-assets.com/1118492138/1723594169.jpeg',
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/3036160331.jpeg"
            alt="Our Tanneries"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Our Tanneries</h1>
            <p className="text-xl max-w-2xl">
              Explore our world-class leather manufacturing facilities, where tradition meets innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Global Manufacturing Excellence</h2>

          <div className="prose prose-lg max-w-none text-center mb-12">
            <p>
              GRANDTEX operates strategically located tanneries in key manufacturing regions, combining traditional expertise with cutting-edge technology to produce exceptional leathers for global brands.
            </p>

            <p>
              Our facilities are designed to meet the highest standards of quality, efficiency, and sustainability, ensuring we deliver premium leathers while minimizing our environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">14M+</div>
              <p className="text-gray-700">Square feet of leather produced annually</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">600+</div>
              <p className="text-gray-700">Skilled employees across facilities</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <p className="text-gray-700">Years of manufacturing excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tanneries */}
      {tanneries.map((tannery, index) => (
        <section
          key={tannery.id}
          id={tannery.id}
          className={`py-16 px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={`${index % 2 === 1 ? 'order-2' : ''}`}>
                <h2 className="text-3xl font-bold mb-4">{tannery.name}</h2>
                <p className="text-xl text-gray-600 mb-6">{tannery.location}</p>

                <div className="prose prose-lg max-w-none mb-8">
                  <p>{tannery.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Established</h3>
                    <p className="text-gray-700">{tannery.established}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Facility Size</h3>
                    <p className="text-gray-700">{tannery.size}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Annual Capacity</h3>
                    <p className="text-gray-700">{tannery.capacity}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {tannery.certifications.map((cert, i) => (
                        <span key={i} className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-accent">
                  <h3 className="text-lg font-bold mb-2">Specialties</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {tannery.specialties.map((specialty, i) => (
                      <li key={i}>{specialty}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold mb-2">Sustainability Initiatives</h3>
                  <p className="text-gray-700">{tannery.sustainability}</p>
                </div>
              </div>

              <div className={`space-y-4 ${index % 2 === 1 ? 'order-1' : ''}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={tannery.image}
                    alt={tannery.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {tannery.additionalImages.map((image, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${tannery.name} view ${i + 2}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Manufacturing Process */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Manufacturing Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                step: 1,
                title: 'Raw Material Selection',
                description: 'We source the highest quality hides, prioritizing suppliers who adhere to ethical and sustainable practices.'
              },
              {
                step: 2,
                title: 'Pre-Treatment',
                description: 'Hides undergo careful preparation through soaking, liming, and fleshing to prepare them for tanning.'
              },
              {
                step: 3,
                title: 'Tanning',
                description: 'Using innovative tanning methods that balance traditional techniques with modern, environmentally responsible approaches.'
              },
              {
                step: 4,
                title: 'Post-Tanning',
                description: 'Leathers are re-tanned, colored, and fat-liquored to achieve desired characteristics and performance.'
              },
              {
                step: 5,
                title: 'Finishing',
                description: 'Application of specialized finishes to enhance appearance, durability, and performance characteristics.'
              },
              {
                step: 6,
                title: 'Quality Control',
                description: 'Rigorous testing ensures every piece of leather meets our exacting standards before shipping.'
              },
              {
                step: 7,
                title: 'Cutting & Sorting',
                description: 'Precision cutting and meticulous sorting optimize yield and ensure consistent quality.'
              },
              {
                step: 8,
                title: 'Shipping',
                description: 'Efficient logistics ensure timely delivery to customers around the world.'
              }
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>

                {step.step < 8 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-px bg-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Quality Assurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0M4 12a8 8 0 0 1 16 0M4 12a8 8 0 0 0 16 0M6 12a6 6 0 0 1 12 0M6 12a6 6 0 0 0 12 0M8 12a4 4 0 0 1 8 0M8 12a4 4 0 0 0 8 0M10 12a2 2 0 0 1 4 0M10 12a2 2 0 0 0 4 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Laboratory Testing</h3>
              <p className="text-gray-700">
                Our in-house laboratories conduct rigorous testing for physical properties, chemical composition, and performance characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5v14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inspection Standards</h3>
              <p className="text-gray-700">
                We maintain strict inspection protocols at every stage of production to ensure consistent quality and identify any issues early.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Certification</h3>
              <p className="text-gray-700">
                Our facilities maintain certification to international standards for quality management, environmental performance, and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour CTA */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Facilities</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in touring one of our tanneries? We offer facility tours for customers and partners to experience our manufacturing processes firsthand.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block hover:bg-gray-900 transition-colors">
            Schedule a Tour
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
