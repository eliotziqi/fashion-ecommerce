import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { Filter, Grid, List } from 'lucide-react'

// 示例商品数据
const products = [
  {
    id: '1',
    name: '春季连衣裙 优雅气质',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
  },
  {
    id: '2',
    name: '休闲衬衫 舒适百搭',
    price: 199,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=600&fit=crop',
  },
  {
    id: '3',
    name: '时尚外套 经典款',
    price: 499,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
  },
  {
    id: '4',
    name: '优雅半身裙 职场必备',
    price: 249,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
  },
  {
    id: '5',
    name: '经典牛仔裤 修身版型',
    price: 279,
    originalPrice: 359,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop',
  },
  {
    id: '6',
    name: '针织开衫 温柔气质',
    price: 229,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop',
  },
  {
    id: '7',
    name: '百搭T恤 多色可选',
    price: 99,
    originalPrice: 149,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
  },
  {
    id: '8',
    name: '优雅风衣 经典款',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=600&fit=crop',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 页面标题 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">所有商品</h1>
            <p className="text-gray-600">发现您的完美搭配</p>
          </div>

          {/* 筛选和排序栏 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                <Filter size={18} />
                <span>筛选</span>
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500">
                <option>价格：从低到高</option>
                <option>价格：从高到低</option>
                <option>最新上架</option>
                <option>最受欢迎</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                <Grid size={18} />
              </button>
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                <List size={18} />
              </button>
            </div>
          </div>

          {/* 商品网格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* 分页 */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                上一页
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                下一页
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


