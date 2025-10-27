"use client"

import Link from "next/link"
import { ShoppingCart, Star, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    id: 1,
    name: "Corporate Bags",
    category: "Bags & Accessories",
    price: "Custom Quote",
    image: "/branded-pen-corporate-gift.jpg",
    badge: "Popular",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Branded Apparel",
    category: "Clothing",
    price: "Custom Quote",
    image: "/custom-notebook-branded.jpg",
    badge: "New",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Promotional Gifts",
    category: "Corporate Gifts",
    price: "Custom Quote",
    image: "/usb-flash-drive-corporate.jpg",
    badge: "Trending",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Signboards",
    category: "Signage",
    price: "Custom Quote",
    image: "/branded-mug-corporate-gift.jpg",
    badge: "Popular",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Printing Services",
    category: "Printing",
    price: "Custom Quote",
    image: "/branded-pen-corporate-gift.jpg",
    badge: "Hot",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Stationery Items",
    category: "Office Supplies",
    price: "Custom Quote",
    image: "/custom-notebook-branded.jpg",
    badge: "Popular",
    rating: 4.6,
  },
]

const badgeColors: Record<string, string> = {
  Popular: "bg-blue-500",
  New: "bg-green-500",
  Trending: "bg-purple-500",
  Hot: "bg-red-500",
}

export function FeaturedProductsEnhanced() {
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

    const cards = document.querySelectorAll(".product-card")
    cards.forEach((card) => observerRef.current?.observe(card))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-highlight/10 border border-highlight/20 rounded-full text-sm font-medium text-highlight mb-4">
            Featured Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Wide range of promotional items and branded merchandise for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={product.id}
                data-index={index}
                className={`product-card card-premium bg-white rounded-2xl overflow-hidden border border-border-color group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 z-10 ${badgeColors[product.badge]} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg`}>
                    <TrendingUp size={12} />
                    {product.badge}
                  </div>

                  {/* Image with Zoom Effect */}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Link
                        href={`/products/${product.id}`}
                        className="w-full bg-white text-primary px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 hover:bg-highlight hover:text-white"
                      >
                        <ShoppingCart size={16} />
                        Quick View
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <p className="text-sm text-accent font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {product.category}
                  </p>

                  {/* Product Name */}
                  <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-text-secondary">({product.rating})</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-accent hover:bg-accent-light text-white p-2 rounded-lg transition-all inline-flex items-center justify-center group-hover:scale-110"
                      aria-label={`View ${product.name}`}
                    >
                      <ShoppingCart size={18} />
                    </Link>
                  </div>
                </div>

                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <Link
            href="/products"
            className="inline-block btn-magnetic bg-gradient-to-r from-accent to-accent-light text-white px-10 py-4 rounded-lg font-heading font-bold transition-all shadow-lg hover:shadow-2xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
