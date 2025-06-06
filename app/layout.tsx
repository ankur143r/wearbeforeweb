import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { CookieConsent } from "@/app/components/cookie-consent"
import { AnalyticsScripts } from "@/app/components/analytics-scripts"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WearBefore – Virtual Try-On in Telegram | Try Before You Buy",
  description:
    "Try on outfits virtually using AI inside Telegram. Eliminate shopping decision fatigue and see yourself in any outfit before buying. Get 5 image credits free!",
  keywords:
    "virtual try-on, AI fashion, try before you buy, fashion tech, Telegram bot, outfit visualization, shopping decision fatigue, virtual fitting room",
  authors: [{ name: "WearBefore Inc." }],
  creator: "WearBefore Inc.",
  publisher: "WearBefore Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wearbefore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WearBefore – Virtual Try-On via Telegram",
    description: "Try fashion before you buy. See yourself in any outfit instantly with AI. First 5 credits free.",
    url: "https://wearbefore.com",
    siteName: "WearBefore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://wearbefore.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WearBefore - AI Virtual Try-On",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WearBefore – Virtual Try-On via Telegram",
    description: "Try fashion before you buy. See yourself in any outfit instantly with AI. First 5 credits free.",
    images: ["https://wearbefore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2b3147" />

        {/* Early Telegram Detection Script - Debug alerts removed */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                const isAndroid = /Android/i.test(navigator.userAgent);
                const isWebView = 
                  (navigator.userAgent.includes('Mobile') && 
                   (window.navigator.standalone === undefined || 
                    window.innerWidth < 768 || 
                    (document.referrer === '' && window.ontouchstart !== undefined) || 
                    window.matchMedia('(display-mode: standalone)').matches === false));
                const isTelegram =
                  /Telegram/i.test(navigator.userAgent) ||
                  /TelegramWebView/i.test(navigator.userAgent) ||
                  /TDesktop/i.test(navigator.userAgent) ||
                  window.Telegram?.WebApp ||
                  window.TelegramWebview ||
                  window.Telegram ||
                  !!window.TelegramWebAppInitData ||
                  (isIOS && isWebView);
                
                // Debug alert removed
                console.log('Telegram detection:', {
                  userAgent: navigator.userAgent,
                  isTelegram,
                  isIOS,
                  isAndroid,
                  isWebView
                });
              }
              catch (e) {
                console.error('Telegram detection error:', e);
              }
            })();
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Removed TelegramBrowserCheck wrapper to disable fallback message */}
          <Suspense>
            {children}
            <CookieConsent />
            <AnalyticsScripts />
          </Suspense>
        </ThemeProvider>

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WearBefore",
              url: "https://wearbefore.com",
              logo: "https://wearbefore.com/logo.png",
              sameAs: ["https://facebook.com/wearbefore", "https://instagram.com/wearbefore"],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@wearbefore.com",
                contactType: "customer service",
              },
            }),
          }}
        />

        {/* Structured Data for Product */}
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "WearBefore Virtual Try-On",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web, Telegram",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              description: "AI-powered virtual try-on service that lets you see yourself in any outfit before buying.",
            }),
          }}
        />
      </body>
    </html>
  )
}
