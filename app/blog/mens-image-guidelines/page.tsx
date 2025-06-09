import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Smartphone, CheckIcon, XIcon, ArrowRight } from "lucide-react"
import { Logo } from "@/app/components/logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Photo Guidelines for Virtual Try-On | WearBefore",
  description:
    "Upload perfect photos for accurate virtual try-on results. Follow our image guidelines for best AI outfit rendering.",
  keywords: "virtual try-on, photo upload guide, AI try-on tips, best photo for virtual dressing, try-on image guide",
  openGraph: {
    title: "Men's Photo Guidelines for Virtual Try-On | Best Image Types for AI Outfit Fitting",
    description:
      "Upload perfect photos for accurate virtual try-on results. Follow our image guidelines for best AI outfit rendering.",
    type: "article",
    url: "https://wearbefore.com/blog/mens-image-guidelines",
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Photo Guidelines for Virtual Try-On | Best Image Types for AI Outfit Fitting",
    description:
      "Upload perfect photos for accurate virtual try-on results. Follow our image guidelines for best AI outfit rendering.",
  },
}

export default function MensImageGuidelinesPage() {
  const idealPhotos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i1-eNn3nHyKUFjhLBe0StPZL7UxDGYk34.png",
      alt: "Man in gray t-shirt and dark jeans - ideal casual photo for virtual try-on",
      description: "Casual wear: Gray t-shirt and dark jeans",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i2-kyQDe6a3z2g0r7xfvJeCm0tgYrVNPt.png",
      alt: "Man in black t-shirt and yellow pants - ideal casual photo for virtual try-on",
      description: "Casual wear: Black t-shirt and yellow pants",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i3-Y5l8BhXwZdgbbLvUgQ1L68YXG2Y28a.png",
      alt: "Professional man in light blue dress shirt and dark trousers - ideal business photo for virtual try-on",
      description: "Business attire: Light blue dress shirt and dark trousers",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i4-47sWGSrbfk05VhuftcBPDyIXvH4hWY.png",
      alt: "Man in light blue shirt and dark jeans - ideal casual professional photo for virtual try-on",
      description: "Casual professional: Light blue shirt and dark jeans",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i5-NpmgRjb5C2R4uXa2dcIQjHtrL20GgW.png",
      alt: "Man in dark blazer with burgundy shirt and olive pants - ideal smart casual photo for virtual try-on",
      description: "Smart casual: Dark blazer with burgundy shirt and olive pants",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i6-NAvf4oMo2aqjMLtVgAb9pVHAvVVUww.png",
      alt: "Man in light blue shirt with brown belt and khaki chinos - ideal smart casual photo for virtual try-on",
      description: "Smart casual: Light blue shirt with khaki chinos",
    },
  ]

  const badExamples = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2001_06_34%20AM-A7orpcilcRFnADMv4mg0IcX0stdd8F.png",
      alt: "Man pointing at camera - incorrect pose for virtual try-on",
      description: "Avoid pointing or gesturing at camera",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2011_36_37%20AM-010qCFRLpwtyPj7OVmpDw9pWfPlZv6.png",
      alt: "Man with sunglasses and leather jacket - incorrect accessories and overlapping garments",
      description: "Avoid sunglasses and overlapping garments",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2018%2C%202025%2C%2002_01_24%20AM-BGzUYTUPmpqgwqNofFNdfeK2mqHDj4.png",
      alt: "Man with crossed legs and hands in pockets - incorrect posture for virtual try-on",
      description: "Avoid crossed legs and hands in pockets",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2011_02_58%20AM-zNL7MpJEc1ZBLASCNICsvPmnyO5htZ.png",
      alt: "Group photo with multiple people - incorrect for virtual try-on",
      description: "No group photos - one person only",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2011_07_59%20AM-VDXhnU8rapdgisbdD0l4cZU9wyTlzQ.png",
      alt: "Child photo - not suitable for virtual try-on",
      description: "AI not optimized for children's photos",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2011_15_22%20AM-OXKaXaeHgjhu7v7lB3cCP9zvzX9iK1.png",
      alt: "Man in loose overcoat - incorrect outerwear for virtual try-on",
      description: "Avoid loose/flowy outerwear like coats",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2006_14_02%20PM-gbvQCWLxnZQKK51ToiZLfMxVrcGKZb.png",
      alt: "Man with folded arms, cap and sunglasses - incorrect pose and accessories",
      description: "Avoid folded arms and accessories",
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
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              Photo Guidelines
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Men's Photo Guidelines for Virtual Try-On
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
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-lg"
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
                    ✅ Do's – Men's Ideal Try-On Photo Tips
                  </h3>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Left side - Bullet points */}
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Full body or three-quarter shot</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Hands relaxed at sides</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Front-facing pose, head straight</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Well-lit, evenly exposed image</span>
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
                          <span>Single person in frame</span>
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
                          <span>Accessories like caps, sunglasses</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Overlapping garments (e.g., jacket over similar colored shirt)</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Loose or flowy clothing like trench coats</span>
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
                          <span>Folded arms (blocks body shape recognition)</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Wearing traditional clothes if trying modern garments (and vice versa)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right side - Bad Examples Images */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Examples to Avoid:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-center text-white shadow-xl">
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
            <p className="text-gray-600">More helpful guides coming soon!</p>
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
