import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Smartphone, CheckIcon, XIcon, ArrowRight } from "lucide-react"
import { Logo } from "@/app/components/logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Photo Guidelines for Women's Virtual Try-On | WearBefore",
  description:
    "Upload perfect photos for accurate virtual try-on results. Follow our women's image guidelines for best AI outfit rendering.",
  keywords:
    "women virtual try-on, photo upload guide, AI try-on tips, best photo for virtual dressing, women try-on image guide",
  openGraph: {
    title: "Women's Photo Guidelines for Virtual Try-On | Best Image Types for AI Outfit Fitting",
    description:
      "Upload perfect photos for accurate virtual try-on results. Follow our women's image guidelines for best AI outfit rendering.",
    type: "article",
    url: "https://wearbefore.com/blog/women-image-guidelines",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Photo Guidelines for Virtual Try-On | Best Image Types for AI Outfit Fitting",
    description:
      "Upload perfect photos for accurate virtual try-on results. Follow our women's image guidelines for best AI outfit rendering.",
  },
}

export default function WomensImageGuidelinesPage() {
  const idealPhotos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2007_11_40%20PM-H1rBapSokQneiL2t00kgN5AdMStY3b.png",
      alt: "Woman in olive green tank top and cream shorts - ideal casual photo for virtual try-on",
      description: "Casual wear: Olive tank top and cream shorts",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2006_55_48%20PM-1rmgebyahC1uUtHeCwM0Jdk8H7DvOy.png",
      alt: "Woman in black t-shirt and blue jeans - ideal casual photo for virtual try-on",
      description: "Casual wear: Black t-shirt and blue jeans",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2007_02_05%20PM-55QubZxzOxNJGfA2zJomSpx3Y3tIXY.png",
      alt: "Woman in brown traditional outfit - ideal ethnic wear photo for virtual try-on",
      description: "Traditional wear: Brown kurta and pants",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2007_08_51%20PM-cvrAxILut1hXnBTYhqWzrUdUWGVKxu.png",
      alt: "Woman in brown tank top and blue jeans - ideal casual photo for virtual try-on",
      description: "Casual wear: Brown tank top and blue jeans",
    },
  ]

  const badExamples = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202025%2C%2012_23_14%20AM-0k25wHkmobMpElImkYrG7mMxwVciyw.png",
      alt: "Woman in traditional outfit with dupatta covering clothes - incorrect for virtual try-on",
      description: "Avoid fabric/dupatta covering outfit details",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202025%2C%2001_02_22%20AM-rarxANPnD1t9n3lgUwqBa4zl0W5Klh.png",
      alt: "Woman looking down with hair covering her top - incorrect for virtual try-on",
      description: "Avoid hair covering clothes",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202025%2C%2012_10_01%20AM-T1x3pULQMdBbodCXDQPCySkTn5oWKj.png",
      alt: "Woman with hair covering part of her outfit - incorrect for virtual try-on",
      description: "Avoid hair obscuring clothing",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202025%2C%2012_12_08%20AM-7TYXhfCDV1U0lL2ynwWi3FVufrC3AL.png",
      alt: "Woman in saree with hand covering outfit - incorrect pose for virtual try-on",
      description: "Avoid hands covering outfit details",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202025%2C%2012_14_06%20AM-O33qlCxrkndL67X7pefqcek0A50Sbw.png",
      alt: "Woman with hand on hip covering dress silhouette - incorrect pose",
      description: "Avoid dramatic poses that hide clothing",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2030%2C%202025%2C%2011_41_10%20PM-radq5MVn1uA3IDefzXTvqXkgVcIlH4.png",
      alt: "Woman with handbag in front of outfit - object covering clothes",
      description: "Avoid objects covering outfit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202025%2C%2012_59_37%20AM-fZUZycvevS5krKx5QYnsvT8za7n2Hw.png",
      alt: "Woman with flowing hair covering her top - incorrect for virtual try-on",
      description: "Avoid flowing hair covering clothes",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2030%2C%202025%2C%2011_43_39%20PM-z4cA38deX9bZbRuOs0RpdNpuIFmOib.png",
      alt: "Woman with dupatta covering outfit details - incorrect for virtual try-on",
      description: "Avoid fabric covering clothing details",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
            </nav>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0"
            >
              <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                Try Now
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-4">
              Photo Guidelines
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Women's Photo Guidelines for Virtual Try-On
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure your try-on experience is accurate with these do's and don'ts for photo submissions.
            </p>
          </div>

          {/* Try Now CTA */}
          <div className="text-center mb-12">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0 shadow-lg"
            >
              <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-5 w-5" />
                Try Virtual Try-On Now
              </a>
            </Button>
          </div>

          {/* Written Summary */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              What Makes a Good Try-On Photo?
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Left Column - Do's Section with Images */}
              <Card className="border-0 shadow-lg bg-green-50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-green-700">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                    </div>
                    ✅ Do's – Women's Ideal Try-On Photo Tips
                  </h3>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Left side - Bullet points */}
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Full-body or three-quarter shot</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Hands relaxed at sides</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Face the camera with head straight</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Well-lit with even exposure</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Plain background (preferably light)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No accessories like sunglasses or caps</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Wear fitted clothing</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Only one person in the frame</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right side - Images */}
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Perfect Examples:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {idealPhotos.map((photo, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <Image
                              src={photo.src || "/placeholder.svg"}
                              alt={photo.alt}
                              width={200}
                              height={300}
                              className="w-full h-auto object-contain rounded-lg shadow-md"
                              priority={index < 3}
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-green-600 mt-2 italic text-center">
                        Notice: Front-facing poses, relaxed hands, plain backgrounds, good lighting, and fitted
                        clothing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Column - Don'ts Section with Images */}
              <Card className="border-0 shadow-lg bg-red-50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-red-400 to-red-500"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-red-700">
                    <div className="rounded-full bg-red-100 p-2 mr-3">
                      <XIcon className="h-5 w-5 text-red-600" />
                    </div>
                    ❌ Dont's – Common Mistakes to Avoid
                  </h3>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Left side - Bullet points */}
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Crossed legs or leaning postures</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Accessories like caps, sunglasses, or large jewelry</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Overlapping garments (e.g., jacket over similar colored top)</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Loose or flowy clothing like maxi dresses or capes</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Images taken from extreme angles or tilted views</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Group photos or partial bodies</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Children's pictures (AI not optimized for kids yet)</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Folded arms or hands on hips (blocks body shape recognition)</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Wearing traditional clothes if trying modern garments (and vice versa)</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No hair, object or accessories like handbags in front of clothes</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Footwear shouldn't be hidden behind the dress and should be clearly visible</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right side - Bad Examples Images */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Examples to Avoid:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {badExamples.map((photo, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <Image
                              src={photo.src || "/placeholder.svg"}
                              alt={photo.alt}
                              width={200}
                              height={300}
                              className="w-full h-auto object-contain rounded-lg shadow-md"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-red-600 mt-2 italic text-center">
                        These poses, accessories, and compositions will result in poor virtual try-on results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-center text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Try Virtual Try-On?</h3>
              <p className="text-lg mb-6">Follow these guidelines and get the most accurate virtual try-on results!</p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Start Virtual Try-On
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">
                    <Link href="/blog/mens-image-guidelines" className="text-blue-600 hover:underline">
                      Men's Photo Guidelines for Virtual Try-On
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn the do's and don'ts of taking the perfect photo for accurate virtual try-on results for men.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-gray-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-500">More guides coming soon!</h4>
                  <p className="text-sm text-gray-500">
                    We're working on more helpful guides about virtual try-on and fashion tips.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

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
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
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
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>Copyright © {new Date().getFullYear()} WearBefore Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
