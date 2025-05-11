import Link from "next/link"

interface LogoProps {
  isLink?: boolean
}

export function Logo({ isLink = true }: LogoProps) {
  const content = (
    <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      WearBefore
    </span>
  )

  if (isLink) {
    return <Link href="/">{content}</Link>
  }

  return content
}
