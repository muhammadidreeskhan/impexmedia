"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    company: "Dubai Properties",
    role: "Marketing Director",
    content: "Impex Media delivered exceptional quality corporate gifts for our annual event. The attention to detail and fast turnaround exceeded our expectations.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Johnson",
    company: "Emirates Tech Solutions",
    role: "CEO",
    content: "Outstanding service and premium quality products. They transformed our brand identity with their creative solutions and professional approach.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Mohammed Hassan",
    company: "Al Futtaim Group",
    role: "Procurement Manager",
    content: "Reliable partner for all our promotional needs. Consistent quality, competitive pricing, and excellent customer service make them our go-to supplier.",
    rating: 5,
    image: "/placeholder.svg",
  },
]

export function Testimonials() {
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

    const cards = document.querySelectorAll(".testimonial-card")
    cards.forEach((card) => observerRef.current?.observe(card))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-light to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-highlight rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Trusted by leading businesses across UAE for quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`testimonial-card glass-dark p-8 rounded-2xl relative overflow-hidden transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote size={48} className="text-highlight" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-200 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-highlight to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-300">{testimonial.role}</div>
                    <div className="text-xs text-gray-400">{testimonial.company}</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
