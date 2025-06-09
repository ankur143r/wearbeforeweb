import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Smartphone, CheckIcon, XIcon, ArrowRight } from "lucide-react"
import { Logo } from "@/app/components/logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Men's Outfit Guidelines for Virtual Try-On | WearBefore",
  description:
    "Upload perfect outfit images for accurate virtual try-on results. Follow our men's outfit guidelines for best AI rendering.",
  keywords: "men's outfit upload, virtual try-on outfit guide, AI outfit tips, best outfit images for virtual dressing",
  openGraph: {
    title: "Men's Outfit Guidelines for Virtual Try-On | Best Outfit Images for AI Fitting",
    description:
      "Upload perfect outfit images for accurate virtual try-on results. Follow our men's outfit guidelines for best AI rendering.",
    type: "article",
    url: "https://wearbefore.com/blog/mens-outfit-guidelines",
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Outfit Guidelines for Virtual Try-On | Best Outfit Images for AI Fitting",
    description:
      "Upload perfect outfit images for accurate virtual try-on results. Follow our men's outfit guidelines for best AI rendering.",
  },
}

export default function MensOutfitGuidelinesPage() {
  const idealOutfits = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prefer%20full%20buttoned%20zipped%20views%202.jpg-HySiIv2aqy0ndXBwDWIdldMaLciyQa.jpeg",
      alt: "Traditional Indian kurta and trousers - fully buttoned front view for virtual try-on",
      description: "Traditional wear: Fully buttoned kurta with trousers",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use%20front%20facing%20garment%20images%20-%20arms%20on%20sides%202-KrSr232Kduz6JwiMqUESOpACVsBGXm.png",
      alt: "Gray sweater vest over white shirt - front-facing outfit for virtual try-on",
      description: "Smart casual: Gray sweater vest over white shirt",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use%20front%20facing%20garment%20images%20-%20arms%20on%20sides-LUInZkVN5sUCIGUy4CBd1nl21iPLzj.png",
      alt: "Navy blue henley shirt - front-facing garment for virtual try-on",
      description: "Casual wear: Navy blue henley shirt",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prefer%20full%20buttoned%20zipped%20views%201-sGHy98nDU8D5BZtM5EZ8NSeobcRcMq.png",
      alt: "Burgundy quilted jacket fully zipped - ideal outfit for virtual try-on",
      description: "Outerwear: Fully zipped quilted jacket",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use%20front%20facing%20garment%20images%20-%20arms%20on%20sides%203-7mMNrkcBzB0T0Krb63bRoDB5iyupVT.png",
      alt: "Orange traditional kurta with white pants - front-facing outfit for virtual try-on",
      description: "Traditional wear: Orange kurta with white pants",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garment_6579657247_1743390540340.jpg-HdCiMZA1tMv0oJZXrhSuXqWdy78zOS.jpeg",
      alt: "Gray dress shirt fully buttoned - perfect front-facing garment for virtual try-on",
      description: "Formal wear: Gray dress shirt, fully buttoned",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garment_6579657247_1743392949090.jpg-jLXcxiN1PfRQeCRUpC3Et4S8LO4L07.jpeg",
      alt: "Navy blue business suit jacket - ideal front-facing blazer for virtual try-on",
      description: "Business wear: Navy blue suit jacket",
    },
  ]

  const badExamples = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202025%2C%2002_05_39%20AM-aaoGSnEZJtWliMLQ2Ep3BVYtz9Q0R5.png",
      alt: "White shirt on white background - poor contrast for virtual try-on",
      description: "Avoid garments that blend with background",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garments%20with%20dupatta%20draped-GxsjlAKRrCmwDOqDAXiAm9G5xNpwk0.jpeg",
      alt: "Traditional outfit with pink dupatta draped over shoulder - incorrect for virtual try-on",
      description: "Avoid garments with dupatta or folds",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/multilayered%20with%20same%20colors2-TMSHriMaYcyWLcTMlsZgrBYmTpNLaN.jpeg",
      alt: "Burgundy 3-piece suit with same color blazer and waistcoat - difficult for AI to distinguish",
      description: "Avoid same-color blazer + waistcoat combinations",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garments%20with%20complex%20pattern%20like%20dhoti-gAenYdFEG5oov0tHTWvawBy7nBhX0P.png",
      alt: "Traditional dhoti with complex draping - difficult garment for virtual try-on",
      description: "Avoid complex draped bottoms (dhoti)",
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
              Outfit Guidelines
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Men's Outfit Guidelines for Virtual Try-On
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload the perfect outfit images for accurate virtual try-on results with these do's and don'ts.
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
              What Makes a Good Outfit Image?
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
                    ✅ Do's – Men's Ideal Outfit Upload Tips
                  </h3>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Left side - Bullet points */}
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Use front-facing garment images</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Prefer full buttoned/zipped views</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Use white/plain backgrounds</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Keep lighting even & flat</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Choose solid, mid-tone colors</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right side - Images */}
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Perfect Examples:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {idealOutfits.slice(0, 6).map((outfit, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <Image
                              src={outfit.src || "/placeholder.svg"}
                              alt={outfit.alt}
                              width={150}
                              height={200}
                              className="w-full h-auto object-contain rounded-lg shadow-md"
                              priority={index < 2}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex justify-center">
                        <Image
                          src={idealOutfits[6].src || "/placeholder.svg"}
                          alt={idealOutfits[6].alt}
                          width={150}
                          height={200}
                          className="w-32 sm:w-1/2 h-auto object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-xs text-green-600 mt-2 italic text-center">
                        Notice: Front-facing garments, fully buttoned/zipped, plain backgrounds, and good lighting.
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
                    ❌ Don'ts – Common Mistakes to Avoid
                  </h3>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Left side - Bullet points */}
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>
                            Color of garment should not blend with background (like white shirt with white background)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Avoid garments which have dupatta or folds</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Same-colour blazer + waistcoat combinations</span>
                        </li>
                        <li className="flex items-start">
                          <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Complex draped bottoms (dhoti)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right side - Bad Examples Images */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Examples to Avoid:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {badExamples.map((outfit, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <Image
                              src={outfit.src || "/placeholder.svg"}
                              alt={outfit.alt}
                              width={150}
                              height={200}
                              className="w-full h-auto object-contain rounded-lg shadow-md"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-red-600 mt-2 italic text-center">
                        These outfit types and compositions will result in poor virtual try-on results.
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
              <h3 className="text-2xl font-bold mb-4">Ready to Upload Your Outfit?</h3>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">
                    <Link href="/blog/mens-image-guidelines" className="text-blue-600 hover:underline">
                      Men's Photo Guidelines for Virtual Try-On
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn how to take the perfect photo of yourself for accurate virtual try-on results.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">
                    <Link href="/blog/women-image-guidelines" className="text-blue-600 hover:underline">
                      Women's Photo Guidelines for Virtual Try-On
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-600">
                    Guidelines for women on taking the perfect photo for virtual try-on.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-gray-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-500">Women's Outfit Guidelines</h4>
                  <p className="text-sm text-gray-500">
                    Coming soon! Guidelines for uploading women's outfits for virtual try-on.
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
