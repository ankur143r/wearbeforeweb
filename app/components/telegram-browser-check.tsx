"use client"

import { useEffect, useState } from "react"
import type React from "react"

export function TelegramBrowserCheck({ children }: { children: React.ReactNode }) {
  const [isTelegram, setIsTelegram] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [hasSafari, setHasSafari] = useState(false)

  useEffect(() => {
    // Check if we're in Telegram's WebView
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    const isAndroid = /Android/i.test(navigator.userAgent)
    const isWebView =
      navigator.userAgent.includes("Mobile") &&
      (window.navigator.standalone === undefined ||
        window.innerWidth < 768 ||
        (document.referrer === "" && window.ontouchstart !== undefined) ||
        window.matchMedia("(display-mode: standalone)").matches === false)

    const isTelegramBrowser =
      /Telegram/i.test(navigator.userAgent) ||
      /TelegramWebView/i.test(navigator.userAgent) ||
      /TDesktop/i.test(navigator.userAgent) ||
      window.Telegram?.WebApp ||
      window.TelegramWebview ||
      window.Telegram ||
      !!window.TelegramWebAppInitData ||
      (isIOS && isWebView)

    // Check if Safari is available
    const hasSafariAvailable = isIOS && !isWebView

    // Removed debug alert

    setIsTelegram(isTelegramBrowser)
    setHasSafari(hasSafariAvailable)
    setIsChecking(false)
  }, [])

  if (isChecking) {
    return <div>Loading...</div>
  }

  if (!isTelegram) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">WearBefore</h1>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-md mx-auto shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Please Open in Browser</h2>

          <div className="mb-6">
            <p className="mb-4">
              For the best experience with WearBefore, please open this website in your device's web browser.
            </p>

            <div className="bg-black/20 p-4 rounded-lg text-left mb-6">
              <p className="font-medium mb-2">How to open in browser:</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>
                  Tap the <strong>⋮</strong> (three dots) in the top-right corner
                </li>
                <li>
                  Select <strong>"Open in {hasSafari ? "Safari" : "Browser"}"</strong>
                </li>
              </ol>
            </div>
          </div>

          <a
            href="https://t.me/myfashiobot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-lg"
          >
            Try WearBefore on Telegram
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          WearBefore works best in a full web browser for optimal performance and features.
        </p>
      </div>
    </div>
  )
}
