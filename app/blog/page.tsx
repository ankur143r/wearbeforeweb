import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Logo } from "@/app/components/logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | WearBefore - Virtual Try-On AI",
  description:
    "Explore articles and guides about virtual try-on technology, fashion tips, and how to get the most out of WearBefore.",
  keywords: "virtual try-on, fashion tech, AI fashion, outfit visualization, fashion blog",
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Women's Outfit Guidelines for Virtual Try-On",
      excerpt:
        "Upload perfect women's outfit images for accurate virtual try-on results. Follow our comprehensive guidelines for best AI rendering.",
      slug: "womens-outfit-guidelines",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG%20image%20482-0RNEGc9KT9lCaJECwTp7upHYGKLDDH.png",
      date: "June 8, 2025",
      category: "Guidelines",
    },
    {
      title: "Men's Outfit Guidelines for Virtual Try-On",
      excerpt:
        "Upload perfect outfit images for accurate virtual try-on results. Follow our men's outfit guidelines for best AI rendering.",
      slug: "mens-outfit-guidelines",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prefer%20full%20buttoned%20zipped%20views%202.jpg-HySiIv2aqy0ndXBwDWIdldMaLciyQa.jpeg",
      date: "June 7, 2025",
      category: "Guidelines",
    },
    {
      title: "Men's Photo Guidelines for Virtual Try-On",
      excerpt: "Learn the do's and don'ts of taking the perfect photo for accurate virtual try-on results.",
      slug: "mens-image-guidelines",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i1-eNn3nHyKUFjhLBe0StPZL7UxDGYk34.png",
      date: "June 6, 2025",
      category: "Guidelines",
    },
    {
      title: "Women's Photo Guidelines for Virtual Try-On",
      excerpt: "Learn the do's and don'ts of taking the perfect photo for accurate virtual try-on results for women.",
      slug: "women-image-guidelines",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%207%2C%202025%2C%2007_11_40%20PM-H1rBapSokQneiL2t00kgN5AdMStY3b.png",
      date: "June 5, 2025",
      category: "Guidelines",
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              WearBefore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore articles and guides about virtual try-on technology, fashion tips, and how to get the most out of
              WearBefore.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Try Virtual Try-On?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the magic of AI-powered virtual try-on on Telegram. Get 5 free credits when you sign up!
            </p>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-lg px-8 py-3"
            >
              <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
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
