'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CreditCard, CheckCircle, Lock } from 'lucide-react'

const paymentMethods = [
  {
    id: 'wechat',
    name: '微信支付',
    icon: '微',
    color: 'bg-green-500',
  },
  {
    id: 'alipay',
    name: '支付宝',
    icon: '支',
    color: 'bg-blue-500',
  },
  {
    id: 'card',
    name: '银行卡支付',
    icon: <CreditCard size={24} className="text-white" />,
    color: 'bg-gray-700',
  },
]

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('wechat')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = () => {
    setIsProcessing(true)
    // 模拟支付处理
    setTimeout(() => {
      setIsProcessing(false)
      // 这里应该跳转到支付成功页面
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Lock size={48} className="mx-auto text-gray-400 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">安全支付</h1>
              <p className="text-gray-600">订单金额: ¥697</p>
            </div>

            {/* 支付方式选择 */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">选择支付方式</h2>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full p-4 border-2 rounded-lg transition flex items-center justify-between ${
                      selectedMethod === method.id
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${method.color} rounded flex items-center justify-center`}>
                        {typeof method.icon === 'string' ? (
                          <span className="text-white text-xs font-bold">{method.icon}</span>
                        ) : (
                          method.icon
                        )}
                      </div>
                      <span className="font-medium text-gray-900">{method.name}</span>
                    </div>
                    {selectedMethod === method.id && (
                      <CheckCircle size={20} className="text-gray-900" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 支付按钮 */}
            <div className="space-y-4">
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? '处理中...' : '确认支付'}
              </button>
              <Link
                href="/checkout"
                className="block w-full text-center text-gray-600 hover:text-gray-900 transition"
              >
                返回修改
              </Link>
            </div>

            {/* 安全提示 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                您的支付信息将被加密处理，确保交易安全
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


