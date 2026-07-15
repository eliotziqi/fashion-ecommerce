'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Plus, Edit, Trash2, MapPin, Check } from 'lucide-react'

const addresses = [
  {
    id: '1',
    name: '张三',
    phone: '138****8888',
    address: '北京市朝阳区xxx街道xxx号',
    isDefault: true,
  },
  {
    id: '2',
    name: '李四',
    phone: '139****9999',
    address: '上海市浦东新区xxx路xxx号',
    isDefault: false,
  },
]

export default function AddressesPage() {
  const [addressList, setAddressList] = useState(addresses)
  const [showForm, setShowForm] = useState(false)

  const setDefault = (id: string) => {
    setAddressList((prev) =>
      prev.map((addr) => ({ ...addr, isDefault: addr.id === id }))
    )
  }

  const deleteAddress = (id: string) => {
    setAddressList((prev) => prev.filter((addr) => addr.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">收货地址</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <Plus size={18} />
              <span>添加新地址</span>
            </button>
          </div>

          {showForm && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">添加新地址</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">收货人</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">详细地址</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="default" className="mr-2" />
                  <label htmlFor="default" className="text-sm text-gray-600">设为默认地址</label>
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    保存
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition"
                  >
                    取消
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addressList.map((addr) => (
              <div
                key={addr.id}
                className={`border-2 rounded-lg p-6 ${
                  addr.isDefault ? 'border-gray-900 bg-gray-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-gray-600" />
                    {addr.isDefault && (
                      <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded">
                        默认
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition">
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => deleteAddress(addr.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="space-y-1 mb-4">
                  <div className="font-medium text-gray-900">{addr.name}</div>
                  <div className="text-gray-600">{addr.phone}</div>
                  <div className="text-gray-600">{addr.address}</div>
                </div>
                {!addr.isDefault && (
                  <button
                    onClick={() => setDefault(addr.id)}
                    className="text-sm text-accent-500 hover:underline flex items-center"
                  >
                    <Check size={14} className="mr-1" />
                    设为默认
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


