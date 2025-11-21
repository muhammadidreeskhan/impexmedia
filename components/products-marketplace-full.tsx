'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, Grid3x3, List, Star, ShoppingCart, Heart, CreditCard, Flag, Package, Usb, BookOpen, FileText, Sticker, Shirt, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

// Icon mapping for product categories
const categoryIcons: Record<string, any> = {
  'Business Cards': CreditCard,
  'Banners & Signage': Flag,
  'Packaging': Package,
  'Promotional Items': Usb,
  'Corporate Gifts': BookOpen,
  'Stationery': FileText,
  'Labels & Stickers': Sticker,
  'Apparel': Shirt,
}

const categories = [
  'All Products',
  'Business Cards',
  'Banners & Signage',
  'Packaging',
  'Promotional Items',
  'Corporate Gifts',
  'Stationery',
  'Labels & Stickers',
  'Apparel'
]

const products = [
  {
    id: 1,
    name: 'Premium Business Cards',
    category: 'Business Cards',
    image: '/products/business-cards.jpg',
    rating: 4.8,
    reviews: 2847,
    priceFrom: 45,
    moq: 500,
    leadTime: '2-3 days',
    featured: true
  },
  {
    id: 2,
    name: 'Vinyl Banners',
    category: 'Banners & Signage',
    image: '/products/vinyl-banner.jpg',
    rating: 4.9,
    reviews: 1923,
    priceFrom: 120,
    moq: 1,
    leadTime: '1-2 days',
    featured: true
  },
  {
    id: 3,
    name: 'Custom Packaging Boxes',
    category: 'Packaging',
    image: '/products/packaging-box.jpg',
    rating: 4.7,
    reviews: 1456,
    priceFrom: 850,
    moq: 1000,
    leadTime: '5-7 days',
    featured: false
  },
  {
    id: 4,
    name: 'Branded USB Drives',
    category: 'Promotional Items',
    image: '/products/usb-drives.jpg',
    rating: 4.6,
    reviews: 3241,
    priceFrom: 12,
    moq: 100,
    leadTime: '3-5 days',
    featured: true
  },
  {
    id: 5,
    name: 'Corporate Notebooks',
    category: 'Corporate Gifts',
    image: '/products/notebooks.jpg',
    rating: 4.8,
    reviews: 1876,
    priceFrom: 8,
    moq: 250,
    leadTime: '2-4 days',
    featured: false
  },
  {
    id: 6,
    name: 'Letterhead Printing',
    category: 'Stationery',
    image: '/products/letterhead.jpg',
    rating: 4.9,
    reviews: 2134,
    priceFrom: 95,
    moq: 500,
    leadTime: '1-2 days',
    featured: false
  },
  {
    id: 7,
    name: 'Custom Stickers',
    category: 'Labels & Stickers',
    image: '/products/stickers.jpg',
    rating: 4.7,
    reviews: 4521,
    priceFrom: 35,
    moq: 500,
    leadTime: '1-2 days',
    featured: true
  },
  {
    id: 8,
    name: 'Branded T-Shirts',
    category: 'Apparel',
    image: '/products/tshirts.jpg',
    rating: 4.8,
    reviews: 2987,
    priceFrom: 18,
    moq: 50,
    leadTime: '3-5 days',
    featured: false
  },
  {
    id: 9,
    name: 'Roll-Up Banners',
    category: 'Banners & Signage',
    image: '/products/rollup-banner.jpg',
    rating: 4.9,
    reviews: 1654,
    priceFrom: 180,
    moq: 1,
    leadTime: '2-3 days',
    featured: true
  },
  {
    id: 10,
    name: 'Brochures & Flyers',
    category: 'Stationery',
    image: '/products/brochures.jpg',
    rating: 4.7,
    reviews: 3876,
    priceFrom: 65,
    moq: 500,
    leadTime: '2-3 days',
    featured: false
  },
  {
    id: 11,
    name: 'Branded Pens',
    category: 'Promotional Items',
    image: '/products/pens.jpg',
    rating: 4.6,
    reviews: 5432,
    priceFrom: 2.5,
    moq: 500,
    leadTime: '3-5 days',
    featured: false
  },
  {
    id: 12,
    name: 'Acrylic Signage',
    category: 'Banners & Signage',
    image: '/products/acrylic-sign.jpg',
    rating: 4.9,
    reviews: 876,
    priceFrom: 450,
    moq: 1,
    leadTime: '5-7 days',
    featured: true
  }
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' }
]

export default function ProductsMarketplaceFull() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.priceFrom - b.priceFrom
        case 'price-high':
          return b.priceFrom - a.priceFrom
        case 'rating':
          return b.rating - a.rating
        case 'popular':
          return b.reviews - a.reviews
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="container mx-auto px-4 pt-32 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Products <span className="text-gold">Marketplace</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Browse our extensive catalog of bulk printing and branding solutions
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 h-12 focus:border-gold focus:ring-gold"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gold"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          {/* View Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
              className="h-12 w-12"
            >
              <Grid3x3 className="w-5 h-5" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
              className="h-12 w-12"
            >
              <List className="w-5 h-5" />
            </Button>
          </div>

          {/* Filters Toggle (Mobile) */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-gold text-white font-semibold shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Showing {filteredAndSortedProducts.length} of {products.length} products
              </p>
            </div>
          </div>
        </aside>

        {/* Products Grid/List */}
        <div className="flex-1">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No products found matching your criteria</p>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                : 'space-y-4'
            }>
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, viewMode }: { product: typeof products[0], viewMode: 'grid' | 'list' }) {
  const IconComponent = categoryIcons[product.category] || LayoutGrid
  
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gold hover:shadow-lg transition-all group">
        <div className="flex gap-6">
          <div className="w-48 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gold/5"></div>
            <div className="w-full h-full flex flex-col items-center justify-center text-gold/60 relative z-10">
              <IconComponent className="w-16 h-16 mb-2" />
              <p className="text-xs text-gray-600 text-center px-2 font-semibold">{product.name}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-xs text-gold font-semibold">{product.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{product.name}</h3>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gold">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-gray-900 font-semibold">{product.rating}</span>
              </div>
              <span className="text-gray-500 text-sm">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-600">Starting from</p>
                <p className="text-2xl font-bold text-gold">AED {product.priceFrom}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">MOQ</p>
                <p className="text-lg font-semibold text-gray-900">{product.moq} units</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Lead Time</p>
                <p className="text-lg font-semibold text-gray-900">{product.leadTime}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href={`/products/${product.id}`} className="flex-1">
                <Button className="w-full bg-gold hover:bg-gold-light text-white">
                  View Details
                </Button>
              </Link>
              <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gold hover:shadow-lg transition-all group">
      {product.featured && (
        <div className="bg-gold text-white text-xs font-bold px-3 py-1 text-center">
          FEATURED
        </div>
      )}
      
      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden group-hover:from-gray-100 group-hover:to-gray-50 transition-all">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="w-full h-full flex flex-col items-center justify-center text-gold/60 relative z-10">
          <IconComponent className="w-20 h-20 mb-3 group-hover:scale-110 transition-transform" />
          <p className="text-sm text-gray-600 text-center px-4 font-semibold">{product.name}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 text-gray-600 hover:text-gold hover:bg-white"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-6">
        <span className="text-xs text-gold font-semibold">{product.category}</span>
        <h3 className="text-lg font-bold text-gray-900 mt-1 mb-3">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-gray-900 font-semibold">{product.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Starting from</span>
            <span className="text-gold font-bold">AED {product.priceFrom}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">MOQ</span>
            <span className="text-gray-900 font-semibold">{product.moq} units</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Lead Time</span>
            <span className="text-gray-900 font-semibold">{product.leadTime}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/products/${product.id}`} className="flex-1">
            <Button className="w-full bg-gold hover:bg-gold-light text-white">
              View Details
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="border-gold/50 text-gold hover:bg-gold/10">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
