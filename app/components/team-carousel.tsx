"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface TeamMember {
  name: string
  role: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export function TeamCarousel({ members }: { members: TeamMember[] }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="team-swiper"
    >
      {members.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 p-4 transition-all hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(13,202,240,0.3)]">
            <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full border-2 border-gray-800 transition-all group-hover:border-cyan-400/50">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-cyan-400">{member.role}</p>

              <div className="mt-4 flex justify-center gap-3">
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition-all hover:bg-cyan-400 hover:text-black"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition-all hover:bg-cyan-400 hover:text-black"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition-all hover:bg-cyan-400 hover:text-black"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
