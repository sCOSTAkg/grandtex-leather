import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function WhyGrandtexPage() {
  const advantages = [
    {
      title: 'Quality Excellence',
      description: 'Our commitment to quality is unwavering. We combine traditional craftsmanship with modern technology to create leathers that meet the highest standards of performance and aesthetics.',
      icon: '🏆'
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in research and development to create innovative leather solutions that address the evolving needs of our customers and the industry.',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility is at the core of our operations. We develop sustainable practices that minimize our impact while maximizing the quality of our products.',
      icon: '🌱'
    },
    {
      title: 'Global Presence',
      description: 'With strategic locations in key manufacturing regions, we provide efficient service and reliable delivery to customers around the world.',
      icon: '🌎'
    },
    {
      title: 'Customer Focus',
      description: 'We build lasting relationships with our customers through responsive service, collaborative development, and a deep understanding of their unique needs.',
      icon: '👥'
    },
    {
      title: 'Versatility',
      description: 'Our diverse range of leathers caters to multiple applications, from footwear and accessories to upholstery and automotive.',
      icon: '🔄'
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/2560085916.jpeg"
            alt="Why GRANDTEX"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Why GRANDTEX?</h1>
            <p className="text-xl max-w-2xl">
              Discover what sets us apart as your trusted partner in premium leather solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Your Future-Forward Tannery Partner</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              At GRANDTEX, we don't just make leather—we create possibilities. As one of the world's leading tannery groups, we combine centuries-old craftsmanship with cutting-edge innovation to deliver leather products that exceed expectations in quality, sustainability, and performance.
            </p>

            <p>
              What sets us apart is our unique ability to serve brands of all sizes with the same dedication to excellence. Whether you're a global footwear manufacturer producing millions of pairs annually or a boutique brand crafting limited-edition accessories, we bring the same commitment to quality, service, and innovation to every partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The GRANDTEX Advantage</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Expert Team</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Our team brings together leather experts from around the world, combining diverse perspectives and expertise to create exceptional products. From master tanners with decades of experience to innovative chemists and environmental specialists, our professionals collaborate to push the boundaries of what's possible in leather manufacturing.
                </p>

                <p>
                  This blend of traditional knowledge and forward-thinking innovation enables us to address complex challenges, develop custom solutions, and continuously improve our products and processes.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about-grandtex"
                  className="px-6 py-3 border border-black rounded-full inline-block"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/800804989.jpeg"
                  alt="GRANDTEX Expert Team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/3646578739.jpeg"
                  alt="GRANDTEX Technology"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Technology & Innovation</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Our state-of-the-art facilities combine traditional tanning techniques with the latest technological innovations. This unique approach allows us to maintain the artisanal quality of our leathers while achieving consistency, efficiency, and sustainability at scale.
                </p>

                <p>
                  We invest continuously in research and development, collaborating with leading institutions and technology partners to pioneer new processes, materials, and applications. From water-saving technologies to innovative finishing techniques, our commitment to advancement drives everything we do.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/tanneries"
                  className="px-6 py-3 border border-black rounded-full inline-block"
                >
                  Explore Our Facilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Centric Approach */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Customer-Centric Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Understand</h3>
              <p className="text-gray-700">
                We take the time to truly understand your needs, challenges, and vision, building a foundation for successful collaboration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Collaborate</h3>
              <p className="text-gray-700">
                Our team works closely with yours, combining expertise to develop solutions that address your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Deliver</h3>
              <p className="text-gray-700">
                We execute with precision, providing high-quality leathers on time and to specification, with reliable support throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Partners Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-2xl text-accent mb-4">"</div>
              <p className="text-lg mb-6">
                GRANDTEX consistently delivers exceptional leather that meets our exacting standards. Their technical expertise and collaborative approach have made them an invaluable partner in our product development process.
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-gray-400">Materials Director, Global Footwear Brand</p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-2xl text-accent mb-4">"</div>
              <p className="text-lg mb-6">
                As a boutique manufacturer, we appreciate GRANDTEX's willingness to work with smaller order quantities while maintaining the same level of quality and service they provide to larger brands.
              </p>
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-gray-400">Founder, Artisanal Leather Goods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the GRANDTEX Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your leather needs and discover how we can help you achieve your goals.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
