'use client'

import { Check, Clock, DollarSign, Users, ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'

const serviceData: Record<string, any> = {
  'bulk-printing': {
    title: 'Bulk Printing Services',
    subtitle: 'High-volume printing solutions for businesses',
    description: 'Professional bulk printing services with competitive pricing for large orders. Perfect for businesses needing consistent quality at scale.',
    features: [
      'High-speed digital and offset printing',
      'Volume discounts on large orders',
      'Consistent quality across all units',
      'Multiple paper stocks and finishes',
      'Fast turnaround times',
      'Dedicated account manager'
    ],
    process: [
      { step: 1, title: 'Submit Requirements', description: 'Share your specifications and quantity needs' },
      { step: 2, title: 'Get Quote', description: 'Receive detailed pricing within 24 hours' },
      { step: 3, title: 'Approve Design', description: 'Review and approve digital proofs' },
      { step: 4, title: 'Production', description: 'We print your order with quality checks' },
      { step: 5, title: 'Delivery', description: 'Fast delivery to your location' }
    ],
    materials: [
      { name: '80gsm Bond Paper', price: 'From AED 0.05/sheet' },
      { name: '100gsm Art Paper', price: 'From AED 0.08/sheet' },
      { name: '150gsm Glossy', price: 'From AED 0.12/sheet' },
      { name: '250gsm Card Stock', price: 'From AED 0.20/sheet' },
      { name: '350gsm Premium', price: 'From AED 0.35/sheet' }
    ],
    applications: [
      'Business cards',
      'Brochures and flyers',
      'Catalogs and magazines',
      'Marketing materials',
      'Corporate stationery',
      'Event materials'
    ],
    leadTime: '3-7 business days',
    moq: '500 units'
  },
  'corporate-branding': {
    title: 'Corporate Branding Services',
    subtitle: 'Complete brand identity solutions',
    description: 'Comprehensive corporate branding services to establish and strengthen your business identity across all touchpoints.',
    features: [
      'Brand strategy development',
      'Logo design and refinement',
      'Brand guidelines creation',
      'Marketing collateral design',
      'Digital and print assets',
      'Brand consistency management'
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand your business and goals' },
      { step: 2, title: 'Strategy', description: 'Develop brand positioning and messaging' },
      { step: 3, title: 'Design', description: 'Create visual identity elements' },
      { step: 4, title: 'Guidelines', description: 'Document brand standards' },
      { step: 5, title: 'Implementation', description: 'Apply across all materials' }
    ],
    materials: [],
    applications: [
      'Logo and visual identity',
      'Business cards and stationery',
      'Marketing materials',
      'Signage and environmental graphics',
      'Digital assets',
      'Packaging design'
    ],
    leadTime: '2-4 weeks',
    moq: 'Project-based'
  }
}

export default function ServiceDetail({ serviceSlug }: { serviceSlug: string }) {
  const service = serviceData[serviceSlug] || serviceData['bulk-printing']
  const [quantity, setQuantity] = useState(1000)

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gold-500">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold-500">Services</Link>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-2xl text-gold-500 mb-6">{service.subtitle}</p>
          <p className="text-xl text-gray-300 max-w-3xl">{service.description}</p>
        </div>

        {/* Key Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-6">
            <Clock className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Lead Time</h3>
            <p className="text-gray-300">{service.leadTime}</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-6">
            <Users className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Minimum Order</h3>
            <p className="text-gray-300">{service.moq}</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-6">
            <DollarSign className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Pricing</h3>
            <p className="text-gray-300">Volume-based discounts</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step: any) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials (if applicable) */}
            {service.materials.length > 0 && (
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Material Options</h2>
                <div className="space-y-3">
                  {service.materials.map((material: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-navy-900/50 rounded-lg">
                      <span className="text-white font-semibold">{material.name}</span>
                      <span className="text-gold-500 font-bold">{material.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {service.applications.map((app: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-navy-900/50 rounded-lg">
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                    <span className="text-gray-300">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Quote Calculator */}
          <div className="lg:col-span-1">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-gold-500" />
                <h3 className="text-2xl font-bold text-white">Get a Quote</h3>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Service Type</label>
                  <Input
                    type="text"
                    value={service.title}
                    disabled
                    className="bg-navy-900/50 border-gold-500/30 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Quantity</label>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    className="bg-navy-900/50 border-gold-500/30 text-white"
                    placeholder="Enter quantity"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
                  <Input
                    type="text"
                    className="bg-navy-900/50 border-gold-500/30 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email</label>
                  <Input
                    type="email"
                    className="bg-navy-900/50 border-gold-500/30 text-white"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    className="bg-navy-900/50 border-gold-500/30 text-white"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Additional Details</label>
                  <textarea
                    className="w-full bg-navy-900/50 border border-gold-500/30 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500"
                    rows={3}
                    placeholder="Any specific requirements..."
                  />
                </div>

                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 h-12 text-lg font-semibold">
                  Request Quote
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gold-500/20">
                <p className="text-sm text-gray-400 text-center">
                  Need help? <Link href="/contact" className="text-gold-500 hover:underline">Contact us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
