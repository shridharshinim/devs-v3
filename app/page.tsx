"use client"

import type React from "react"
import { Cpu } from "lucide-react";
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Particles } from "./components/particles"
import { ResponsiveVideo } from "@/components/ui/ResponsiveVideo";
import { LoadingScreen } from "./components/loading-screen"
import { VideoModal } from "./components/video-modal"
import { GalleryModal } from "./components/gallery-modal"
import { ChapterAccordion } from "./components/chapter-accordion"
import { TeamCarousel } from "./components/team-carousel"
import {
  ChevronDown,
  Code,
  Database,
  ExternalLink,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Play,
  Rocket,
  Shield,
  Twitter,
  X,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const [galleryContent, setGalleryContent] = useState({
    title: "",
    description: "",
    images: [""],
  })

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const goalsRef = useRef(null)
  const featuresRef = useRef(null)
  const teamRef = useRef(null)
  const chaptersRef = useRef(null)
  const eventsRef = useRef(null)
  const sponsorsRef = useRef(null)
  const contactRef = useRef(null)

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const goalsInView = useInView(goalsRef, { once: true, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 })
  const chaptersInView = useInView(chaptersRef, { once: true, amount: 0.3 })
  const eventsInView = useInView(eventsRef, { once: true, amount: 0.3 })
  const sponsorsInView = useInView(sponsorsRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setMobileMenuOpen(false)
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const openGallery = (title: string, description: string, images: string[]) => {
    setGalleryContent({ title, description, images })
    setGalleryModalOpen(true)
  }

  // Team members data
  const teamMembers = [
    {
      name: "Hursun.S.S",
      role: "Chennai Chapter Lead",
      image: "/images/Core Team/Hursun%20S%20S.png",
      social: {
        linkedin: "https://www.linkedin.com/in/hursun-ss-377659233 ",
        github: "https://github.com/Dunking-Dunk",
      },
    },
    {
      name: "Meenakshi",
      role: "Chennai Chapter Co-Lead",
      image: "/images/Core Team/meenakshi.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/meenakshi-ganesan-219261285",
        github: "https://github.com/Meekio",
      },
    },
    {
      name: "Sajiv Jess.B.I",
      role: "Technical Lead",
      image: "/images/Core Team/Sajiv.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/sajivjess/",
        github: "https://github.com/SajivJess",
      },
    },
    {
      name: " Kovendhan",
      role: "Design Lead",
      image: "/images/Core Team/ko.png",
      social: {
        linkedin: "http://www.linkedin.com/in/kovendhan-b-03b1932a2",
        github: "https://github.com/Kovendhan-B",
      },
    },
    {
      name: "Dhaanya",
      role: "Editorial Lead",
      image: "/images/Core Team/dhaanya.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/dhaanya-prakash-1510802a2/",
        github: "https://github.com/DhaanyaPrakash",
      },
    },
    {
      name: "Sanjana",
      role: "Marketing Lead",
      image: "/images/Core Team/sanjana.jpg",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
  ]

  // Chapters data
  const chapters = [
    {
      name: "Rajalakshmi Engineering College - REC",
      lead: "Hursun – Chapter Lead",
      description:
        "The REC Chapter of Devs Society is a vibrant student tech hub at Rajalakshmi Engineering College, focused on hands-on learning, innovation, and peer-driven growth.",
      image: "/images/Chapters/Rec/rec.jpeg",
      events: [
        {
          title: "P2P Networking Session",
          description: "A 48-hour hackathon focused on developing AI solutions for healthcare challenges.",
          images: [
            "/images/Chapters/Rec/p2p/IMG_3272.webp",
             "/images/Chapters/Rec/p2p/IMG_3191.webp",
              "/images/Chapters/Rec/p2p/IMG_3196.webp",
               "/images/Chapters/Rec/p2p/IMG_3232.webp",
                "/images/Chapters/Rec/p2p/IMG_3242.webp",
                 "/images/Chapters/Rec/p2p/IMG_3210.webp",
                  "/images/Chapters/Rec/p2p/IMG_3234.webp",
                   "/images/Chapters/Rec/p2p/IMG_2437.webp",
                    "/images/Chapters/Rec/p2p/IMG_2439.webp",
                     "/images/Chapters/Rec/p2p/IMG_2444.webp",
                      "/images/Chapters/Rec/p2p/IMG_2445.webp",
                       "/images/Chapters/Rec/p2p/IMG_2446.webp"
          
          ],
        },
        {
          title: "DevFest",
          description:
            "DEVFEST is our annual technical symposium that brings together students for technical events, hands-on workshops, and hackathons. Designed to foster innovation, collaboration, and skill development, DevFest challenges participants to push boundaries and explore new possibilities in technology.",
          images: [
            "/images/Chapters/Rec/Devfest/_MG_0101.webp",
          "/images/Chapters/Rec/Devfest/_MG_0135.webp",
            "/images/Chapters/Rec/Devfest/_MG_0145.webp",
            "/images/Chapters/Rec/Devfest/DSC_0032.webp",
            "/images/Chapters/Rec/Devfest/DSC_0095.webp",
            "/images/Chapters/Rec/Devfest/DSC_0114 (1).webp",
            "/images/Chapters/Rec/Devfest/DSC_0205.webp",
            "/images/Chapters/Rec/Devfest/DSC02110.webp",
            "/images/Chapters/Rec/Devfest/DSC02123.webp",
            "/images/Chapters/Rec/Devfest/DSC02134.webp",
            "/images/Chapters/Rec/Devfest/DSC02141.webp",
            "/images/Chapters/Rec/Devfest/DSC02282.webp",
            "/images/Chapters/Rec/Devfest/DSC02291.webp",
            "/images/Chapters/Rec/Devfest/DSC02558.webp",
            "/images/Chapters/Rec/Devfest/NBP_0084.webp",
            "/images/Chapters/Rec/Devfest/NBP_0096.webp",
            "/images/Chapters/Rec/Devfest/NBP_0099.webp",
            "/images/Chapters/Rec/Devfest/NBP_0262.webp",
            "/images/Chapters/Rec/Devfest/NBP_0278.webp",
            "/images/Chapters/Rec/Devfest/NBP_0298.webp"
            
          ],
        },
        {
          title: "Geekify U",
          description:
            "Geekify U is a multi-day tech camp where students explore Git, web development, Linux, UI design, machine learning, and IoT through hands-on sessions led by expert mentors. It’s more than workshops—it's a launchpad for tech skills and curiosity.",
          images: [
           "/images/Chapters/Rec/Geekify U/IMG_8361.webp",
           "/images/Chapters/Rec/Geekify U/IMG_8366.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9669.webp",
           "/images/Chapters/Rec/Geekify U/IMG_8372.webp",
           "/images/Chapters/Rec/Geekify U/IMG_8381.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9066.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9069.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9080.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9507.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9522.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9527.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9574.webp",
           "/images/Chapters/Rec/Geekify U/IMG_9655.webp",
           

          ],
        },
      ],
    },
    {
    name: "Rajalakshmi Institute Of Technology - RIT",
    lead: "Adinath M - Chapter Lead",
    leadUrl: "https://www.linkedin.com/in/adinathm/",
    description: "Still Loading !",
    image: "images/Chapters/Rit/rit.webp",
    events: [
      {
        title: "COMING SOON !",
        description: "COMING SOON !",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
    ],
  },
];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-['Poppins',sans-serif]">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        title={galleryContent.title}
        description={galleryContent.description}
        images={galleryContent.images}
      />

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]),
          backdropFilter: useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"]),
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/devslogo.png"
              alt="Devs Logo"
              width={80}
              height={80}
              className="h-250 w-250 object-contain"
              priority
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
  {[
    { label: 'Home', ref: heroRef },
    { label: 'About', ref: aboutRef },
    { label: 'Chapters', ref: chaptersRef },
    { label: 'Services', ref: featuresRef },
    { label: 'Team', ref: teamRef },
    { label: 'Contact', ref: contactRef },
  ].map(({ label, ref }) => (
    <button
      key={label}
      onClick={() => scrollToSection(ref)}
      className="text-sm hover:text-cyan-400 transition-colors"
    >
      {label}
    </button>
  ))}
</div>



<Link href="https://tally.so/r/w5M9q6" target="_blank">
  <Button
    variant="outline"
    className="hidden md:flex border-cyan-400 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
  >
    Join Us
  </Button>
</Link>


          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-cyan-900/30"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-left py-2 hover:text-cyan-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-left py-2 hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(chaptersRef)}
                className="text-left py-2 hover:text-cyan-400 transition-colors"
              >
                Chapters
              </button>
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="text-left py-2 hover:text-cyan-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(teamRef)}
                className="text-left py-2 hover:text-cyan-400 transition-colors"
              >
                Team
              </button>
              
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-left py-2 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300">
                Join Us
              </Button>
              <Button
  asChild
  variant="outline"
  className="border-cyan-400 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
>
  <a
    href="https://portal.devs-society.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit Portal
  </a>
</Button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
      <ResponsiveVideo />

  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
</div>

        <Particles className="absolute inset-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-text">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-green-400">
                DEVS
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              CODE. COFFEE. REPEAT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setVideoModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-4 w-4" /> Watch our club in action
                </span>
                <span className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
                          <a
              href="https://tally.so/r/w5M9q6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-950 hover:text-fuchsia-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Join Our Community</span>
                <span className="absolute inset-0 bg-fuchsia-950 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </a>
            <a
  href="https://portal.devs-society.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="border-cyan-400 text-cyan-300 hover:bg-cyan-950 hover:text-cyan-200 group relative overflow-hidden"
  >
    <span className="relative z-10">Visit Portal</span>
    <span className="absolute inset-0 bg-cyan-950 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
  </Button>
</a>


            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-b from-black to-cyan-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-cyan-400">DEVS</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto mb-6 glow-cyan"></div>
            <p className="text-gray-300 text-lg">
            Devs Society is a student-led tech community that fosters innovation, upskills young minds, and builds future-ready talent through hands-on workshops, immersive bootcamps, hackathons, and open-source collaboration. Operating under the Community Initiatives wing of WeDigi Studio Pvt. Ltd., Devs aims to become a pan-India movement empowering the next generation of tech leaders.

            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <Image src="/images/devs.jpg" alt="Tech community" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="p-6 bg-cyan-950/10 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(13,202,240,0.2)] transition-all">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" /> Our Mission
                </h3>
                <p className="text-gray-300">
                  To create a collaborative environment where technology enthusiasts can learn, share knowledge, and
                  build innovative solutions to real-world problems.
                </p>
              </div>

              <div className="p-6 bg-fuchsia-950/10 rounded-xl border border-fuchsia-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-fuchsia-400" /> Our Vision
                </h3>
                <p className="text-gray-300">
                  To become a leading technical community that fosters innovation, collaboration, and technological
                  advancement across various domains.
                </p>
              </div>

              <div className="p-6 bg-green-950/10 rounded-xl border border-green-500/20 hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(0,255,153,0.2)] transition-all">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-400" /> Our Values
                </h3>
                <p className="text-gray-300">
                  Innovation, collaboration, inclusivity, continuous learning, and ethical technology development are at
                  the core of everything we do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Chapters Section */}
      <section ref={chaptersRef} className="py-20 bg-gradient-to-b from-black to-fuchsia-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={chaptersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-fuchsia-400">Chapters</span>
            </h2>
            <div className="h-1 w-20 bg-fuchsia-400 mx-auto mb-6 glow-fuchsia"></div>
            <p className="text-gray-300 text-lg">
              Explore our chapters across different cities and their exciting activities
            </p>
          </motion.div>

          <ChapterAccordion chapters={chapters} onOpenGallery={openGallery} />
        </div>
      </section>

     
      {/* Features/Services Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-black to-fuchsia-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We <span className="text-green-400">Organise</span>
            </h2>
            <div className="h-1 w-20 bg-green-400 mx-auto mb-6 glow-green"></div>
            <p className="text-gray-300 text-lg">
              We offer a range of services and opportunities to help our members grow, learn, and contribute to the tech
              community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-cyan-400" />,
                title: "Workshops & Training",
                description:
                  "Regular workshops, training sessions, and hands-on labs on cutting-edge technologies and tools.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-fuchsia-400" />,
                title: "Hackathons",
                description: "Exciting hackathons and coding competitions to challenge your skills and creativity.",
              },
              {
                icon: <Globe className="h-10 w-10 text-green-400" />,
                title: "Networking Events",
                description: "Connect with like-minded individuals, industry experts, and potential collaborators.",
              },
              {
                icon: <Database className="h-10 w-10 text-cyan-400" />,
                title: "Project Collaboration",
                description: "Collaborate on real-world projects and build solutions that make a difference.",
              },
              {
                icon: <Layers className="h-10 w-10 text-fuchsia-400" />,
                title: "Mentorship",
                description: "Get guidance and support from experienced mentors in your area of interest.",
              },
              {
                icon: <ExternalLink className="h-10 w-10 text-green-400" />,
                title: "Industry Connect",
                description: "Opportunities to connect with industry leaders and explore career possibilities.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(13,202,240,0.2)] group"
              >
                <div className="mb-4 p-3 bg-black/50 rounded-lg inline-block group-hover:bg-cyan-900/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Founders Section */}
<section ref={sponsorsRef} className="py-20 bg-gradient-to-b from-black to-cyan-950/10">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
        DEVS <span className="text-cyan-400">Founders</span>
      </h2>
      <div className="h-1 w-20 bg-cyan-400 mx-auto mb-6 glow-cyan"></div>
      <p className="text-gray-300 text-lg leading-relaxed">
        Meet the visionary minds behind DEVS – a team of passionate innovators, coders, and creators who built this
        community to inspire collaboration, creativity, and technological excellence.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
      {[{
        name: "Swayam Annamalai",
        title: "Founder",
        img: "/images/Core Team/swayam.jpg",
        linkedin: "https://www.linkedin.com/in/devswayam/"
      },
      {
        name: "Rishabh Venkatraman",
        title: "Co-Founder",
        img: "/images/cofounder.jpg",
        linkedin: "https://www.linkedin.com/in/rishabh-venkatraman/"
      }].map((person, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 * index }}
          className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(13,202,240,0.3)] text-center transition-all"
        >
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400">
            <Image
              src={person.img}
              alt={person.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-white">{person.name}</h3>
          <p className="text-cyan-400 text-sm mb-4">{person.title}</p>
          <div className="flex justify-center gap-4">
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-cyan-400">Team</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto mb-6 glow-cyan"></div>
            <p className="text-gray-300 text-lg">
              Meet the passionate individuals behind Devs Society who work tirelessly to create opportunities and foster
              innovation.
            </p>
          </motion.div>

          <TeamCarousel members={teamMembers} />
        </div>
      </section>

      

      

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in <span className="text-fuchsia-400">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-fuchsia-400 mx-auto mb-6 glow-fuchsia"></div>
            <p className="text-gray-300 text-lg">Have questions or want to join our community? Reach out to us!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-fuchsia-400/50 transition-all hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-fuchsia-400 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:devs.technicalsociety@gmail.com"
                        className="text-gray-300 hover:text-fuchsia-400 transition-colors"
                      >
                        devs.technicalsociety@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="h-5 w-5 text-fuchsia-400 mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-300">
                        Chennai
                        <br />
                        TamilNadu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-fuchsia-400/50 transition-all hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-black/50 rounded-lg hover:bg-fuchsia-900/30 transition-colors hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
                  >
                    <Twitter className="h-5 w-5 text-fuchsia-400" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-black/50 rounded-lg hover:bg-fuchsia-900/30 transition-colors hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
                  >
                    <Linkedin className="h-5 w-5 text-fuchsia-400" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-black/50 rounded-lg hover:bg-fuchsia-900/30 transition-colors hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
                  >
                    <Github className="h-5 w-5 text-fuchsia-400" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-black/50 rounded-lg hover:bg-fuchsia-900/30 transition-colors hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
                  >
                    <X className="h-5 w-5 text-fuchsia-400" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-fuchsia-400/50 transition-all hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]"
            >
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold group relative overflow-hidden">
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-fuchsia-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">Devs Society</span>
              </div>
              <p className="text-gray-400 text-sm">
                A community of tech enthusiasts pushing the boundaries of innovation and creativity.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(featuresRef)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Services
                  </button>
                </li>
                
                <li>
                  <button
                    onClick={() => scrollToSection(teamRef)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Our Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(eventsRef)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
             
<form className="flex flex-row items-stretch w-full max-w-xs md:max-w-md overflow-hidden">
  <input
    type="email"
    placeholder="Your email"
    className="flex-grow px-4 py-2 bg-black/50 border border-cyan-400 border-r-0 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-cyan-400"
  />
  <Button
    type="submit"
    variant="outline"
    className="border border-cyan-400 border-l-0 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 rounded-r-lg px-3 text-sm"
  >
    Subscribe
  </Button>
</form>



            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-cyan-900/30 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} DEVS . All rights reserved. </p>
            <div className="flex gap-4 mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
  Crafted with precision by{' '}
  <a
    href="https://www.linkedin.com/in/sajivjess"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition-colors"
  >
    SAJIV JESS B I
  </a>{' '}
</p>

              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
