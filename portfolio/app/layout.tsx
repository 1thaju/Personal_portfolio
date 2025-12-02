import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorFog } from "@/components/cursor-fog"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
/* Added Poppins font for branding and headings */
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"] })

export const metadata: Metadata = {
  title: "Thajul Niyas",
  description:
    "Full Stack Developer | Next.Js, React.Js, Node.Js, MongoDB, AWS",
  openGraph: {
    title: "Thajul Niyas - Full Stack Developer",
    description:
      "Professional portfolio of Thajul Niyas, a Full Stack Developer building scalable and user-centric digital experiences.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans antialiased`}
        style={{ "--font-poppins": poppins.style.fontFamily } as React.CSSProperties}
      >
        <ThemeProvider>
          <CursorFog />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
