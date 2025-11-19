"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Star, Filter, Grid, List, Search } from "lucide-react"

const categories = ["All", "Apparel", "Drinkware", "Stationery", "Bags", "Tech Accessories", "Promotional Items"]

const products = [
  {
    id: 1,
    name: "Custom Business Cards",
    category: "Stationery",
    image: "/branded-pen-corporate-gift.jpg",
    priceRange: "Starting from AED 150",
    moq: "MOQ: 500 units",
    rating: 4.8,
    reviews: 124,
    leadTime: "3-5 days",
    description: "Premium business cards with multiple finish options",
  },
  {
    id: 2,
    name: "Branded T-Shirts",
    category: "Apparel",
    image: "/custom-branded-t-shirts.jpg",
    priceRange: "Starting from AED 25",
    moq: "MOQ: 100 units",
    rating: 4.9,
    reviews: 89,
    leadTime: "5-7 days",
    description: "High-quality cotton t-shirts with custom printing",
  },
  {
    id: 3,
    name: "Corporate Notebooks",
    category: "Stationery",
    image: "/custom-notebook-branded.jpg",
    priceRange: "Starting from AED 12",
    moq: "MOQ: 200 units",
    rating: 4.7,
    reviews: 156,
    leadTime: "4-6 days",
    description: "Professional notebooks with custom cover design",
  },
  {
    id: 4,
    name: "USB Flash Drives",
    category: "Tech Accessories",
    image: "/branded-usb-flash-drives.jpg",
    priceRange: "Starting from AED 18",
    moq: "MOQ: 100 units",
    rating: 4.9,
    reviews: 203,
    leadTime: "7-10 days",
    description: "Custom USB drives with logo engraving",
  },
  {
    id: 5,
    name: "Promotional Bags",
    category: "Bags",
    image: "/branded-corporate-bags.jpg",
    priceRange: "Starting from AED 35",
    moq: "MOQ: 50 units",
    rating: 4.8,
    reviews: 78,
    leadTime: "5-8 days",
    description: "Durable bags with custom branding options",
  },
  {
    id: 6,
    name: "Coffee Mugs",
    category: "Drinkware",
    image: "/branded-coffee-mugs.jpg",
    priceRange: "Starting from AED 15",
    moq: "MOQ: 100 units",
    rating: 4.6,
    reviews: 142,
    leadTime: "4-6 days",
    description: "Ceramic mugs with full-color printing",
  },
  {
    id: 7,
    name: "Promotional Pens",
    category: "Stationery",
    image: "/branded-promotional-pens.jpg",
    priceRange: "Starting from AED 3",
    moq: "MOQ: 500 units",
    rating: 4.7,
    reviews: 267,
    leadTime: "3-5 days",
    description: "Quality pens with custom logo printing",
  },
  {
    id: 8,
    name: "Corporate Caps",
    category: "Apparel",
    image: "/corporate-branded-caps.jpg",
    priceRange: "Starting from AED 22",
    moq: "MOQ: 100 units",
    rating: 4.8,
    reviews: 91,
    leadTime: "5-7 days",
    description: "Premium caps with embroidery options",
  },
  {
    id: 9,
    name: "Branded Lanyards",
    category: "Promotional Items",
    image: "/branded-lanyards.jpg",
    priceRange: "Starting from AED 5",
    moq: "MOQ: 200 units",
    rating: 4.5,
    reviews: 134,
    leadTime: "3-5 days",
    description: "Custom lanyards for events and corporate use",
  },
  {
    id: 10,
    name: "Water Bottles",
    category: "Drinkware",
    image: "/branded-mug-corporate-gift.jpg",
    priceRange: "Starting from AED 28",
    moq: "MOQ: 50 units",
    rating: 4.7,
    reviews: 98,
    leadTime: "5-7 days",
    description: "Insulated bottles with custom branding",
  },
]

export function ProductsMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* View Toggle */}
            <div className="flex gap-2 border border-border-color rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-gold text-primary" : "text-gray-600"}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-gold text-primary" : "text-gray-600"}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gold text-primary"
                    : "bg-muted text-text-secondary hover:bg-gold/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-text-secondary">
            Showing <span className="font-bold text-primary">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          }
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-border-color ${
                viewMode === "list" ? "flex flex-row" : ""
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden bg-gray-100 ${viewMode === "list" ? "w-48" : "h-56"}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gold text-primary text-xs font-bold px-2 py-1 rounded">
                  {product.leadTime}
                </div>
              </div>

              {/* Product Info */}
              <div className={`p-5 ${viewMode === "list" ? "flex-1" : ""}`}>
                <p className="text-xs text-gold font-semibold mb-1 uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="text-lg font-heading font-bold text-primary mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {viewMode === "list" && (
                  <p className="text-sm text-text-secondary mb-3">{product.description}</p>
                )}

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-charcoal">{product.rating}</span>
                  </div>
                  <span className="text-xs text-text-secondary">({product.reviews} reviews)</span>
                </div>

                {/* Price & MOQ */}
                <div className="mb-4">
                  <p className="text-base font-bold text-primary mb-1">{product.priceRange}</p>
                  <p className="text-xs text-text-secondary">{product.moq}</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 bg-primary hover:bg-primary-light text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <button className="bg-gold hover:bg-gold-light text-primary p-2 rounded-lg transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-heading font-semibold transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  )
}
