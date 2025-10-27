import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Corporate Bags",
    category: "Bags & Accessories",
    price: "Custom Quote",
    image: "/branded-pen-corporate-gift.jpg",
  },
  {
    id: 2,
    name: "Branded Apparel",
    category: "Clothing",
    price: "Custom Quote",
    image: "/custom-notebook-branded.jpg",
  },
  {
    id: 3,
    name: "Promotional Gifts",
    category: "Corporate Gifts",
    price: "Custom Quote",
    image: "/usb-flash-drive-corporate.jpg",
  },
  {
    id: 4,
    name: "Signboards",
    category: "Signage",
    price: "Custom Quote",
    image: "/branded-mug-corporate-gift.jpg",
  },
  {
    id: 5,
    name: "Printing Services",
    category: "Printing",
    price: "Custom Quote",
    image: "/branded-pen-corporate-gift.jpg",
  },
  {
    id: 6,
    name: "Stationery Items",
    category: "Office Supplies",
    price: "Custom Quote",
    image: "/custom-notebook-branded.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Products</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Wide range of promotional items and branded merchandise for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-accent font-medium mb-2">{product.category}</p>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  <ShoppingCart size={16} />
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-lg font-heading font-bold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
