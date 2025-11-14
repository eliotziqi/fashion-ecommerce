import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import ComingSoon from '@/components/ComingSoon'

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
  {
    id: '9',
    name: '春季新品 时尚套装',
    price: 399,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: '10',
    name: '优雅长裙 气质款',
    price: 349,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: '11',
    name: '时尚短外套 百搭款',
    price: 279,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: '12',
    name: '休闲裤 舒适版型',
    price: 199,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop',
    isNew: true,
  },
]

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">新品推荐</h1>
            <p className="text-gray-600">发现最新时尚趋势</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

