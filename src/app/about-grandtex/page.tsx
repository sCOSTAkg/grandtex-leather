import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/1723594169.jpeg"
            alt="About GRANDTEX"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">About GRANDTEX</h1>
            <p className="text-xl max-w-2xl">
              Discover the story behind GRANDTEX, a global leader in leather manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              GRANDTEX was born out of a desire to bridge the traditional leather making process of a decades-old tannery business with the expansion of the footwear industry in Asia.
            </p>

            <p>
              In 1999, two of America's leading tanners partnered with a global footwear manufacturer to establish GRANDTEX, creating a new business model that offered premium quality leather with reliable delivery in footwear manufacturing regions. The business strategy centered on building tanneries that adapted traditional American leather making expertise to meet the quality, cost, and delivery expectations of a rapidly evolving global footwear industry.
            </p>

            <p>
              The foundation of GRANDTEX's culture was built on the combination of American tanning expertise with the most progressive Asian manufacturing practices. This created an environment where traditional craftsmanship merged with modern manufacturing techniques, resulting in innovative and efficient leather production methods.
            </p>

            <p>
              Today, GRANDTEX operates two strategically located tanneries: one in Vietnam to serve the Southeast Asian footwear industry, and another in China serving the domestic Chinese market. Each facility employs skilled workers and maintains the highest quality standards, with a focus on implementing sustainable practices.
            </p>

            <p>
              As we look to the future, GRANDTEX remains committed to innovation, sustainability, and maintaining the highest quality standards in leather production. We continue to invest in new technologies and processes that reduce our environmental impact while enhancing the performance and aesthetics of our leather products.
            </p>
          </div>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To create exceptional leather products through innovative and sustainable practices, serving as a trusted partner to brands around the world.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To lead the leather industry in sustainability, innovation, and quality, setting new standards for responsible manufacturing.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="aspect-square bg-gray-200 rounded-full w-48 h-48 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold">Executive Name</h3>
                  <p className="text-gray-500">Position</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how GRANDTEX can be your partner in creating high-quality, sustainable leather products.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
