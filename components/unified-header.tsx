"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Printer, Package, Megaphone, Award, Briefcase, Building2, ShoppingBag, Utensils } from "lucide-react"
import { BurjKhalifaLogoWithText } from "./burj-khalifa-logo"
import { CartButton } from "./cart-button"

// Service categories for mega menu
const servicesMenu = [
  {
    title: 'Printing Services',
    icon: Printer,
    items: [
      { name: 'Bulk Printing', href: '/services/bulk-printing' },
      { name: 'Business Cards', href: '/services/business-cards' },
      { name: 'Brochures & Flyers', href: '/services/brochures' },
      { name: 'Letterheads', href: '/services/letterheads' }
    ]
  },
  {
    title: 'Branding & Design',
    icon: Award,
    items: [
      { name: 'Corporate Branding', href: '/services/corporate-branding' },
      { name: 'Logo Design', href: '/services/logo-design' },
      { name: 'Brand Identity', href: '/services/brand-identity' },
      { name: 'Packaging Design', href: '/services/packaging-design' }
    ]
  },
  {
    title: 'Promotional',
    icon: Megaphone,
    items: [
      { name: 'Promotional Merchandise', href: '/services/promotional' },
      { name: 'Corporate Gifts', href: '/services/corporate-gifts' },
      { name: 'Event Branding', href: '/services/event-branding' },
      { name: 'Advertising Campaigns', href: '/services/advertising' }
    ]
  },
  {
    title: 'Packaging',
    icon: Package,
    items: [
      { name: 'Custom Packaging', href: '/services/custom-packaging' },
      { name: 'Product Boxes', href: '/services/product-boxes' },
      { name: 'Labels & Stickers', href: '/services/labels' },
      { name: 'Shipping Materials', href: '/services/shipping' }
    ]
  }
]

const productsMenu = [
  {
    title: 'Business Essentials',
    items: [
      { name: 'Business Cards', href: '/products/business-cards', popular: true },
      { name: 'Letterheads', href: '/products/letterheads' },
      { name: 'Envelopes', href: '/products/envelopes' },
      { name: 'Folders', href: '/products/folders' }
    ]
  },
  {
    title: 'Marketing Materials',
    items: [
      { name: 'Brochures', href: '/products/brochures', popular: true },
      { name: 'Flyers', href: '/products/flyers' },
      { name: 'Posters', href: '/products/posters' },
      { name: 'Banners', href: '/products/banners' }
    ]
  },
  {
    title: 'Promotional Items',
    items: [
      { name: 'USB Drives', href: '/products/usb-drives', popular: true },
      { name: 'Notebooks', href: '/products/notebooks' },
      { name: 'Pens', href: '/products/pens' },
      { name: 'Tote Bags', href: '/products/tote-bags' }
    ]
  },
  {
    title: 'Packaging',
    items: [
      { name: 'Custom Boxes', href: '/products/custom-boxes' },
      { name: 'Labels', href: '/products/labels' },
      { name: 'Stickers', href: '/products/stickers', popular: true },
      { name: 'Tape', href: '/products/tape' }
    ]
  }
]

const industriesMenu = [
  { name: 'Real Estate', icon: Building2, href: '/industries/real-estate' },
  { name: 'Hospitality', icon: Briefcase, href: '/industries/hospitality' },
  { name: 'Retail & E-commerce', icon: ShoppingBag, href: '/industries/retail' },
  { name: 'F&B', icon: Utensils, href: '/industries/fnb' },
  { name: 'Corporate Events', icon: Award, href: '/industries/corporate-events' },
  { name: 'Government', icon: Building2, href: '/industries/government' }
]

export function UnifiedHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false) // Start with false = dark header
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    // Don't check initial state - start with scrolled = false
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "/services", hasMegaMenu: true },
    { label: "Products", href: "/products", hasMegaMenu: true },
    { label: "Industries", href: "/industries", hasMegaMenu: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-xl border-b border-gray-200"
          : "bg-navy-900 backdrop-blur-lg shadow-lg"
      }`}
      style={!scrolled ? { backgroundColor: 'rgba(10, 26, 47, 0.95)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative z-10" 
            aria-label="Impex Capital Home"
          >
            <BurjKhalifaLogoWithText className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1 rounded-lg ${
                    scrolled 
                      ? "text-gray-700 hover:text-gold hover:bg-gold/5" 
                      : "text-white hover:text-gold hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Mega Menu */}
                {item.hasMegaMenu && activeMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-screen max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-2xl border-2 border-gold/20 p-8 animate-fade-in">
                      {item.label === 'Services' && (
                        <div className="grid grid-cols-4 gap-6">
                          {servicesMenu.map((section) => (
                            <div key={section.title}>
                              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gold/20">
                                <section.icon className="w-5 h-5 text-gold" />
                                <h3 className="font-bold text-navy-900 text-sm">{section.title}</h3>
                              </div>
                              <ul className="space-y-1">
                                {section.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className="text-sm text-gray-700 hover:text-gold hover:bg-gold/5 transition-all block py-2 px-3 rounded-lg font-medium"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.label === 'Products' && (
                        <div className="grid grid-cols-4 gap-6">
                          {productsMenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="font-bold text-navy-900 mb-3 pb-2 border-b border-gold/20 text-sm">{section.title}</h3>
                              <ul className="space-y-1">
                                {section.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className="text-sm text-gray-700 hover:text-gold hover:bg-gold/5 transition-all block py-2 px-3 rounded-lg font-medium flex items-center justify-between"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      <span>{subItem.name}</span>
                                      {subItem.popular && (
                                        <span className="text-xs bg-gold text-white px-2 py-0.5 rounded-full font-bold">Hot</span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.label === 'Industries' && (
                        <div className="grid grid-cols-3 gap-4">
                          {industriesMenu.map((industry) => (
                            <Link
                              key={industry.href}
                              href={industry.href}
                              className="flex items-center gap-3 p-4 rounded-xl hover:bg-gold/5 border-2 border-transparent hover:border-gold/30 transition-all group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <industry.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                              <span className="text-sm font-semibold text-gray-800 group-hover:text-gold">
                                {industry.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Cart & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <CartButton />
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap ${
                scrolled
                  ? "bg-gold text-navy-900 hover:bg-gold-light"
                  : "bg-gold text-navy-900 hover:bg-gold-light"
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="lg:hidden pb-6 space-y-2 animate-fade-in-up border-t border-gold/30 mt-2 pt-4"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-5 py-3.5 rounded-lg transition-all font-semibold text-base ${
                  scrolled
                    ? "text-gray-800 hover:text-gold hover:bg-gold/10"
                    : "text-white hover:bg-white/10 hover:text-gold"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-5 py-4 bg-gold text-navy-900 rounded-lg font-bold hover:bg-gold-light transition-all text-center mt-4 text-base shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
