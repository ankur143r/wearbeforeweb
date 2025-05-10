"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Settings, Check } from "lucide-react"
import Link from "next/link"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  // Check if consent has been given previously
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // No consent stored, show the banner
      setIsOpen(true)
    } else {
      // Parse stored preferences
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)

        // Apply cookie preferences
        applyPreferences(savedPreferences)
      } catch (e) {
        console.error("Error parsing cookie consent:", e)
        setIsOpen(true)
      }
    }
  }, [])

  const applyPreferences = (prefs: CookiePreferences) => {
    // Apply Google Analytics if enabled
    if (prefs.analytics) {
      enableGoogleAnalytics()
    } else {
      disableGoogleAnalytics()
    }

    // Apply Meta Pixel if enabled
    if (prefs.marketing) {
      enableMetaPixel()
    } else {
      disableMetaPixel()
    }
  }

  const enableGoogleAnalytics = () => {
    // This is a placeholder - you would implement actual GA initialization here
    console.log("Google Analytics enabled")
    // Example: window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  }

  const disableGoogleAnalytics = () => {
    // This is a placeholder - you would implement actual GA disabling here
    console.log("Google Analytics disabled")
    // Example: window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
  }

  const enableMetaPixel = () => {
    // This is a placeholder - you would implement actual Meta Pixel initialization here
    console.log("Meta Pixel enabled")
    // Example: window.fbq('consent', 'grant');
  }

  const disableMetaPixel = () => {
    // This is a placeholder - you would implement actual Meta Pixel disabling here
    console.log("Meta Pixel disabled")
    // Example: window.fbq('consent', 'revoke');
  }

  const handleAcceptAll = () => {
    const allEnabled = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allEnabled)
    localStorage.setItem("cookie-consent", JSON.stringify(allEnabled))
    applyPreferences(allEnabled)
    setIsOpen(false)
  }

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(necessaryOnly)
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly))
    applyPreferences(necessaryOnly)
    setIsOpen(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    applyPreferences(preferences)
    setIsOpen(false)
    setShowPreferences(false)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Can't toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const openConsentManager = () => {
    setIsOpen(true)
    setShowPreferences(true)
  }

  if (!isOpen) {
    return (
      <button
        onClick={openConsentManager}
        className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg z-50 hover:bg-gray-700"
        aria-label="Cookie Settings"
      >
        <Settings className="h-5 w-5" />
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/20 flex items-end sm:items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Cookie Preferences</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>

            {showPreferences ? (
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div>
                    <h3 className="font-medium">Necessary Cookies</h3>
                    <p className="text-sm text-gray-500">Required for the website to function properly</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Required</div>
                </div>

                <div
                  className={`flex items-center justify-between p-3 ${preferences.analytics ? "bg-blue-50" : "bg-gray-50"} rounded-md cursor-pointer`}
                  onClick={() => togglePreference("analytics")}
                >
                  <div>
                    <h3 className="font-medium">Analytics Cookies</h3>
                    <p className="text-sm text-gray-500">
                      Help us improve our website by collecting anonymous usage data
                    </p>
                  </div>
                  <div
                    className={`w-10 h-6 rounded-full relative ${preferences.analytics ? "bg-blue-500" : "bg-gray-300"}`}
                  >
                    <span
                      className={`absolute top-1 transition-transform ${preferences.analytics ? "right-1 translate-x-0" : "left-1 -translate-x-0"} w-4 h-4 bg-white rounded-full`}
                    ></span>
                  </div>
                </div>

                <div
                  className={`flex items-center justify-between p-3 ${preferences.marketing ? "bg-blue-50" : "bg-gray-50"} rounded-md cursor-pointer`}
                  onClick={() => togglePreference("marketing")}
                >
                  <div>
                    <h3 className="font-medium">Marketing Cookies</h3>
                    <p className="text-sm text-gray-500">Used to track you across websites for marketing purposes</p>
                  </div>
                  <div
                    className={`w-10 h-6 rounded-full relative ${preferences.marketing ? "bg-blue-500" : "bg-gray-300"}`}
                  >
                    <span
                      className={`absolute top-1 transition-transform ${preferences.marketing ? "right-1 translate-x-0" : "left-1 -translate-x-0"} w-4 h-4 bg-white rounded-full`}
                    ></span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Read our{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                to learn more about how we use cookies.
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {showPreferences ? (
              <Button onClick={handleSavePreferences} className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Check className="mr-2 h-4 w-4" /> Save Preferences
              </Button>
            ) : (
              <>
                <Button onClick={handleAcceptAll} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Accept All
                </Button>
                <Button onClick={() => setShowPreferences(true)} variant="outline" className="flex-1">
                  Customize
                </Button>
                <Button onClick={handleAcceptNecessary} variant="outline" className="flex-1">
                  Necessary Only
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
