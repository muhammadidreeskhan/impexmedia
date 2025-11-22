"use client"

import { useCart } from '@/contexts/CartContext'
import { ShoppingCart } from 'lucide-react'

export function CartButton() {
  const { itemCount, openCart } = useCart()

  return (
    <button
      onClick={openCart}
      className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Open cart"
    >
      <ShoppingCart size={24} className="text-gray-700" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-gold text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </button>
  )
}
