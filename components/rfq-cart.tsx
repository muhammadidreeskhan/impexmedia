'use client'

import { useState } from 'react'
import { X, Plus, Minus, Trash2, Send, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface RFQItem {
  id: number
  name: string
  category: string
  quantity: number
  specifications: string
  unitPrice: number
}

export default function RFQCart() {
  const [items, setItems] = useState<RFQItem[]>([
    {
      id: 1,
      name: 'Premium Business Cards',
      category: 'Business Cards',
      quantity: 1000,
      specifications: 'Matte finish, 350gsm',
      unitPrice: 0.075
    }
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const estimatedTotal = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0)

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-full p-4 shadow-2xl z-50 transition-all hover:scale-110"
      >
        <div className="relative">
          <FileText className="w-6 h-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </div>
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-md bg-navy-900 shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-navy-800 border-b border-gold-500/20 p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-white">RFQ Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                {items.length} item{items.length !== 1 ? 's' : ''} • {totalItems.toLocaleString()} total units
              </p>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Your RFQ cart is empty</p>
                  <p className="text-gray-500 text-sm mt-2">Add products to request a quote</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="bg-navy-800/50 rounded-lg p-4 border border-gold-500/20">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-400">{item.category}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.specifications}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -100)}
                          className="w-8 h-8 bg-navy-700 hover:bg-navy-600 rounded text-white flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-semibold w-20 text-center">
                          {item.quantity.toLocaleString()}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 100)}
                          className="w-8 h-8 bg-navy-700 hover:bg-navy-600 rounded text-white flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Est. Total</p>
                        <p className="text-gold-500 font-bold">
                          AED {(item.quantity * item.unitPrice).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="bg-navy-800 border-t border-gold-500/20 p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Estimated Total:</span>
                    <span className="text-2xl font-bold text-gold-500">
                      AED {estimatedTotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Final price will be confirmed in your quote
                  </p>
                </div>

                <Button
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 h-12 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowQuoteForm(false)} />
          
          <div className="relative bg-navy-900 rounded-xl border border-gold-500/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Request Quote</h2>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Full Name *</label>
                  <Input
                    type="text"
                    required
                    className="bg-navy-800/50 border-gold-500/30 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Company Name *</label>
                  <Input
                    type="text"
                    required
                    className="bg-navy-800/50 border-gold-500/30 text-white"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email *</label>
                  <Input
                    type="email"
                    required
                    className="bg-navy-800/50 border-gold-500/30 text-white"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Phone *</label>
                  <Input
                    type="tel"
                    required
                    className="bg-navy-800/50 border-gold-500/30 text-white"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Additional Requirements</label>
                <textarea
                  className="w-full bg-navy-800/50 border border-gold-500/30 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500"
                  rows={4}
                  placeholder="Any special requirements or customizations..."
                />
              </div>

              <div className="bg-navy-800/50 rounded-lg p-4 border border-gold-500/20">
                <h3 className="text-white font-semibold mb-3">Quote Summary</h3>
                <div className="space-y-2 text-sm">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-gray-300">
                      <span>{item.name} ({item.quantity} units)</span>
                      <span className="text-gold-500">AED {(item.quantity * item.unitPrice).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-gold-500/20 pt-2 flex justify-between font-bold">
                    <span className="text-white">Estimated Total:</span>
                    <span className="text-gold-500">AED {estimatedTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 h-12 text-lg font-semibold"
              >
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
