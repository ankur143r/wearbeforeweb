import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const isTelegramBrowser = /Telegram/i.test(ua) || /TDesktop/i.test(ua);
  const url = req.nextUrl.clone();
  const isTelegramSource = url.searchParams.get("source") === "telegram";

  // only redirect when in-Telegram AND we explicitly got ?source=telegram
  if (isTelegramBrowser && isTelegramSource) {
    return new Response(null, {
      status: 302,
      headers: { Location: url.href },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
