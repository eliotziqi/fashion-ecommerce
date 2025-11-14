import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import ProductCard from '@/components/ProductCard'
import NewUserModal from '@/components/NewUserModal'

// 示例商品数据
const newArrivals = [
  {
    id: '1',
    name: '春季连衣裙 优雅气质',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: '2',
    name: '休闲衬衫 舒适百搭',
    price: 199,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: '3',
    name: '时尚外套 经典款',
    price: 499,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: '4',
    name: '优雅半身裙 职场必备',
    price: 249,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    isNew: true,
  },
]

const hotProducts = [
  {
    id: '5',
    name: '经典牛仔裤 修身版型',
    price: 279,
    originalPrice: 359,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop',
    isHot: true,
  },
  {
    id: '6',
    name: '针织开衫 温柔气质',
    price: 229,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop',
    isHot: true,
  },
  {
    id: '7',
    name: '百搭T恤 多色可选',
    price: 99,
    originalPrice: 149,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
    isHot: true,
  },
  {
    id: '8',
    name: '优雅风衣 经典款',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=600&fit=crop',
    isHot: true,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* 轮播图 */}
        <Carousel />

        {/* 新品推荐 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">新品推荐</h2>
            <a href="/new-arrivals" className="text-gray-600 hover:text-gray-900 transition">
              查看更多 →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* 热销商品 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">热销商品</h2>
            <a href="/products" className="text-gray-600 hover:text-gray-900 transition">
              查看更多 →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hotProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <NewUserModal />
    </div>
  )
}

