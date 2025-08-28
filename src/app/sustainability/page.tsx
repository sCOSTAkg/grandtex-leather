import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function SustainabilityPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/180971912.jpeg"
            alt="Sustainability"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Sustainability</h1>
            <p className="text-xl max-w-2xl">
              At GRANDTEX, sustainability is at the heart of everything we do. We're committed to creating a more sustainable future for our planet and people.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Sustainability has always been at the heart of GRANDTEX's business. We took our commitment further, setting targets under four pillars: Operational Excellence, Circularity, Climate Action, and Social Impact.
            </p>

            <p>
              Our approach to sustainability is integrated into every aspect of our business, from sourcing raw materials to manufacturing processes and community engagement. We believe that by operating responsibly, we can create value for our customers, employees, communities, and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="operational-excellence" className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Operational Excellence</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="prose prose-lg">
                <p>
                  We're committed to operational excellence in our tanneries, focusing on resource efficiency, waste reduction, and pollution prevention. Our state-of-the-art facilities use advanced technologies to minimize environmental impact while maintaining the highest quality standards.
                </p>

                <ul>
                  <li>Water recycling systems that reduce water consumption by up to 40%</li>
                  <li>Energy-efficient equipment and processes</li>
                  <li>Comprehensive waste management programs</li>
                  <li>Strict adherence to environmental regulations</li>
                </ul>
              </div>
            </div>

            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/2187990376.jpeg"
                alt="Operational Excellence"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="circularity" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Circularity</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="order-2 md:order-1 relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/3191814221.jpeg"
                alt="Circularity"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="prose prose-lg">
                <p>
                  We're embracing circular economy principles by designing products with their full lifecycle in mind. This includes using by-products from other industries, developing biodegradable leathers, and creating upcycling programs.
                </p>

                <ul>
                  <li>Leather scraps repurposed into new products</li>
                  <li>Collaboration with designers on circular design principles</li>
                  <li>Research into biodegradable treatments and finishes</li>
                  <li>Take-back programs for post-consumer leather goods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="climate-action" className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Climate Action</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="prose prose-lg">
                <p>
                  We recognize the urgent need to address climate change and are taking action to reduce our carbon footprint. Our goal is to achieve carbon neutrality across our operations by 2030.
                </p>

                <ul>
                  <li>Renewable energy investments at our tanneries</li>
                  <li>Energy efficiency improvements across our facilities</li>
                  <li>Reduction of transportation emissions in our supply chain</li>
                  <li>Carbon offset programs for unavoidable emissions</li>
                </ul>
              </div>
            </div>

            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/615841938.jpeg"
                alt="Climate Action"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="social-impact" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Social Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="order-2 md:order-1 relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/1359941812.jpeg"
                alt="Social Impact"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="prose prose-lg">
                <p>
                  We're committed to making a positive impact on the communities where we operate. This includes fair labor practices, community development initiatives, and educational programs.
                </p>

                <ul>
                  <li>Safe and healthy working conditions for all employees</li>
                  <li>Fair wages and benefits</li>
                  <li>Diversity and inclusion initiatives</li>
                  <li>Community support programs in areas where we operate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Sustainability Reports</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[2025, 2024, 2023].map((year) => (
              <div key={year} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{year} Sustainability Report</h3>
                <p className="text-gray-600 mb-4">
                  Our annual report detailing our sustainability efforts, achievements, and goals.
                </p>
                <Link href="#" className="text-black font-medium hover:underline">
                  Download PDF
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Sustainability Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn more about our sustainable leather solutions and how we can help you meet your sustainability goals.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
