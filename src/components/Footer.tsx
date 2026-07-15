import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  品牌故事
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  加入我们
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-white transition">
                  门店信息
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">客户服务</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition">
                  配送说明
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition">
                  退换货政策
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">法律信息</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  使用条款
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:service@fashion.com" className="hover:text-white transition">
                  service@fashion.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>400-888-8888</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 FASHION. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}


