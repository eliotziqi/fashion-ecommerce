import { Clock } from 'lucide-react'

export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <Clock size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">敬请期待</h2>
        <p className="text-gray-600">该功能正在开发中，敬请期待...</p>
      </div>
    </div>
  )
}

