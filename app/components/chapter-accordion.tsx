"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChapterEvent {
  title: string
  description: string
  images: string[]
}

interface ChapterProps {
  name: string
  lead: string
  description: string
  image: string
  events: ChapterEvent[]
  onOpenGallery: (title: string, description: string, images: string[]) => void
}

export function ChapterAccordion({
  chapters,
  onOpenGallery,
}: { chapters: ChapterProps[]; onOpenGallery: (title: string, description: string, images: string[]) => void }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {chapters.map((chapter, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(13,202,240,0.2)]"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gray-700">
                <img
                  src={chapter.image || "/placeholder.svg"}
                  alt={chapter.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{chapter.name}</h3>
                <p className="text-sm text-cyan-400">{chapter.lead}</p>
              </div>
            </div>
            <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </motion.div>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border-t border-gray-800 p-4">
                  <p className="mb-4 text-gray-300">{chapter.description}</p>

                  <h4 className="mb-3 text-lg font-bold text-fuchsia-400">Past Events</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {chapter.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="rounded-lg border border-gray-800 bg-black/30 p-4 transition-all hover:border-fuchsia-400/50 hover:shadow-[0_0_10px_rgba(255,0,255,0.2)]"
                      >
                        <h5 className="mb-2 font-bold text-white">{event.title}</h5>
                        <p className="mb-3 text-sm text-gray-400 line-clamp-2">{event.description}</p>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            onOpenGallery(event.title, event.description, event.images)
                          }}
                          variant="outline"
                          className="w-full border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-950 hover:text-fuchsia-300"
                        >
                          <ImageIcon className="mr-2 h-4 w-4" /> View Gallery
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
