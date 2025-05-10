"use client"

import Head from "next/head"
import { useRouter } from "next/navigation"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogType?: string
  ogImage?: string
}

export function SEOOptimization({
  title = "WearBefore – Virtual Try-On in Telegram | Try Before You Buy",
  description = "Try on outfits virtually using AI inside Telegram. Eliminate shopping decision fatigue and see yourself in any outfit before buying.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/og-image.jpg",
}: SEOProps) {
  const router = useRouter()
  const fullCanonicalUrl = canonicalUrl
    ? `https://wearbefore.com${canonicalUrl}`
    : `https://wearbefore.com${router.pathname}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://wearbefore.com${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://wearbefore.com${ogImage}`} />
    </Head>
  )
}
