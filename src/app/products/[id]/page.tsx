'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, ShoppingCart, Star, Minus, Plus, Check } from 'lucide-react'

const sizes = ['XS', 'S', 'M', 'L', 'XL']

const reviews = [
  {
    id: 1,
    user: '张**',
    rating: 5,
    date: '2024-01-15',
    comment: '质量很好，尺码合适，非常满意！',
    images: [],
  },
  {
    id: 2,
    user: '李**',
    rating: 4,
    date: '2024-01-10',
    comment: '款式很好看，就是颜色比图片稍微浅一点。',
    images: [],
  },
  {
    id: 3,
    user: '王**',
    rating: 5,
    date: '2024-01-05',
    comment: '非常喜欢，已经推荐给朋友了！',
    images: [],
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = {
    id: params.id,
    name: '春季连衣裙 优雅气质',
    price: 299,
    originalPrice: 399,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop',
    ],
    description: '这款春季连衣裙采用优质面料，设计优雅大方，适合多种场合穿着。',
    details: [
      '100% 纯棉面料',
      '可机洗',
      '修身版型',
      '多色可选',
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 商品图片 */}
            <div>
              <div className="relative aspect-[3/4] mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? 'border-gray-900' : 'border-transparent'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* 商品信息 */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">¥{product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-lg text-gray-400 line-through">
                      ¥{product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">(128 评价)</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">选择尺码</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 border-2 rounded-md transition ${
                        selectedSize === size
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">数量</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 mb-8">
                <button className="flex-1 bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-medium flex items-center justify-center space-x-2">
                  <ShoppingCart size={20} />
                  <span>加入购物车</span>
                </button>
                <button className="px-6 py-3 border-2 border-gray-900 rounded-md hover:bg-gray-50 transition">
                  <Heart size={20} />
                </button>
              </div>

              {/* 商品详情 */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">商品详情</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check size={16} className="mr-2 text-accent-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 用户评价 */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">用户评价</h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-medium text-gray-900">{review.user}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              fill={i < review.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 text-accent-500 hover:underline">查看更多评价 →</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

