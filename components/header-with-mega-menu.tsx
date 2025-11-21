"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Printer, Package, Megaphone, Award, Briefcase, Building2, ShoppingBag, Utensils } from "lucide-react"

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

export function HeaderWithMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "/services", hasMegaMenu: true },
    { label: "Products", href: "/products", hasMegaMenu: true },
    { label: "Industries", href: "/industries", hasMegaMenu: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-border-color"
          : "bg-navy-900/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Impex Capital Home">
            <img 
              src="/logo1.png" 
              alt="Impex Capital Logo" 
              className="h-24 md:h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors group flex items-center gap-1 whitespace-nowrap ${
                    scrolled ? "text-gray-800 hover:text-gold" : "text-white hover:text-gold"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown className="w-4 h-4" />}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Mega Menu */}
                {item.hasMegaMenu && activeMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-5xl z-50">
                    <div className="bg-white rounded-xl shadow-2xl border-2 border-gold/30 p-8 animate-fade-in">
                      {item.label === 'Services' && (
                        <div className="grid grid-cols-4 gap-8">
                          {servicesMenu.map((section) => (
                            <div key={section.title}>
                              <div className="flex items-center gap-2 mb-4">
                                <section.icon className="w-6 h-6 text-gold" />
                                <h3 className="font-bold text-navy-900 text-base">{section.title}</h3>
                              </div>
                              <ul className="space-y-2">
                                {section.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className="text-sm text-gray-800 hover:text-gold hover:bg-gold/10 transition-all block py-2 px-2 rounded"
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
                        <div className="grid grid-cols-4 gap-8">
                          {productsMenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="font-bold text-navy-900 mb-4 text-base">{section.title}</h3>
                              <ul className="space-y-2">
                                {section.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className="text-sm text-gray-800 hover:text-gold hover:bg-gold/10 transition-all block py-2 px-2 rounded flex items-center gap-2"
                                    >
                                      {subItem.name}
                                      {subItem.popular && (
                                        <span className="text-xs bg-gold/30 text-gold font-semibold px-2 py-0.5 rounded">Popular</span>
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
                        <div className="grid grid-cols-3 gap-6">
                          {industriesMenu.map((industry) => (
                            <Link
                              key={industry.href}
                              href={industry.href}
                              className="flex items-center gap-3 p-4 rounded-lg hover:bg-gold/10 border border-transparent hover:border-gold/30 transition-all group"
                            >
                              <industry.icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-magnetic bg-gold hover:bg-gold-light text-navy-900 px-6 py-3 rounded-lg font-heading font-bold transition-all text-sm shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Request Bulk Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-primary hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="lg:hidden pb-4 space-y-2 animate-fade-in-up"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-all animate-fade-in-up ${
                  scrolled
                    ? "text-text-secondary hover:text-primary hover:bg-muted"
                    : "text-white hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-3 bg-gradient-to-r from-gold to-gold-light text-primary rounded-lg font-heading font-bold hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
              onClick={() => setIsOpen(false)}
            >
              Request Bulk Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
