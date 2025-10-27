import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Impex Media</h3>
            <p className="text-gray-300 text-sm mb-4">
              Promotional Items LLC - Your trusted partner for customized printing solutions and branded merchandise in UAE.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-highlight transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-highlight transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-highlight transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-highlight transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-highlight transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-highlight transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-highlight transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-highlight transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-highlight transition-colors">
                  Customized Printing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-highlight transition-colors">
                  Promotional Items
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-highlight transition-colors">
                  Signboards & Displays
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-highlight transition-colors">
                  Branded Merchandise
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+971507766241" className="hover:text-highlight transition-colors">
                  +971 50 776 6241
                </a>
              </li>
              <li>
                <a href="mailto:info@impexmedia.ae" className="hover:text-highlight transition-colors">
                  info@impexmedia.ae
                </a>
              </li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; {currentYear} Impex Media - Promotional Items LLC. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-highlight transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-highlight transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
