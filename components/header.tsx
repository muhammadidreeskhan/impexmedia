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
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-border-color"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Impex Media Home">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <span className="text-white font-heading font-bold text-lg">IM</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-highlight rounded-full animate-pulse"></div>
            </div>
            <span className={`font-heading font-bold text-lg transition-colors hidden sm:inline ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Impex Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors group ${
                  scrolled ? "text-text-secondary hover:text-primary" : "text-white/90 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-magnetic bg-gradient-to-r from-highlight to-yellow-500 hover:from-yellow-500 hover:to-highlight text-primary px-6 py-3 rounded-lg font-heading font-bold transition-all text-sm shadow-lg hover:shadow-xl"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
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
            className="md:hidden pb-4 space-y-2 animate-fade-in-up"
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
              className="block px-4 py-3 bg-gradient-to-r from-highlight to-yellow-500 text-primary rounded-lg font-heading font-bold hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
