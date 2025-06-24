"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  images: string[]
}

export function GalleryModal({ isOpen, onClose, title, description, images }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-4xl rounded-lg border border-fuchsia-400/50 bg-black p-4 shadow-[0_0_15px_rgba(255,0,255,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-[0_0_10px_rgba(13,202,240,0.7)] transition-all hover:text-cyan-400"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-cover"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrev()
                }}
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`h-2 w-8 rounded-full transition-all ${
                    currentIndex === index ? "bg-fuchsia-400" : "bg-gray-600"
                  }`}
                ></button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
