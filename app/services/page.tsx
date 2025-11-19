import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Printer, Zap, Gift, Palette, Layers, Smartphone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Services | Impex Capital - Bulk Production & Corporate Branding",
  description:
    "Comprehensive B2B services: bulk printing, corporate branding, promotional merchandise, signage, packaging, digital media, and advertising campaigns.",
  openGraph: {
    title: "B2B Services | Impex Capital Branding & Media House",
    description: "Bulk production and corporate branding solutions for businesses",
    url: "https://impexcapital.ae/services",
  },
}

const services = [
  {
    icon: Printer,
    title: "Printing Service",
    description:
      "Professional Printing delivering vibrant, durable, and high-resolution prints on a wide range of materials.",
    features: ["High-Resolution Prints", "Multiple Materials", "Vibrant Colors", "Durable Quality"],
  },
  {
    icon: Gift,
    title: "Gift Set",
    description:
      "Our customized gift sets are thoughtfully designed to combine style and personalization, making every occasion truly memorable. Perfect for corporate events, birthdays, and special celebrations.",
    features: ["Personalized Design", "Corporate Events", "Special Occasions", "Premium Quality"],
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description:
      "We help your brand shine online with creative content, strategic campaigns, and consistent engagement. Grow your audience, boost visibility, and turn followers into loyal customers.",
    features: ["Creative Content", "Strategic Campaigns", "Audience Growth", "Brand Visibility"],
  },
  {
    icon: Zap,
    title: "SEO",
    description:
      "Our SEO services improve your website's ranking, drive organic traffic, and increase visibility across search engines. We focus on smart strategies that turn clicks into loyal customers.",
    features: ["Ranking Improvement", "Organic Traffic", "Search Visibility", "Smart Strategies"],
  },
  {
    icon: Smartphone,
    title: "Web Development",
    description:
      "We design and develop responsive, user-friendly websites tailored to your business needs. From sleek designs to powerful functionality, we help your brand succeed online.",
    features: ["Responsive Design", "User-Friendly", "Custom Solutions", "Modern Functionality"],
  },
  {
    icon: Printer,
    title: "UV Printing Service",
    description:
      "Professional UV Printing services delivering vibrant, durable, and high-resolution prints on a wide range of materials.",
    features: ["UV Technology", "Vibrant Colors", "Durable Finish", "Multiple Surfaces"],
  },
  {
    icon: Layers,
    title: "3D Printing",
    description:
      "Our 3D printing service brings your ideas to life with precision and creativity. From prototypes to custom designs, we deliver high-quality models tailored to your needs.",
    features: ["Precision Models", "Custom Designs", "Prototyping", "High Quality"],
  },
  {
    icon: Printer,
    title: "Screen Printing",
    description:
      "High-quality Screen Printing service ideal for bold, vibrant designs on fabric, plastic, metal, and more – perfect for bulk branding.",
    features: ["Bold Designs", "Multiple Materials", "Bulk Orders", "Vibrant Results"],
  },
  {
    icon: Printer,
    title: "Digital Printing",
    description:
      "High-resolution Digital Printing services for fast, vibrant, and precise prints on paper, fabric, and various promotional materials.",
    features: ["Fast Turnaround", "High Resolution", "Multiple Materials", "Precise Prints"],
  },
  {
    icon: Palette,
    title: "Customized Shirts",
    description:
      "Our customized shirts blend comfort with style, designed to reflect your unique identity or brand. Perfect for casual wear, events, and corporate promotions.",
    features: ["Custom Designs", "Comfortable Fabric", "Brand Identity", "Event Ready"],
  },
  {
    icon: Gift,
    title: "Customized Bottles",
    description:
      "Our premium bottles are crafted for durability and style, keeping your drinks fresh all day. Perfect for everyday use, travel, or gifting with elegance.",
    features: ["Durable Material", "Stylish Design", "Temperature Control", "Custom Branding"],
  },
  {
    icon: Gift,
    title: "Customized Mugs",
    description:
      "Our custom mugs are designed to add warmth to every sip, combining style with durability. Perfect for daily use, gifting, or showcasing your brand.",
    features: ["Custom Printing", "Durable Ceramic", "Brand Showcase", "Gift Ready"],
  },
  {
    icon: Smartphone,
    title: "Phone Covers",
    description:
      "Protect your device in style with our premium phone covers, designed for durability and a perfect fit. A smart blend of safety, comfort, and modern design.",
    features: ["Perfect Fit", "Durable Protection", "Stylish Design", "Custom Options"],
  },
  {
    icon: Gift,
    title: "Customized Bags",
    description:
      "Our versatile bags are crafted for style and durability, perfect for everyday use or travel. Designed to keep your essentials organized with ease and elegance.",
    features: ["Durable Material", "Stylish Design", "Custom Branding", "Multiple Sizes"],
  },
  {
    icon: Palette,
    title: "Customized Caps",
    description:
      "Our stylish caps combine comfort with durability, making them perfect for daily wear. Ideal for branding, promotions, or simply elevating your casual look.",
    features: ["Comfortable Fit", "Custom Embroidery", "Brand Promotion", "Quality Fabric"],
  },
  {
    icon: Smartphone,
    title: "USB Drives",
    description:
      "Store and transfer your data with ease using our high-quality USB drives. Compact, reliable, and customizable—perfect for personal or corporate use.",
    features: ["High Capacity", "Fast Transfer", "Custom Branding", "Reliable Storage"],
  },
  {
    icon: Palette,
    title: "Metal Pen",
    description:
      "Our elegant metal pens offer a smooth writing experience with a touch of sophistication. Perfect for corporate branding, gifting, or everyday professional use.",
    features: ["Smooth Writing", "Premium Metal", "Custom Engraving", "Professional Look"],
  },
  {
    icon: Gift,
    title: "Customized Notebooks",
    description:
      "Our customized notebooks combine premium quality with a personal touch, perfect for gifting or professional use. Add your logo or design to make every page unique.",
    features: ["Premium Paper", "Custom Cover", "Logo Printing", "Professional Quality"],
  },
  {
    icon: Smartphone,
    title: "Charging Cables",
    description:
      "Our durable charging cables ensure fast and reliable power delivery for all your devices. Built to last with a sleek design that fits your modern lifestyle.",
    features: ["Fast Charging", "Durable Build", "Universal Compatibility", "Sleek Design"],
  },
  {
    icon: Smartphone,
    title: "Wireless Charger",
    description:
      "Experience effortless charging with our sleek wireless chargers designed for speed and convenience. Perfect for modern desks, workspaces, and travel use.",
    features: ["Fast Wireless", "Sleek Design", "Universal Compatible", "Safe Charging"],
  },
]

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
              B2B Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive B2B solutions for bulk production, corporate branding, and media services. Scale meets quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center gap-3">
                        <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors group-hover:gap-3"
                  >
                    Get Started
                    <span>→</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for bulk pricing and custom B2B solutions tailored to your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
