import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, XCircle, ArrowRight } from "lucide-react"
import { Logo } from "@/app/components/logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Women's Outfit Guidelines for Virtual Try-On | WearBefore",
  description:
    "Learn how to upload perfect women's outfit images for accurate virtual try-on results. Follow our comprehensive guidelines for best AI rendering.",
  keywords: "women's outfit guidelines, virtual try-on, fashion AI, outfit photography, women's clothing tips",
}

export default function WomensOutfitGuidelinesPage() {
  const idealOutfits = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG%20image%20482-0RNEGc9KT9lCaJECwTp7upHYGKLDDH.png",
      alt: "Pink striped traditional kurta set - front-facing with clean background",
      description: "Traditional Indian wear with clean presentation",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG%20image%20452-PHqKOGrz961VpP2J0lgb7hRnt8KpX6.png",
      alt: "White crop top with gray wide-leg trousers - perfect front-facing pose",
      description: "Modern casual wear with ideal lighting",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG%20image%20515-YXWhoyNJneLWWck7qTzR8YY1q2VJv6.png",
      alt: "Teal floral jumpsuit - excellent single-piece garment example",
      description: "Floral jumpsuit with clean background",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG%20image%20509-eckL9licxyXcGAAKpnaIIMgApHLUDf.png",
      alt: "Mustard wrap top with black culottes - professional presentation",
      description: "Professional wear with perfect contrast",
    },
  ]

  const badExamples = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rpxCMSdCK2hHoHGBqdL2yXEwb7W0K3.png",
      alt: "Avoid bulky jackets, dupattas, scarves, or overlapping layers",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20034924-xYTEBVWVsOE71vscLWGMkkOgjOz25k.png",
      alt: "Avoid hands visible holding items and accessories",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20035403-saaSgpdcBaMbGCP4vKBuhzhML6rKEZ.png",
      alt: "Avoid busy backgrounds and model poses that obscure garment shape",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20231352-AWoifX21PYQDyBPSYV5KiJpluRwPEW.png",
      alt: "Avoid images with price, brand, or offer tags",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20231846-kZFGwg3bTGKiJlFQFjgktF56rVzlBo.png",
      alt: "Avoid model poses that obscure garment shape",
    },
  ]

  const relatedArticles = [
    {
      title: "Men's Outfit Guidelines for Virtual Try-On",
      excerpt:
        "Upload perfect outfit images for accurate virtual try-on results. Follow our men's outfit guidelines for best AI rendering.",
      slug: "mens-outfit-guidelines",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prefer%20full%20buttoned%20zipped%20views%202.jpg-HySiIv2aqy0ndXBwDWIdldMaLciyQa.jpeg",
    },
    {
      title: "Men's Photo Guidelines for Virtual Try-On",
      excerpt: "Learn the do's and don'ts of taking the perfect photo for accurate virtual try-on results.",
      slug: "mens-image-guidelines",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i1-eNn3nHyKUFjhLBe0StPZL7UxDGYk34.png",
    },
    {
      title: "Women's Photo Guidelines for Virtual Try-On",
      excerpt: "Learn the do's and don'ts of taking the perfect photo for accurate virtual try-on results for women.",
      slug: "women-image-guidelines",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2007_11_40%20PM-H1rBapSokQneiL2t00kgN5AdMStY3b.png",
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Women's Outfit Guidelines</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-4">
              Women's Guidelines
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Women's Outfit Guidelines for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Virtual Try-On
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Upload perfect outfit images for accurate virtual try-on results. Follow our comprehensive guidelines for
              best AI rendering.
            </p>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0 text-lg px-8 py-3"
            >
              <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                Try Virtual Try-On Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Do's Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h2 className="text-3xl font-bold text-green-700">Do's - Perfect Outfit Images</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {idealOutfits.map((outfit, index) => (
                  <Card key={index} className="border-2 border-green-200 hover:border-green-300 transition-colors">
                    <CardContent className="p-4">
                      <Image
                        src={outfit.src || "/placeholder.svg"}
                        alt={outfit.alt}
                        width={250}
                        height={300}
                        className="w-full h-80 object-contain rounded-lg bg-gray-50"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Follow These Guidelines:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Preferred garment images:</strong> front-facing, closed zips/buttons, single visible
                        layer
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Keep lighting even and flat</strong> - avoid harsh shadows or uneven illumination
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Background should be plain and uncluttered</strong> - white, gray, or neutral colors
                        work best
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>No accessories like bags, hats etc</strong> - keep the focus on the main garment
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Clear high resolution photo</strong> - ensure garment details are visible and sharp
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Don'ts Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="h-8 w-8 text-red-500" />
                <h2 className="text-3xl font-bold text-red-700">Don'ts - Avoid These Mistakes</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
                {badExamples.map((example, index) => (
                  <Card key={index} className="border-2 border-red-200 hover:border-red-300 transition-colors">
                    <CardContent className="p-4">
                      <Image
                        src={example.src || "/placeholder.svg"}
                        alt={example.alt}
                        width={250}
                        height={300}
                        className="w-full h-80 object-contain rounded-lg bg-gray-50"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">❌ Avoid These Common Mistakes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Avoid bulky jackets, dupattas, scarves, or overlapping layers</strong> - they confuse
                        garment overlays
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Avoid same-color layers</strong> (top + shrug in same shade) - makes it hard to
                        distinguish garments
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>No busy backgrounds or harsh shadows</strong> - they interfere with AI processing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Avoid photos taken at an angle</strong> - front-facing shots work best for virtual
                        try-on
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Avoid hands visible holding items</strong> - keep hands naturally positioned or hidden
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Avoid Model poses that obscure garment shape</strong> - sitting, leaning, or hand
                        positions that hide garment details
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Image shouldn't have Price, brand, or offer tags</strong> - remove all promotional text
                        and labels
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-16">
              <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Try Virtual Try-On?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Now that you know how to upload perfect outfit images, experience the magic of AI-powered virtual
                    try-on on Telegram!
                  </p>
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0 text-lg px-8 py-3"
                  >
                    <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                      Start Virtual Try-On
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Related Articles */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Related Guidelines</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-6">
                        <h4 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <Link href={`/blog/${article.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
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
