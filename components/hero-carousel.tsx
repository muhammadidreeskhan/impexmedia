"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Where Creativity Meets Capital Strength",
    subtitle: "Bulk Production. Powerful Branding. Premium Media.",
    description: "A premium Dubai-based agency specializing in bulk production, branding, printing, media, and advertising solutions",
    image: "/corporate-gifts-branded-merchandise-premium.jpg",
    cta1: { text: "Request Bulk Quote", href: "/contact" },
    cta2: { text: "Browse Products", href: "/products" },
  },
  {
    id: 2,
    title: "Building Brands with Precision, Scale & Vision",
    subtitle: "Your Brand. Our Strategy. Maximum Impact.",
    description: "From mass printing to high-level digital campaigns — we combine innovation, precision, and reliability",
    image: "/service_1.webp",
    cta1: { text: "Get Quote", href: "/contact" },
    cta2: { text: "View Services", href: "/services" },
  },
  {
    id: 3,
    title: "Creative Solutions Powered by Capital",
    subtitle: "Branding • Media • Production",
    description: "Professional design, premium materials, strategic advertising, and powerful media production — all under one roof",
    image: "/service_2.webp",
    cta1: { text: "Start Project", href: "/contact" },
    cta2: { text: "Our Portfolio", href: "/portfolio" },
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[600px] md:h-[700px] bg-primary overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-3xl">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight animate-fade-in-up stagger-1">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up stagger-2">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
                <Link
                  href={slide.cta1.href}
                  className="bg-gold hover:bg-gold-light text-primary font-heading font-bold px-8 py-4 rounded-lg transition-all text-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {slide.cta1.text}
                </Link>
                <Link
                  href={slide.cta2.href}
                  className="border-2 border-white hover:bg-white hover:text-primary text-white font-heading font-bold px-8 py-4 rounded-lg transition-all text-center"
                >
                  {slide.cta2.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-gold w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-4">
        <div className="bg-white rounded-lg shadow-2xl p-2 flex items-center gap-2">
          <Search className="text-gray-400 ml-2" size={20} />
          <input
            type="text"
            placeholder="Search for products, services, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 outline-none text-charcoal"
          />
          <button className="bg-gold hover:bg-gold-light text-primary font-bold px-6 py-3 rounded-md transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
