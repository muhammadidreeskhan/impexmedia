import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-balance">
              Impex Media
              <span className="block text-3xl md:text-4xl mt-2">Promotional Items LLC</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed text-balance">
              Your trusted partner for premium corporate gifts, branded merchandise, and customized printing solutions in UAE. 
              We deliver quality products with fast turnaround times and exceptional finishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-highlight hover:bg-yellow-500 text-primary font-heading font-bold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-primary text-white font-heading font-bold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/corporate-gifts-branded-merchandise-premium.jpg"
              alt="Impex Media promotional items and corporate gifts"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
