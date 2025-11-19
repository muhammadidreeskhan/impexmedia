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
            <img 
              src="/logo1.png" 
              alt="Impex Capital Logo" 
              className="h-30 md:h-40 w-auto object-contain mb-4"
            />
            <p className="text-gray-300 text-sm mb-4">
              A leading provider of bulk production, branding, printing, and media advertising solutions across the UAE. 
              We specialize in high-volume corporate orders, customized branded merchandise, premium print media, and advanced advertising strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-gold transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
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
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Bulk Printing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Corporate Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Promotional Merchandise
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Signage & Banners
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Packaging Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Digital Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+971507766241" className="hover:text-gold transition-colors">
                  +971 50 776 6241
                </a>
              </li>
              <li>
                <a href="mailto:info@impexcapital.ae" className="hover:text-gold transition-colors">
                  info@impexcapital.ae
                </a>
              </li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; {currentYear} Impex Capital Branding & Media House. All rights reserved. Made in Dubai 🇦🇪</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
