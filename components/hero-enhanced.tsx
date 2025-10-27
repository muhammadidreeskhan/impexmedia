"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroEnhanced() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-highlight rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-highlight/20 border border-highlight/30 rounded-full text-sm font-medium text-highlight backdrop-blur-sm">
                  Premium Quality Since 2010
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="block animate-gradient bg-gradient-to-r from-white via-highlight to-accent bg-clip-text text-transparent">
                  Impex Media
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-200">
                  Promotional Items LLC
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in-up stagger-1 max-w-xl">
              Your trusted partner for premium corporate gifts, branded merchandise, and customized printing solutions in
              UAE. We deliver quality products with fast turnaround times and exceptional finishing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-2">
              <Link
                href="/products"
                className="group relative btn-magnetic bg-highlight hover:bg-yellow-500 text-primary font-heading font-bold px-8 py-4 rounded-lg transition-all text-center overflow-hidden"
              >
                <span className="relative z-10">Browse Products</span>
              </Link>
              <Link
                href="/contact"
                className="group relative btn-magnetic border-2 border-white hover:bg-white hover:text-primary text-white font-heading font-bold px-8 py-4 rounded-lg transition-all text-center"
              >
                <span className="relative z-10">Get a Quote</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up stagger-3">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-highlight mb-1">500+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-highlight mb-1">10K+</div>
                <div className="text-sm text-gray-300">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-highlight mb-1">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image with 3D Effect */}
          <div className="relative animate-fade-in-up stagger-2 parallax-container">
            <div
              className="relative parallax-layer"
              style={{
                transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-highlight/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>

              {/* Main Image Container */}
              <div className="relative z-10 image-zoom rounded-2xl overflow-hidden shadow-2xl">
                <div className="gradient-border">
                  <div className="gradient-border-content p-0">
                    <img
                      src="/corporate-gifts-branded-merchandise-premium.jpg"
                      alt="Impex Media promotional items and corporate gifts"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-dark p-6 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">ISO Certified</div>
                    <div className="text-sm text-gray-300">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  )
}
