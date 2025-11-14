'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Plus, MapPin, CreditCard } from 'lucide-react'

const addresses = [
  {
    id: '1',
    name: '张三',
    phone: '138****8888',
    address: '北京市朝阳区xxx街道xxx号',
    isDefault: true,
  },
]

const orderItems = [
  {
    id: '1',
    name: '春季连衣裙 优雅气质',
    price: 299,
    quantity: 1,
    size: 'M',
  },
  {
    id: '2',
    name: '休闲衬衫 舒适百搭',
    price: 199,
    quantity: 2,
    size: 'L',
  },
]

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]?.id || '')
  const [showAddressForm, setShowAddressForm] = useState(false)

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0
  const total = subtotal + shipping

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">结算</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧表单 */}
            <div className="lg:col-span-2 space-y-8">
              {/* 收货地址 */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin size={20} className="mr-2" />
                  收货地址
                </h2>
                {addresses.length > 0 ? (
                  <div className="space-y-3">
                    {addresses.map((addr) => (
                      <label
                        key={addr.id}
                        className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAddress === addr.id
                            ? 'border-gray-900 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="address"
                          value={addr.id}
                          checked={selectedAddress === addr.id}
                          onChange={(e) => setSelectedAddress(e.target.value)}
                          className="mt-1 mr-3"
                        />
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-gray-900">{addr.name}</span>
                            <span className="text-gray-600">{addr.phone}</span>
                            {addr.isDefault && (
                              <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded">
                                默认
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{addr.address}</p>
                        </div>
                      </label>
                    ))}
                    <button
                      onClick={() => setShowAddressForm(!showAddressForm)}
                      className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition flex items-center justify-center text-gray-600"
                    >
                      <Plus size={20} className="mr-2" />
                      添加新地址
                    </button>
                  </div>
                ) : (
                  <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center">
                    <p className="text-gray-600 mb-4">暂无收货地址</p>
                    <Link
                      href="/addresses"
                      className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                    >
                      添加地址
                    </Link>
                  </div>
                )}
              </div>

              {/* 支付方式 */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard size={20} className="mr-2" />
                  支付方式
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 transition text-center">
                    <div className="w-12 h-12 bg-green-500 rounded mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">微</span>
                    </div>
                    <span className="text-sm text-gray-700">微信支付</span>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 transition text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">支</span>
                    </div>
                    <span className="text-sm text-gray-700">支付宝</span>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 transition text-center">
                    <div className="w-12 h-12 bg-gray-700 rounded mx-auto mb-2 flex items-center justify-center">
                      <CreditCard size={24} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-700">银行卡</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧订单摘要 */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">订单摘要</h2>
                <div className="space-y-3 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <div className="text-gray-900">{item.name}</div>
                        <div className="text-gray-500">尺码: {item.size} × {item.quantity}</div>
                      </div>
                      <span className="text-gray-900">¥{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-300 pt-3 space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>小计</span>
                    <span>¥{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>运费</span>
                    <span>{shipping === 0 ? '免费' : `¥${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2 border-t border-gray-300">
                    <span>总计</span>
                    <span>¥{total}</span>
                  </div>
                </div>
                <Link
                  href="/payment"
                  className="block w-full bg-gray-900 text-white text-center py-3 rounded-md hover:bg-gray-800 transition font-medium"
                >
                  确认支付
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

