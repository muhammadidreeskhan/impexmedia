"use client"

import { useState } from "react"
import { Upload, Send } from "lucide-react"

const services = [
  "Bulk Printing",
  "Corporate Branding",
  "Promotional Merchandise",
  "Signage & Banners",
  "Packaging Solutions",
  "Digital Media Production",
  "Event Branding",
  "Advertising Campaigns",
]

export function BulkQuoteSection() {
  const [formData, setFormData] = useState({
    service: "",
    quantity: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gold/10 via-white to-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
              Get Instant Quote
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Request Bulk Quote
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              Tell us about your project and receive a competitive quote within 24 hours. Our team specializes in bulk orders with flexible pricing tiers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1">Select Your Service</h4>
                  <p className="text-sm text-text-secondary">Choose from our comprehensive range of B2B solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1">Specify Requirements</h4>
                  <p className="text-sm text-text-secondary">Provide quantity, timeline, and project details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1">Receive Quote</h4>
                  <p className="text-sm text-text-secondary">Get competitive pricing within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-border-color">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Service Needed *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 1000 units"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Timeline *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 2 weeks"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
              </div>

              <div className="border-2 border-dashed border-border-color rounded-lg p-6 text-center hover:border-gold transition-colors cursor-pointer">
                <Upload className="mx-auto mb-2 text-text-secondary" size={32} />
                <p className="text-sm text-text-secondary">
                  <span className="text-gold font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-text-secondary mt-1">PDF, PNG, JPG (max. 10MB)</p>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-primary font-heading font-bold px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Get Instant Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
