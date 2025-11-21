'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart, Share2, Check, Truck, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const productData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Premium Business Cards',
    category: 'Business Cards',
    rating: 4.8,
    reviews: 2847,
    description: 'High-quality business cards with premium finishes. Perfect for making a lasting impression.',
    features: [
      'Multiple paper stocks available',
      'Various finishing options',
      'Full-color printing',
      'Custom sizes available',
      'Fast turnaround time'
    ],
    specifications: {
      'Material': '350gsm Premium Card Stock',
      'Size': '90mm x 50mm (Standard)',
      'Printing': 'Full Color CMYK',
      'Finishing': 'Matte/Gloss Lamination',
      'Corners': 'Square or Rounded'
    },
    pricingTiers: [
      { quantity: 500, price: 45, unit: 0.09 },
      { quantity: 1000, price: 75, unit: 0.075 },
      { quantity: 2500, price: 165, unit: 0.066 },
      { quantity: 5000, price: 300, unit: 0.06 },
      { quantity: 10000, price: 550, unit: 0.055 }
    ],
    leadTime: '2-3 business days',
    moq: 500,
    images: ['/products/business-cards.jpg', '/products/business-cards-2.jpg']
  }
}

export default function ProductDetail({ productId }: { productId: string }) {
  const product = productData[productId] || productData['1']
  const [quantity, setQuantity] = useState(product.moq)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFinish, setSelectedFinish] = useState('Matte')

  const getCurrentPrice = () => {
    const tier = [...product.pricingTiers].reverse().find(t => quantity >= t.quantity)
    return tier || product.pricingTiers[0]
  }

  const currentTier = getCurrentPrice()
  const totalPrice = (currentTier.unit * quantity).toFixed(2)

  return (
    <div className="container mx-auto px-4 pt-32 pb-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-gold">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-gold">Products</Link>
        <span>/</span>
        <span className="text-gray-900 font-semibold">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-4 shadow-sm">
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <p className="text-gray-600 text-lg font-semibold">{product.name}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            {product.images.map((_: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 bg-white rounded-lg border-2 transition-all ${
                  selectedImage === idx ? 'border-gold' : 'border-gray-200'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">
                  {idx + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span className="text-gold font-semibold text-sm">{product.category}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-900 font-semibold">{product.rating}</span>
            </div>
            <span className="text-gray-600">({product.reviews.toLocaleString()} reviews)</span>
          </div>

          <p className="text-gray-700 text-lg mb-8">{product.description}</p>

          {/* Pricing Calculator */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Calculate Your Price</h3>
            
            <div className="mb-4">
              <label className="text-sm text-gray-400 mb-2 block">Quantity</label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(product.moq, parseInt(e.target.value) || product.moq))}
                min={product.moq}
                className="bg-navy-900/50 border-gold-500/30 text-white"
              />
              <p className="text-xs text-gray-400 mt-1">Minimum order: {product.moq} units</p>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-400 mb-2 block">Finish</label>
              <div className="flex gap-2">
                {['Matte', 'Gloss', 'Soft Touch'].map(finish => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedFinish === finish
                        ? 'bg-gold-500 text-navy-900 font-semibold'
                        : 'bg-navy-900/50 text-gray-300 hover:bg-navy-700/50'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gold-500/20 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Unit Price:</span>
                <span className="text-white font-semibold">AED {currentTier.unit.toFixed(3)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl text-white font-bold">Total Price:</span>
                <span className="text-3xl text-gold-500 font-bold">AED {totalPrice}</span>
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Volume Discounts</h3>
            <div className="space-y-2">
              {product.pricingTiers.map((tier: any) => (
                <div
                  key={tier.quantity}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    quantity >= tier.quantity
                      ? 'bg-gold-500/20 border border-gold-500/50'
                      : 'bg-navy-900/30'
                  }`}
                >
                  <span className="text-white">{tier.quantity}+ units</span>
                  <span className="text-gold-500 font-semibold">AED {tier.unit}/unit</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button className="flex-1 bg-gold-500 hover:bg-gold-600 text-navy-900 h-14 text-lg">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to RFQ Cart
            </Button>
            <Button variant="outline" size="icon" className="h-14 w-14 border-gold-500/50 text-gold-500">
              <Heart className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="icon" className="h-14 w-14 border-gold-500/50 text-gold-500">
              <Share2 className="w-6 h-6" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <Truck className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Fast Delivery</p>
              <p className="text-xs text-gray-500">{product.leadTime}</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Quality Guaranteed</p>
              <p className="text-xs text-gray-500">ISO Certified</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Rush Available</p>
              <p className="text-xs text-gray-500">24-48hr</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Specifications</h3>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-gold-500/10 pb-2">
                  <span className="text-gray-400">{key}:</span>
                  <span className="text-white font-semibold">{value as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
