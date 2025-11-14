'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            FASHION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-gray-900 transition">
              商品
            </Link>
            <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900 transition">
              新品
            </Link>
            <Link href="/sale" className="text-gray-700 hover:text-gray-900 transition">
              促销
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 transition"
              aria-label="搜索"
            >
              <Search size={20} />
            </button>
            <Link
              href="/cart"
              className="p-2 text-gray-700 hover:text-gray-900 transition relative"
              aria-label="购物车"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              href="/login"
              className="p-2 text-gray-700 hover:text-gray-900 transition"
              aria-label="用户"
            >
              <User size={20} />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition"
              aria-label="菜单"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in">
            <input
              type="text"
              placeholder="搜索商品..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in border-t border-gray-200 mt-4 pt-4">
            <Link
              href="/products"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              商品
            </Link>
            <Link
              href="/new-arrivals"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              新品
            </Link>
            <Link
              href="/sale"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              促销
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

