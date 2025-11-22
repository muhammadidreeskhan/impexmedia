"use client"

import { useCart } from '@/contexts/CartContext'
import { X, Trash2, ShoppingCart, Send } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function CartSidebar() {
  const { items, removeFromCart, updateQuantity, updateNotes, clearCart, isOpen, closeCart, itemCount } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmitQuote = async () => {
    setIsSubmitting(true)
    
    // Simulate API call - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitSuccess(true)
    setTimeout(() => {
      setSubmitSuccess(false)
      clearCart()
      closeCart()
    }, 2000)
    
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-gold" size={24} />
            <div>
              <h2 className="text-xl font-heading font-bold text-primary">RFQ Cart</h2>
              <p className="text-sm text-gray-500">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto text-gray-300 mb-4" size={64} />
              <p className="text-gray-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-400">Add products to request a quote</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex gap-3 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-primary text-sm mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">{item.category}</p>
                      <p className="text-xs text-gray-500">{item.moq}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">Quantity</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">Notes (optional)</label>
                      <textarea
                        value={item.notes || ''}
                        onChange={(e) => updateNotes(item.id, e.target.value)}
                        placeholder="Specifications, colors, etc."
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-3">
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-700 font-semibold mb-1">Quote Request Sent!</p>
                <p className="text-sm text-green-600">We'll contact you shortly</p>
              </div>
            ) : (
              <>
                <Link
                  href="/contact?cart=true"
                  onClick={closeCart}
                  className="w-full bg-gold hover:bg-gold-light text-primary font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Request Quote
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full border-2 border-gray-300 hover:border-red-500 hover:text-red-500 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all"
                >
                  Clear Cart
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Add your contact details on the next page to receive your quote
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}
