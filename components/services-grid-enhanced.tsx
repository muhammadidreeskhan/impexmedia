"use client"

import Link from "next/link"
import { Printer, Gift, Palette, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Printer,
    title: "Customized Printing",
    description: "High-quality printing solutions for all your branding needs including digital, offset, and specialty printing.",
    features: ["Digital Printing", "Offset Printing", "Large Format", "Specialty Materials"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Gift,
    title: "Promotional Items",
    description: "Wide range of promotional products and corporate gifts customized with your brand identity.",
    features: ["Corporate Gifts", "Promotional Products", "Custom Packaging", "Bulk Orders"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Signboards & Displays",
    description: "Professional signage solutions including LED boards, flex printing, and display stands.",
    features: ["LED Signage", "Flex Printing", "Display Stands", "3D Letters"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Branded Merchandise",
    description: "Custom branded products including bags, apparel, stationery, and tech accessories.",
    features: ["Branded Apparel", "Tech Accessories", "Stationery", "Bags & Totes"],
    color: "from-green-500 to-emerald-500",
  },
]

export function ServicesGridEnhanced() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card) => observerRef.current?.observe(card))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Complete range of customized printing and promotional solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`service-card card-premium bg-white p-8 rounded-2xl border border-border-color group relative overflow-hidden transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  {/* Decorative Circle */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${service.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text-secondary flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-accent hover:text-accent-light font-medium text-sm transition-all group-hover:translate-x-2"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-colors duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Link
            href="/services"
            className="inline-block btn-magnetic bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-heading font-bold transition-all shadow-lg hover:shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
