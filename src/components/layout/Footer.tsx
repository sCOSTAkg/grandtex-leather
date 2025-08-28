import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-medium mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/leathers" className="text-gray-600 hover:text-black">Our Leathers</Link></li>
            <li><Link href="/emboss-perforation" className="text-gray-600 hover:text-black">Emboss & Perforation</Link></li>
            <li><Link href="/why-grandtex" className="text-gray-600 hover:text-black">Why GRANDTEX?</Link></li>
            <li><Link href="/about-grandtex" className="text-gray-600 hover:text-black">About</Link></li>
            <li><Link href="/tanneries" className="text-gray-600 hover:text-black">Tanneries</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Collections</h3>
          <ul className="space-y-2">
            <li><Link href="/collections/spring-summer-2027" className="text-gray-600 hover:text-black">Spring-Summer 27 Collection</Link></li>
            <li><Link href="/collections/fw26" className="text-gray-600 hover:text-black">Fall-Winter 26 Collection</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Sustainability</h3>
          <ul className="space-y-2">
            <li><Link href="/sustainability" className="text-gray-600 hover:text-black">Sustainability</Link></li>
            <li><Link href="/sustainability#operational-excellence" className="text-gray-600 hover:text-black">Operational Excellence</Link></li>
            <li><Link href="/sustainability#circularity" className="text-gray-600 hover:text-black">Circularity</Link></li>
            <li><Link href="/sustainability#climate-action" className="text-gray-600 hover:text-black">Climate Action</Link></li>
            <li><Link href="/sustainability#social-impact" className="text-gray-600 hover:text-black">Social Impact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Information</h3>
          <ul className="space-y-2">
            <li><Link href="/highlights" className="text-gray-600 hover:text-black">Highlights</Link></li>
            <li><Link href="/education" className="text-gray-600 hover:text-black">Education</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-black">Locations</Link></li>
            <li><Link href="/resources" className="text-gray-600 hover:text-black">Resources</Link></li>
          </ul>

          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter to receive the latest updates on products, sustainability efforts and services.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded-md" />
              <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© 2025 GRANDTEX</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="https://www.linkedin.com" className="text-gray-600 hover:text-black">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com" className="text-gray-600 hover:text-black">
            Instagram
          </Link>
          <Link href="/privacy-policy" className="text-gray-600 hover:text-black">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
