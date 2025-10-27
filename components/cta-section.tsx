import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-border">
          <div className="bg-gradient-to-br from-[#0f1724] via-[#1a2332] to-[#0f1724] text-white p-12 md:p-16 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white !text-white">
                  Ready to Elevate Your Brand?
                </h2>
                <p className="text-lg text-white mb-8 leading-relaxed !text-white">
                  Get a customized quote for your promotional items and corporate gifts. Our team is ready to bring your vision to life with premium quality and fast turnaround.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn-magnetic bg-highlight hover:bg-yellow-500 text-primary px-8 py-4 rounded-lg font-heading font-bold transition-all inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/products"
                    className="btn-magnetic border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-heading font-bold transition-all inline-flex items-center justify-center gap-2"
                  >
                    View Products
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 text-sm text-white">
                  <a href="tel:+971507766241" className="flex items-center gap-2 text-white hover:text-highlight transition-colors">
                    <Phone size={18} />
                    +971 50 776 6241
                  </a>
                  <a href="mailto:info@impexmedia.ae" className="flex items-center gap-2 text-white hover:text-highlight transition-colors">
                    <Mail size={18} />
                    info@impexmedia.ae
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 animate-fade-in-up stagger-1">
                <div className="glass-dark p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-highlight mb-2">500+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="glass-dark p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-highlight mb-2">10K+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="glass-dark p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-highlight mb-2">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="glass-dark p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-highlight mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
