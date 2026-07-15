'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Lock, User, QrCode } from 'lucide-react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              {isLogin ? '登录' : '注册'}
            </h1>
            <p className="text-gray-600 text-center mb-8">
              {isLogin ? '欢迎回来' : '创建您的账户'}
            </p>

            {/* 邮箱登录表单 */}
            <form className="space-y-4 mb-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    用户名
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="请输入用户名"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="请输入邮箱"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  密码
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="请输入密码"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
              </div>
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">记住我</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-accent-500 hover:underline">
                    忘记密码？
                  </Link>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"
              >
                {isLogin ? '登录' : '注册'}
              </button>
            </form>

            {/* 第三方登录 */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">或使用以下方式{isLogin ? '登录' : '注册'}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                  <QrCode size={24} className="text-green-500 mb-1" />
                  <span className="text-xs text-gray-600">微信</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                  <div className="w-6 h-6 bg-blue-500 rounded mb-1 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">支</span>
                  </div>
                  <span className="text-xs text-gray-600">支付宝</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                  <Mail size={24} className="text-gray-600 mb-1" />
                  <span className="text-xs text-gray-600">邮箱</span>
                </button>
              </div>
            </div>

            {/* 切换登录/注册 */}
            <div className="mt-6 text-center">
              <span className="text-gray-600">
                {isLogin ? '还没有账户？' : '已有账户？'}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-accent-500 hover:underline font-medium"
              >
                {isLogin ? '立即注册' : '立即登录'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


