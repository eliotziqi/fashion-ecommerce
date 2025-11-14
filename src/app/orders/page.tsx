import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Package, Eye } from 'lucide-react'

const orders = [
  {
    id: 'ORD20240115001',
    date: '2024-01-15',
    status: '已发货',
    items: [
      {
        id: '1',
        name: '春季连衣裙 优雅气质',
        price: 299,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=150&fit=crop',
      },
    ],
    total: 299,
  },
  {
    id: 'ORD20240110002',
    date: '2024-01-10',
    status: '已完成',
    items: [
      {
        id: '2',
        name: '休闲衬衫 舒适百搭',
        price: 199,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=100&h=150&fit=crop',
      },
    ],
    total: 398,
  },
]

export default function OrdersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">我的订单</h1>

          {orders.length === 0 ? (
            <div className="text-center py-12">
              <Package size={64} className="mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">暂无订单</h2>
              <p className="text-gray-600 mb-6">快去挑选您喜欢的商品吧！</p>
              <Link
                href="/products"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                去购物
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <div className="font-medium text-gray-900">订单号: {order.id}</div>
                      <div className="text-sm text-gray-600 mt-1">下单时间: {order.date}</div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                        {order.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <div className="relative w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            数量: {item.quantity} × ¥{item.price}
                          </p>
                        </div>
                        <div className="text-gray-900 font-medium">
                          ¥{item.price * item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">
                      订单总额: ¥{order.total}
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        href={`/orders/${order.id}`}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition flex items-center space-x-2"
                      >
                        <Eye size={16} />
                        <span>查看详情</span>
                      </Link>
                      {order.status === '已完成' && (
                        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                          再次购买
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

