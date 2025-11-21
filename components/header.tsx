"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/industries" },
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
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors group whitespace-nowrap ${
                  scrolled ? "text-gray-800 hover:text-gold" : "text-white hover:text-gold"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
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
