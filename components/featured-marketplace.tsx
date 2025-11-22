import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Custom Business Cards",
    category: "Printing",
    image: "/branded-pen-corporate-gift.jpg",
    moq: "MOQ: 500 units",
    rating: 4.8,
    reviews: 124,
    leadTime: "3-5 days",
  },
  {
    id: 2,
    name: "Branded T-Shirts",
    category: "Apparel",
    image: "/custom-branded-t-shirts.jpg",
    moq: "MOQ: 100 units",
    rating: 4.9,
    reviews: 89,
    leadTime: "5-7 days",
  },
  {
    id: 3,
    name: "Corporate Notebooks",
    category: "Stationery",
    image: "/custom-notebook-branded.jpg",
    moq: "MOQ: 200 units",
    rating: 4.7,
    reviews: 156,
    leadTime: "4-6 days",
  },
  {
    id: 4,
    name: "USB Flash Drives",
    category: "Tech Accessories",
    image: "/branded-usb-flash-drives.jpg",
    moq: "MOQ: 100 units",
    rating: 4.9,
    reviews: 203,
    leadTime: "7-10 days",
  },
  {
    id: 5,
    name: "Promotional Bags",
    category: "Bags",
    image: "/branded-corporate-bags.jpg",
    moq: "MOQ: 50 units",
    rating: 4.8,
    reviews: 78,
    leadTime: "5-8 days",
  },
  {
    id: 6,
    name: "Coffee Mugs",
    category: "Drinkware",
    image: "/branded-coffee-mugs.jpg",
    moq: "MOQ: 100 units",
    rating: 4.6,
    reviews: 142,
    leadTime: "4-6 days",
  },
  {
    id: 7,
    name: "Promotional Pens",
    category: "Stationery",
    image: "/branded-promotional-pens.jpg",
    moq: "MOQ: 500 units",
    rating: 4.7,
    reviews: 267,
    leadTime: "3-5 days",
  },
  {
    id: 8,
    name: "Corporate Caps",
    category: "Apparel",
    image: "/corporate-branded-caps.jpg",
    moq: "MOQ: 100 units",
    rating: 4.8,
    reviews: 91,
    leadTime: "5-7 days",
  },
]

export function FeaturedMarketplace() {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-text-secondary">
              Browse our most popular bulk production items
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-block text-gold hover:text-gold-dark font-semibold transition-colors"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-border-color"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
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
              <div className="p-5">
                <p className="text-xs text-gold font-semibold mb-1 uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="text-lg font-heading font-bold text-primary mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-charcoal">{product.rating}</span>
                  </div>
                  <span className="text-xs text-text-secondary">({product.reviews} reviews)</span>
                </div>

                {/* MOQ */}
                <div className="mb-4">
                  <p className="text-xs text-text-secondary">{product.moq}</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary hover:bg-primary-light text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-gold hover:bg-gold-light text-primary px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link
            href="/products"
            className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-3 rounded-lg font-heading font-bold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
