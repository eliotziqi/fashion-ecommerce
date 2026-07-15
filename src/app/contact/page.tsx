'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里应该发送邮件
    alert('感谢您的反馈！我们会尽快回复您。')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h1>
            <p className="text-gray-600">我们很乐意听到您的声音</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 联系方式 */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Mail size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">邮箱</h3>
                  <a
                    href="mailto:service@fashion.com"
                    className="text-gray-600 hover:text-accent-500 transition"
                  >
                    service@fashion.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Phone size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">电话</h3>
                  <a
                    href="tel:4008888888"
                    className="text-gray-600 hover:text-accent-500 transition"
                  >
                    400-888-8888
                  </a>
                  <p className="text-sm text-gray-500 mt-1">工作日 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <MessageSquare size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">在线客服</h3>
                  <p className="text-gray-600">工作日 9:00-22:00</p>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">主题</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">消息</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-medium flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>发送消息</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


