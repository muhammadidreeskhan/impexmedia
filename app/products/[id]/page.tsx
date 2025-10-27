"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react"

const productDetails = {
  1: {
    name: "Custom Branded T-Shirts",
    category: "Apparel",
    price: "AED 25 - AED 45",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?key=6juni",
    description:
      "Premium quality cotton t-shirts with your custom logo or design. Perfect for corporate events, team building, and promotional campaigns.",
    features: [
      "100% organic cotton",
      "Comfortable fit",
      "Durable printing",
      "Multiple color options",
      "Sizes XS to 3XL",
    ],
    customizationOptions: [
      { name: "Color", options: ["White", "Black", "Navy", "Red", "Gray", "Green"] },
      { name: "Size", options: ["XS", "S", "M", "L", "XL", "2XL", "3XL"] },
      { name: "Print Type", options: ["Screen Print", "Digital Print", "Embroidery"] },
      { name: "Logo Placement", options: ["Front Center", "Left Chest", "Back", "Sleeve"] },
    ],
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productDetails[params.id as keyof typeof productDetails]
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState({
    Color: "White",
    Size: "M",
    "Print Type": "Screen Print",
    "Logo Placement": "Front Center",
  })
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!product) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
            <Link href="/products" className="text-accent hover:text-accent-light">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }))
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-accent hover:text-accent-light">
              Home
            </Link>
            <span className="text-text-secondary">/</span>
            <Link href="/products" className="text-accent hover:text-accent-light">
              Products
            </Link>
            <span className="text-text-secondary">/</span>
            <span className="text-text-secondary">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex flex-col gap-4">
              <div className="bg-muted rounded-lg overflow-hidden h-96 md:h-full flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm text-accent font-medium mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-text-secondary text-sm">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>

                {/* Description */}
                <p className="text-text-secondary mb-8 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-primary mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-secondary">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Customization Options */}
              <div className="space-y-6 border-t border-border-color pt-8">
                <h3 className="font-heading font-bold text-primary text-lg">Customize Your Order</h3>

                {product.customizationOptions.map((option) => (
                  <div key={option.name}>
                    <label className="block text-sm font-medium text-primary mb-3">{option.name}</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {option.options.map((value) => (
                        <button
                          key={value}
                          onClick={() => handleOptionChange(option.name, value)}
                          className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                            selectedOptions[option.name as keyof typeof selectedOptions] === value
                              ? "border-accent bg-accent text-white"
                              : "border-border-color text-text-secondary hover:border-accent"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-3">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 border border-border-color rounded-lg hover:bg-muted transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="text-lg font-bold text-primary w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 border border-border-color rounded-lg hover:bg-muted transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`px-6 py-3 rounded-lg border-2 font-medium transition-colors ${
                      isWishlisted
                        ? "border-accent bg-accent text-white"
                        : "border-border-color text-text-secondary hover:border-accent"
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                  </button>
                  <button
                    className="px-6 py-3 rounded-lg border-2 border-border-color text-text-secondary hover:border-accent transition-colors font-medium"
                    aria-label="Share product"
                  >
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Request Quote */}
                <Link
                  href="/contact"
                  className="block text-center bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 2, name: "Corporate Caps & Hats", price: "From AED 15" },
              { id: 3, name: "Branded Mugs", price: "From AED 12" },
              { id: 4, name: "Custom Notebooks", price: "From AED 8" },
              { id: 5, name: "Branded Pens", price: "From AED 3" },
            ].map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border-color group"
              >
                <div className="bg-muted h-48 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/generic-placeholder-graphic.png?key=${relatedProduct.id}`}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-primary mb-2">{relatedProduct.name}</h3>
                  <p className="text-accent font-medium">{relatedProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
