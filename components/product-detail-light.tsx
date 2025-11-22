'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart, Share2, Check, Truck, Shield, Clock } from 'lucide-react'
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

    leadTime: '2-3 business days',
    moq: 500,
    images: ['/products/business-cards.jpg', '/products/business-cards-2.jpg']
  }
}

export default function ProductDetailLight({ productId }: { productId: string }) {
  const product = productData[productId] || productData['1']
  const [quantity, setQuantity] = useState(product.moq)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFinish, setSelectedFinish] = useState('Matte')

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

          {/* Product Configuration */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Configure Your Order</h3>
            
            <div className="mb-4">
              <label className="text-sm text-gray-700 mb-2 block font-semibold">Quantity</label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(product.moq, parseInt(e.target.value) || product.moq))}
                min={product.moq}
                className="bg-gray-50 border-gray-300 text-gray-900"
              />
              <p className="text-xs text-gray-600 mt-1">Minimum order: {product.moq} units</p>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-700 mb-2 block font-semibold">Finish</label>
              <div className="flex gap-2">
                {['Matte', 'Gloss', 'Soft Touch'].map(finish => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedFinish === finish
                        ? 'bg-gold text-white font-semibold shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600 mb-2">
                Request a custom quote for your specific requirements. Our team will provide competitive pricing based on your order details.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button className="flex-1 bg-gold hover:bg-gold-light text-white h-14 text-lg font-semibold shadow-lg">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart & Request Quote
            </Button>
            <Button variant="outline" size="icon" className="h-14 w-14 border-gold/50 text-gold hover:bg-gold/10">
              <Heart className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="icon" className="h-14 w-14 border-gold/50 text-gold hover:bg-gold/10">
              <Share2 className="w-6 h-6" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <Truck className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="text-sm text-gray-900 font-semibold">Fast Delivery</p>
              <p className="text-xs text-gray-600">{product.leadTime}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="text-sm text-gray-900 font-semibold">Quality Guaranteed</p>
              <p className="text-xs text-gray-600">ISO Certified</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="text-sm text-gray-900 font-semibold">Rush Available</p>
              <p className="text-xs text-gray-600">24-48hr</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h3>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{key}:</span>
                  <span className="text-gray-900 font-semibold">{value as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
