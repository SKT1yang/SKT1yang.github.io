'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

interface FireworkCardProps {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
  thumb: string
  category: string
}

export default function FireworkCard({ id, name, description, imageUrl, category, thumb }: FireworkCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl festive-shadow">
        <div className="relative">
          <img
            src={thumb}
            alt={name}
            className="w-full h-50 object-cover cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
          <div className="absolute top-2 right-2 bg-yellow-400 text-red-600 rounded-full px-2 py-1 text-xs font-bold">
            {category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-red-600">{name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="festive-button text-sm flex items-center"
          >
            <Sparkles className="mr-1" size={16} />
            查看详情
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white p-6 rounded-lg max-w-3xl max-h-[90vh] overflow-auto firework-animation" onClick={(e) => e.stopPropagation()}>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2 text-red-600">{name}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-4">
              {category}
            </div>
            <button
              className="festive-button w-full"
              onClick={() => setIsModalOpen(false)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </>
  )
}

