import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Techno Vision - AI-Powered Software Solutions",
  description:
    "Transform your business with cutting-edge AI solutions, software engineering, and enterprise technology services. Techno Vision delivers innovation at scale.",
  keywords:
    "AI solutions, software engineering, enterprise technology, machine learning, cloud architecture, digital transformation",
  authors: [{ name: "Techno Vision" }],
  creator: "Techno Vision",
  metadataBase: new URL("https://technovision.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://technovision.com",
    siteName: "Techno Vision",
    title: "Techno Vision - AI-Powered Software Solutions",
    description:
      "Transform your business with cutting-edge AI solutions, software engineering, and enterprise technology services.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Techno Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Vision - AI-Powered Software Solutions",
    description: "Transform your business with cutting-edge AI solutions and enterprise technology.",
    creator: "@technovision",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Techno Vision",
              url: "https://technovision.com",
              logo: "https://technovision.com/logo.png",
              description: "AI-powered software solutions and enterprise technology services",
              sameAs: ["https://twitter.com/technovision", "https://linkedin.com/company/technovision"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
