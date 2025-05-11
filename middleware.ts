import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || ""
  console.log("Middleware: userAgent =", userAgent)
  const isTelegram = /Telegram/i.test(userAgent) || /TDesktop/i.test(userAgent)
  console.log("Middleware: isTelegram =", isTelegram)
  if (isTelegram) {
    const url = req.nextUrl.href
    console.log("Middleware: Redirecting from Telegram to", url)
    return new Response(null, {
      status: 302,
      headers: {
        Location: url,
      },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
