"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Logo } from "./logo"

export function TelegramBrowserCheck({ children }: { children: React.ReactNode }) {
  const [isFromTelegram, setIsFromTelegram] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [isAndroid, setIsAndroid] = useState(false)

  useEffect(() => {
    // Detect platform
    const isAndroidDevice = /Android/i.test(navigator.userAgent)
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    setIsAndroid(isAndroidDevice)

    // Get the source parameter from the URL
    const urlParams = new URLSearchParams(window.location.search)
    const source = urlParams.get("source")
    const isTelegramSource = source === "telegram"

    // Log for debugging
    alert(
      "TelegramBrowserCheck Debug:\\n" +
        "userAgent: " +
        navigator.userAgent +
        "\\n" +
        "source: " +
        source +
        "\\n" +
        "isFromTelegram: " +
        isTelegramSource +
        "\\n" +
        "isAndroid: " +
        isAndroidDevice +
        "\\n" +
        "isIOS: " +
        isIOS,
    )

    // Only show the fallback message on iOS if source=telegram is present
    if (isTelegramSource && isIOS) {
      setIsFromTelegram(true)
      setIsChecking(false)
    } else {
      setIsFromTelegram(false)
      setIsChecking(false)
    }
  }, [])

  // Clean URL for redirect (remove source parameter)
  const cleanUrl = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete("source")
    return url.toString()
  }

  if (isChecking) {
    return <div>Loading...</div>
  }

  if (!isFromTelegram) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <Logo isLink={false} />
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-md mx-auto shadow-xl">
          <h1 className="text-2xl font-bold mb-4">Please Open in {isAndroid ? "Chrome" : "Safari"}</h1>

          <div className="mb-6">
            <p className="mb-4">
              For the best experience with WearBefore, please open this website in {isAndroid ? "Chrome" : "Safari"}.
            </p>

            <div className="bg-black/20 p-4 rounded-lg text-left mb-6">
              <p className="font-medium mb-2">How to open in {isAndroid ? "Chrome" : "Safari"}:</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>
                  Tap the <strong>⋮</strong> (three dots) in the top-right corner
                </li>
                <li>
                  Select <strong>"Open in {isAndroid ? "Chrome" : "Safari"}"</strong>
                </li>
              </ol>
            </div>
          </div>

          <a
            href={cleanUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-lg"
          >
            Open in {isAndroid ? "Chrome" : "Safari"} <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          WearBefore works best in {isAndroid ? "Chrome" : "Safari"} for optimal performance and features.
        </p>
      </div>
    </div>
  )
}
