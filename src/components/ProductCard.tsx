import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  isHot?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  isNew = false,
  isHot = false,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group">
      <div className="relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {(isNew || isHot) && (
            <div className="absolute top-2 left-2">
              {isNew && (
                <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded">
                  新品
                </span>
              )}
              {isHot && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-1">
                  热销
                </span>
              )}
            </div>
          )}
          <button
            className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="收藏"
          >
            <Heart size={18} />
          </button>
        </div>
        <div className="mt-3">
          <h3 className="text-gray-900 font-medium mb-1 line-clamp-2">{name}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-gray-900 font-semibold">¥{price}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm">¥{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}


