'use client'

import { useState, useEffect } from 'react'
import { X, Gift } from 'lucide-react'

export default function NewUserModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 检查是否是新用户（这里简化处理，实际应该检查 localStorage 或 cookie）
    const hasSeenModal = localStorage.getItem('hasSeenNewUserModal')
    if (!hasSeenModal) {
      // 延迟显示，让页面先加载
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenNewUserModal', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="关闭"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <Gift size={48} className="mx-auto text-accent-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">欢迎新用户！</h2>
          <p className="text-gray-600 mb-6">
            注册即享新人专享优惠券，首次下单立减50元！
          </p>
          <div className="space-y-3">
            <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-medium">
              立即注册
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-md hover:bg-gray-200 transition"
            >
              稍后再说
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

