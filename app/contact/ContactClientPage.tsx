"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          budget: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Request Bulk Quote
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Have a bulk production project in mind? Let's discuss how we can deliver premium quality with fast turnaround times and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Contact Information</h2>
              </div>

              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+971507766241" className="text-gray-600 hover:text-gold transition-colors block">
                    +971 50 776 6241
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:info@impexcapital.ae"
                    className="text-gray-600 hover:text-gold transition-colors block"
                  >
                    info@impexcapital.ae
                  </a>
                  <a
                    href="mailto:sales@impexcapital.ae"
                    className="text-gray-600 hover:text-gold transition-colors block"
                  >
                    sales@impexcapital.ae
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={24} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">Dubai, United Arab Emirates</p>
                  <p className="text-gray-600">Available for meetings by appointment</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-gray-200">
                <h3 className="font-heading font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2 animate-fade-in-up stagger-1">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-10 shadow-xl">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Request Bulk Quote</h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl" role="alert">
                    <p className="text-green-800 font-semibold">
                      ✓ Thank you! Your quote request has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl" role="alert">
                    <p className="text-red-800 font-semibold">
                      ✗ There was an error submitting your request. Please try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="+971 50 XXX XXXX"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="bulk-printing">Bulk Printing</option>
                      <option value="corporate-branding">Corporate Branding</option>
                      <option value="promotional-merchandise">Promotional Merchandise</option>
                      <option value="signage-banners">Signage & Banners</option>
                      <option value="packaging">Packaging Solutions</option>
                      <option value="digital-media">Digital Media Production</option>
                      <option value="event-branding">Event Branding</option>
                      <option value="advertising">Advertising Campaigns</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under AED 5,000</option>
                      <option value="5k-10k">AED 5,000 - 10,000</option>
                      <option value="10k-25k">AED 10,000 - 25,000</option>
                      <option value="25k-50k">AED 25,000 - 50,000</option>
                      <option value="above-50k">Above AED 50,000</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none transition-all"
                      placeholder="Tell us about your project, requirements, and any specific details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-light text-primary px-6 py-4 rounded-xl font-heading font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                  >
                    <Send size={20} />
                    {isSubmitting ? "Sending..." : "Send Quote Request"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


