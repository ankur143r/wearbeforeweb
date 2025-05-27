"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Upload,
  Shirt,
  Eye,
  ShoppingBag,
  Store,
  Camera,
  Users,
  CheckIcon,
  FacebookIcon,
  InstagramIcon,
  ArrowRight,
  Clock,
  Brain,
  ThumbsUp,
} from "lucide-react"
import { useState } from "react"
import { CreditModal } from "./components/credit-modal"
import Link from "next/link"
import Script from "next/script"

// X (Twitter) Icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Home() {
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false)

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "WearBefore - AI Virtual Try-On Service",
            description:
              "Try on outfits virtually using AI inside Telegram. Eliminate shopping decision fatigue and see yourself in any outfit before buying.",
            mainEntity: {
              "@type": "Service",
              name: "WearBefore Virtual Try-On",
              description: "AI-powered virtual try-on service that helps you make confident fashion choices.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                description: "5 free credits on sign-up",
              },
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" aria-label="WearBefore Home">
                <span className="font-bold text-2xl">
                  <span className="text-white">Wear</span>
                  <span className="text-blue-400">Before</span>
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </a>
                <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">
                  Use Cases
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </nav>
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0"
              >
                <a
                  href="https://t.me/WearBefore_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  aria-label="Try WearBefore on Telegram"
                >
                  Try Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                  AI-Powered Fashion Tech
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Try Before You Buy –{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Instantly
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                  AI-powered virtual try-on inside Telegram. See yourself in any outfit before making a purchase.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-500/20 p-2 mr-3">
                      <Clock className="h-5 w-5 text-blue-300" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium">Save Time</h3>
                      <p className="text-sm text-gray-400">No more endless browsing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-500/20 p-2 mr-3">
                      <Brain className="h-5 w-5 text-blue-300" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium">Reduce Stress</h3>
                      <p className="text-sm text-gray-400">Eliminate decision fatigue</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-500/20 p-2 mr-3">
                      <ThumbsUp className="h-5 w-5 text-blue-300" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium">Shop Confidently</h3>
                      <p className="text-sm text-gray-400">Buy with certainty</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-lg shadow-blue-500/20"
                  >
                    <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                      <Smartphone className="mr-2 h-5 w-5" aria-hidden="true" />
                      Try it Now on Telegram
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-gray-400">No downloads required. Works directly in Telegram.</p>
              </div>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-10 rounded-2xl"></div>
                <div className="absolute inset-0 flex flex-col md:flex-row">
                  <div className="flex-1 relative">
                    <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded z-20">
                      Original Photo
                    </div>
                    <Image
                      src="/placeholder.svg?height=500&width=400"
                      alt="Example of an original user photo before virtual try-on"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded z-20">
                      AI Try-On Result
                    </div>
                    <Image
                      src="/placeholder.svg?height=500&width=400"
                      alt="Example of AI-generated virtual try-on result showing a person wearing a new outfit"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 z-20">
                  <div className="text-white">
                    <p className="font-medium">See yourself in any outfit instantly</p>
                    <p className="text-sm opacity-80">Powered by AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Fatigue Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                The Shopping Dilemma
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">End the "Should I Buy It?" Struggle</h2>
              <p className="text-xl text-gray-600">
                Customers spend hours wondering if an outfit will look good on them. WearBefore eliminates this mental
                stress by letting you see yourself in the outfit before purchasing, saving time and reducing decision
                fatigue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-red-400 to-red-500"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="rounded-full bg-red-100 p-2 mr-3">
                      <Clock className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>
                    The Problem
                  </h3>
                  <p className="text-gray-600">
                    Hours wasted browsing, comparing, and imagining how clothes might look on you. Mental fatigue from
                    indecision leads to abandoned carts and purchase regret.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <Shirt className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    </div>
                    Our Solution
                  </h3>
                  <p className="text-gray-600">
                    WearBefore's AI instantly shows you wearing the outfit you're considering. No more guesswork or
                    uncertainty – see exactly how it looks on your body.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <ThumbsUp className="h-5 w-5 text-green-500" aria-hidden="true" />
                    </div>
                    The Benefits
                  </h3>
                  <p className="text-gray-600">
                    Make confident decisions in seconds, not hours. Reduce purchase anxiety, eliminate returns, and
                    enjoy stress-free shopping with perfect outfit choices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                Simple Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple steps to see yourself in any outfit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Upload className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Upload your photo</h3>
                  <p className="text-gray-600">
                    Take a selfie or upload an existing photo of yourself to our Telegram bot.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-400"></div>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Shirt className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Upload your outfit</h3>
                  <p className="text-gray-600">Upload the outfit image you want to try on yourself.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. See yourself wearing it!</h3>
                  <p className="text-gray-600">Get a realistic try-on image showing you in the selected outfit.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                Customer Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Users Say</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from people who've transformed their shopping experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Priya S.</h4>
                      <p className="text-sm text-gray-500">Online Shopper</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "I used to spend hours deciding whether to buy clothes online. With WearBefore, I can instantly see
                    how I look in an outfit and make confident decisions in seconds. It's eliminated so much stress from
                    shopping!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Rahul M.</h4>
                      <p className="text-sm text-gray-500">Boutique Owner</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "My customers love being able to see themselves in our outfits before buying. It's reduced our
                    return rate by 40% and increased conversion. People buy with confidence when they can see the
                    results first."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Ananya K.</h4>
                      <p className="text-sm text-gray-500">Wedding Shopper</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Shopping for my wedding was overwhelming until I found WearBefore. I tried on dozens of outfits
                    virtually without the exhaustion of physical shopping. It saved me time, stress, and helped me find
                    the perfect look."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              See It In Action
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Watch How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how WearBefore transforms your shopping experience
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 z-10 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
              <p className="text-gray-600">Video Demo Placeholder</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 rounded-full bg-white/90 shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-blue-500 border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                Perfect For
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Use Cases</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Perfect for anyone who wants to visualize outfits before buying
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <ShoppingBag className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Online Shoppers</h3>
                  <p className="text-gray-600">
                    Try before you buy to avoid returns and make confident purchase decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-400"></div>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Store className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Boutique Owners</h3>
                  <p className="text-gray-600">Help customers visualize your designs and increase sales conversion.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Wedding Outfit Previews</h3>
                  <p className="text-gray-600">
                    See yourself in different wedding outfits before making this important decision.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-pink-400 to-red-400"></div>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fashion Content Creation</h3>
                  <p className="text-gray-600">
                    Create stunning fashion content for social media without physical photoshoots.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              Simple Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Affordable Pricing</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Pay only for what you use with our simple credit system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gray-300 to-gray-400"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="my-4">
                  <span className="text-4xl font-bold">Free</span>
                </div>
                <p className="text-gray-600 mb-6">5 credits on sign-up</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Try the service
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />5 AI try-on images
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    No payment needed
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 border-0"
                >
                  <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="my-4">
                  <span className="text-4xl font-bold">₹49</span>
                </div>
                <p className="text-gray-600 mb-6">5 images</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    High-quality images
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Secure payment via Razorpay
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Instant access
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 border-0"
                >
                  <Link href="/purchase?package=5">Buy Package</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden relative z-10 scale-105">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="absolute -top-5 left-0 right-0 mx-auto w-max px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-medium shadow-md">
                POPULAR
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Standard</h3>
                <div className="my-4">
                  <span className="text-4xl font-bold">₹449</span>
                </div>
                <p className="text-gray-600 mb-6">50 images – ₹9 per image (10% off)</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Everything in Basic
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    50 AI try-on images
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Save ₹51 compared to Basic
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-lg shadow-blue-500/20"
                >
                  <Link href="/purchase?package=50">Buy Package</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <div className="my-4">
                  <span className="text-4xl font-bold">₹799</span>
                </div>
                <p className="text-gray-600 mb-6">100 images – ₹8 per image (20% off)</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Everything in Basic
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    100 AI try-on images
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Save ₹201 compared to Basic
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 border-0"
                >
                  <Link href="/purchase?package=100">Buy Package</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="my-4">
                  <span className="text-4xl font-bold">Bulk</span>
                </div>
                <p className="text-gray-600 mb-6">For high-volume users</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Bulk image generation
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Priority processing
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                    Save big with tailored bulk discounts
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 border-0"
                >
                  <a href="mailto:support@wearbefore.com" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                Got Questions?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about WearBefore
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Is this app free?</h3>
                  <p className="text-gray-600">
                    You get 5 credits free to try it out! After that, you can purchase credits starting at ₹49 for 5
                    images.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-400"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Do I need to download anything?</h3>
                  <p className="text-gray-600">
                    No. It works entirely inside Telegram. Just start a chat with our bot and you're ready to go!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">How realistic are the try-on images?</h3>
                  <p className="text-gray-600">
                    Our AI generates highly realistic images that show how clothes would actually look on you, with
                    proper fit, draping, and lighting.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-pink-400 to-red-400"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">How do I pay for credits?</h3>
                  <p className="text-gray-600">
                    We accept all payment methods including cards, internet banking, UPI, and more through our secure
                    Razorpay payment gateway.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">When will WearBefore be available on WhatsApp?</h3>
                  <p className="text-gray-600">
                    We're working on bringing WearBefore to WhatsApp and as mobile apps for iOS and Android very soon.
                    Stay tuned for updates!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your shopping experience?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of users who are making confident fashion choices with WearBefore.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Try it Now on Telegram
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-white">Wear</span>
                  <span className="text-blue-400">Before</span>
                </h3>
                <p className="text-gray-400">
                  AI-powered virtual try-on service that helps you make confident fashion choices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">
                      Use Cases
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#faqs" className="text-gray-400 hover:text-white transition-colors">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">Need help? Email us at support@wearbefore.com</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/19Mrs6xNKK/?source=wearbefore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/wearbefore?source=wearbefore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/wearbefore?source=wearbefore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>Copyright © {new Date().getFullYear()} WearBefore Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <CreditModal isOpen={isCreditModalOpen} onClose={() => setIsCreditModalOpen(false)} />
      </div>
    </>
  )
}
