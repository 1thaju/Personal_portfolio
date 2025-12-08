import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorFog } from "@/components/cursor-fog";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://thaju.vercel.app"),

  title: {
    default: "Thajul Niyas | Freelance Web Developer in Wayanad, Kerala",
    template: "%s | Thajul Niyas",
  },

  description:
    "Looking for a top Freelance Web Developer in Wayanad, Kerala? Thajul Niyas builds high-performance websites using Next.js, React, Node.js, and Express. Trusted by businesses across India and worldwide.",

  keywords: [
    "Freelance Web Developer Wayanad",
    "Web Developer Kerala",
    "Full Stack Developer Kerala",
    "Next.js Developer India",
    "React Developer Kerala",
    "Node.js Developer India",
    "Best Web Developer Wayanad",
    "Hire Web Developer Kerala",
    "Portfolio Thajul Niyas",
  ],

  authors: [{ name: "Thajul Niyas", url: "https://thaju.vercel.app" }],
  creator: "Thajul Niyas",
  publisher: "Thajul Niyas",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thaju.vercel.app",
    title: "Thajul Niyas | Freelance Full Stack Developer (Kerala, India)",
    description:
      "Expert in Next.js, React, Node.js, API development & high-performance websites. Freelance developer based in Wayanad, Kerala.",
    siteName: "Thajul Niyas Portfolio",
    images: [
      {
        url: "/thaju.png",
        width: 1200,
        height: 630,
        alt: "Thajul Niyas – Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@your_twitter_handle",
    title: "Thajul Niyas | Next.js & Node.js Developer (India)",
    description:
      "Freelance Full Stack Developer specializing in React, Next.js, Node.js, and scalable backend APIs.",
    images: ["/thaju.png"],
  },

  verification: {
    google: "o0ybReO9_BPYj2bJZA-rWSZOjHMuPWtU1_8jleqpxl0",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Wayanad",
    "geo.position": "11.6854;76.1320",
    ICBM: "11.6854, 76.1320",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thajul Niyas",
    jobTitle: "Freelance Full Stack Developer",
    url: "https://thaju.vercel.app",
    sameAs: [
      "https://github.com/1thaju",
      "https://linkedin.com/in/thajul",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wayanad",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
    description:
      "Top-rated Freelance Web Developer in Wayanad, Kerala specializing in Next.js, React, Node.js, and modern web technologies.",
    knowsAbout: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "API Development",
      "AWS",
    ],
  };

  return (
   <html lang="en" suppressHydrationWarning>
    <head>
      <Script
        id="schema-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </head>

    <body className={`${inter.className} font-sans antialiased`}>
      <ThemeProvider>
        <CursorFog />
        {children}
        <Analytics />
      </ThemeProvider>
    </body>
  </html>
  );
}
