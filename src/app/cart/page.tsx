'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Trash2, Minus, Plus, ShoppingCart } from 'lucide-react'

const cartItems = [
  {
    id: '1',
    name: '春季连衣裙 优雅气质',
    price: 299,
    size: 'M',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=300&fit=crop',
  },
  {
    id: '2',
    name: '休闲衬衫 舒适百搭',
    price: 199,
    size: 'L',
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=200&h=300&fit=crop',
  },
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-4 py-12">
          <div className="text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">购物车是空的</h2>
            <p className="text-gray-600 mb-6">快去挑选您喜欢的商品吧！</p>
            <Link
              href="/products"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              去购物
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">购物车</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 购物车商品列表 */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row border border-gray-200 rounded-lg p-4"
                >
                  <div className="relative w-full sm:w-24 h-32 sm:h-24 mb-4 sm:mb-0 sm:mr-4 bg-gray-100 rounded-md overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">尺码: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition"
                        aria-label="删除商品"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="font-semibold text-gray-900">¥{item.price * item.quantity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 订单摘要 */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">订单摘要</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>小计</span>
                    <span>¥{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>运费</span>
                    <span>{shipping === 0 ? '免费' : `¥${shipping}`}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between text-lg font-semibold text-gray-900">
                    <span>总计</span>
                    <span>¥{total}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full bg-gray-900 text-white text-center py-3 rounded-md hover:bg-gray-800 transition font-medium"
                >
                  去结算
                </Link>
                <Link
                  href="/products"
                  className="block w-full text-center py-3 text-gray-600 hover:text-gray-900 transition mt-2"
                >
                  继续购物
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


