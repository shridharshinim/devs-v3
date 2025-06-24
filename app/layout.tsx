import type React from "react"
import "@/app/globals.css"
import "@/app/components/glitch-effects.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Devs Technical Society - Code. Coffee. Repeat.",
  description: "A community of tech enthusiasts pushing the boundaries of innovation and creativity",
  manifest: "/manifest.json",
  themeColor: "#000000",
  generator: "v0.dev",
  icons: {
    icon: "public/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
