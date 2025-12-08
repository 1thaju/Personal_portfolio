import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorFog } from "@/components/cursor-fog"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"] })

export const metadata: Metadata = {
  title: {
    default: "Thajul Niyas | Freelance Web Developer in Wayanad, Kerala | Next.js Expert",
    template: "%s | Thajul Niyas"
  },
  description: "Looking for a top Freelance Web Developer in Wayanad, Kerala, India? Thajul Niyas is a Full Stack Expert specializing in Next.js, React, Node.js, and Express. Building high-performance websites for global clients.",
  keywords: [
    "Freelance Web Developer Wayanad",
    "Web Developer Kerala",
    "Top Web Designers in India",
    "Next.js Developer Freelance",
    "React.js Expert Kerala",
    "Node.js Backend Developer",
    "Full Stack Developer Wayanad",
    "Thajul Niyas",
    "Hire React Developer India"
  ],
  authors: [{ name: "Thajul Niyas", url: "https://thaju.vercel.app" }],
  creator: "Thajul Niyas",
  publisher: "Thajul Niyas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thaju.vercel.app",
    title: "Thajul Niyas",
    description: "Expert Full Stack Services: Next.js, React, Node.js. Based in Kerala, India. Building high-performance web solutions for global clients.",
    siteName: "Thajul Niyas",
    images: [
      {
        url: "/thaju.png",
        width: 1200,
        height: 630,
        alt: "Thajul Niyas - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thajul Niyas | Next.js & Node.js Developer in Kerala",
    description: "Freelance Full Stack Developer Based in Kerala, India. Building high-performance web solutions for global clients.",
    images: ["/thaju.png"],
    creator: "@your_twitter_handle", 
  },
  verification: {
    google: "o0ybReO9_BPYj2bJZA-rWSZOjHMuPWtU1_8jleqpxl0",
  },
  other: {
    "geo.region": "IN-KL", 
    "geo.placename": "Wayanad",
    "geo.position": "11.6854;76.1320",
    "ICBM": "11.6854, 76.1320"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thajul Niyas",
    "jobTitle": "Freelance Full Stack Developer",
    "url": "https://thaju.vercel.app",
    "sameAs": [
      "https://github.com/1thaju",
      "https://linkedin.com/in/thajul"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wayanad",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "knowsAbout": ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Web Development"],
    "description": "Top-rated Freelance Web Developer in Wayanad, Kerala specializing in modern web technologies."
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans antialiased`}
        style={{ "--font-poppins": poppins.style.fontFamily } as React.CSSProperties}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <ThemeProvider>
          <CursorFog />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}