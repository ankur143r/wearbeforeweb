import Link from "next/link"

export function Logo({ isLink = true }: { isLink?: boolean }) {
  const logoContent = (
    <div className="font-bold text-2xl">
      <span className="text-white">Wear</span>
      <span className="text-blue-500">Before</span>
    </div>
  )

  if (isLink) {
    return (
      <Link href="/" className="flex items-center gap-2">
        {logoContent}
      </Link>
    )
  }

  return <div className="flex items-center gap-2">{logoContent}</div>
}
