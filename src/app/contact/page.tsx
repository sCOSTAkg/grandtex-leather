import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/271436679.jpeg"
            alt="Contact Us"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl">
              Get in touch with our team to learn more about our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit" className="px-6 py-3 bg-black text-white rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Our Locations</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-2">China</h3>
                <p className="text-gray-600 mb-4">
                  GRANDTEX Leather Co., Ltd.<br />
                  123 Industrial Avenue<br />
                  Guangzhou, China<br />
                  Tel: +86 123 456 7890<br />
                  Email: info.china@grandtex.com
                </p>
                <div className="bg-gray-200 h-48 rounded-md"></div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Vietnam</h3>
                <p className="text-gray-600 mb-4">
                  GRANDTEX Vietnam Co., Ltd.<br />
                  456 Manufacturing Boulevard<br />
                  Ho Chi Minh City, Vietnam<br />
                  Tel: +84 123 456 7890<br />
                  Email: info.vietnam@grandtex.com
                </p>
                <div className="bg-gray-200 h-48 rounded-md"></div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">USA</h3>
                <p className="text-gray-600 mb-4">
                  GRANDTEX America Inc.<br />
                  789 Corporate Plaza<br />
                  Portland, OR 97201, USA<br />
                  Tel: +1 123 456 7890<br />
                  Email: info.usa@grandtex.com
                </p>
                <div className="bg-gray-200 h-48 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How Can We Help You?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Sales Inquiries</h3>
              <p className="text-gray-600 mb-4">
                Interested in our leather products? Our sales team is ready to assist you with product information, samples, and pricing.
              </p>
              <Link href="mailto:sales@grandtex.com" className="text-black font-medium hover:underline">
                sales@grandtex.com
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                Need technical assistance with our products? Our experts are available to answer your questions and provide guidance.
              </p>
              <Link href="mailto:support@grandtex.com" className="text-black font-medium hover:underline">
                support@grandtex.com
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600 mb-4">
                Want to learn more about our sustainability initiatives? Contact our sustainability team for information.
              </p>
              <Link href="mailto:sustainability@grandtex.com" className="text-black font-medium hover:underline">
                sustainability@grandtex.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
