import Link from "next/link"
import { Logo } from "./logo"

export default function Nav() {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo isLink={true} />
        <div className="flex gap-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/purchase" className="text-gray-700 hover:text-blue-600">
            Buy Credits
          </Link>
        </div>
      </div>
    </nav>
  )
}
