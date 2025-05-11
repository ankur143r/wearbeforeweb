"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, Loader2, Plus, Minus, ArrowRight } from "lucide-react"
import { initializePayment } from "@/app/actions/payment-actions"
import Link from "next/link"
import { PurchaseSEO } from "./seo"

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function PurchasePage() {
  const searchParams = useSearchParams()

  // Get parameters from URL
  const defaultTgId = searchParams.get("tg_id") || ""
  const urlUserId = searchParams.get("user_id") || ""
  const urlUsername = searchParams.get("username") || ""
  const urlFirstName = searchParams.get("first_name") || ""
  const urlLastName = searchParams.get("last_name") || ""

  // Determine telegram ID/username to use (user_id takes precedence)
  const defaultTelegramValue = urlUserId || urlUsername || defaultTgId

  // User info form state
  const [firstName, setFirstName] = useState(urlFirstName)
  const [lastName, setLastName] = useState(urlLastName)
  const [email, setEmail] = useState("")
  const [telegramId, setTelegramId] = useState(defaultTelegramValue)

  // Package selection state
  const [selectedImages, setSelectedImages] = useState(5)
  const [isCustomSelected, setCustomSelected] = useState(false)
  const [customAmount, setCustomAmount] = useState(1)

  // Control enabling of package UI
  const [formComplete, setFormComplete] = useState(false)

  // Payment state
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)

  useEffect(() => {
    // Load Razorpay SDK
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => setRazorpayLoaded(true)
    document.body.appendChild(script)
  }, [])

  const totalImages = isCustomSelected ? customAmount * 5 : selectedImages
  const totalPrice = (() => {
    const base = totalImages * 10
    if (totalImages >= 100) return Math.round(base * 0.8)
    if (totalImages >= 50) return Math.round(base * 0.9)
    return base
  })()

  const handleContinue = () => {
    if (firstName && lastName && email && telegramId) {
      setFormComplete(true)
    }
  }

  const handlePackageSelect = (images: number) => {
    setCustomSelected(false)
    setSelectedImages(images)
  }
  const handleCustomSelect = () => setCustomSelected(true)
  const handleIncrement = () => setCustomAmount((prev) => prev + 1)
  const handleDecrement = () => setCustomAmount((prev) => Math.max(1, prev - 1))

  async function handlePayment() {
    setIsLoading(true)
    setError("")
    try {
      if (!razorpayLoaded || !window.Razorpay) {
        // Only show error for Razorpay not loading, not for payment failures
        setError("Payment gateway is not ready. Please try again.")
        setIsLoading(false)
        return
      }

      const paymentOptions = await initializePayment({
        amount: totalPrice,
        telegramId: telegramId.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        credits: totalImages,
      })

      if (!paymentOptions.success) {
        // Only show error for initialization failures, not for payment failures
        setError(paymentOptions.error || "Failed to initialize payment")
        setIsLoading(false)
        return
      }

      const rzp = new window.Razorpay({
        ...paymentOptions,
        // Add handler for payment success
        handler: (response) => {
          console.log("Payment successful:", response)
          // Redirect to Telegram bot
          window.location.href = "https://t.me/myfashiobot"
        },
      })

      // Handle payment failure - just log to console, don't show error message
      rzp.on("payment.failed", () => {
        // Simply log that payment failed without accessing error details
        console.log("Payment failed or was cancelled")
        setIsLoading(false)
      })

      rzp.open()
    } catch (err) {
      console.error("Payment error:", err)
      // Only show error for unexpected errors, not for payment failures
      setError("An unexpected error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <>
      <PurchaseSEO />
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto p-6">
          <Card className="p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">Purchase Image Credits</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your first name"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your last name"
                  aria-required="true"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email address"
                  aria-required="true"
                />
                <p className="text-sm text-gray-500 mt-1">
                  (This is the email where your payment receipt will be sent.)
                </p>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="telegramId" className="block text-sm font-medium mb-1">
                  Enter the Telegram username or ID you want to recharge
                </label>
                <input
                  type="text"
                  id="telegramId"
                  value={telegramId}
                  onChange={(e) => setTelegramId(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="e.g., @username or 123456789"
                  aria-required="true"
                />
                <p className="text-sm text-gray-500 mt-1">To find your user ID, check out @userinfobot on Telegram.</p>
              </div>
            </div>
            <div className="mt-6">
              <Button
                onClick={handleContinue}
                disabled={!firstName || !lastName || !email || !telegramId}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md"
                aria-label="Continue to select package"
              >
                Continue to select package
              </Button>
            </div>
          </Card>

          {/* Package Selector & Checkout */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${!formComplete ? "opacity-50 pointer-events-none" : ""}`}
            aria-disabled={!formComplete}
          >
            {/* Left Column: Packages */}
            <div>
              {[5, 50, 100].map((images) => {
                const isSelected = totalImages === images && !isCustomSelected
                const discount = images >= 100 ? 0.2 : images >= 50 ? 0.1 : 0
                const price = Math.round(images * 10 * (1 - discount))
                return (
                  <Card
                    key={images}
                    className={`mb-4 p-4 flex justify-between items-center cursor-pointer ${
                      isSelected ? "border-2 border-blue-600 shadow" : "border border-gray-200"
                    }`}
                    onClick={() => handlePackageSelect(images)}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                  >
                    <div>
                      <h3 className="font-semibold text-lg">{images} images</h3>
                      <p className="text-gray-600 text-sm">
                        ₹{price}{" "}
                        {discount
                          ? `(${Math.round((price / images) * 100) / 100}/image, ${discount * 100}% off)`
                          : `(${price / images}/image)`}
                      </p>
                    </div>
                    <div>
                      {isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </Card>
                )
              })}

              {/* Custom amount input if needed */}
              <Card className="p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleDecrement}
                    disabled={!isCustomSelected || customAmount <= 1}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
                    aria-label="Decrease quantity"
                  >
                    <Minus aria-hidden="true" />
                  </button>
                  <div className="text-lg">{isCustomSelected ? `${customAmount * 5} images` : "Custom amount"}</div>
                  <button
                    onClick={() => {
                      handleIncrement()
                      handleCustomSelect()
                    }}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus aria-hidden="true" />
                  </button>
                </div>
              </Card>
            </div>

            {/* Right Column: Checkout Details */}
            <div>
              <Card className="p-6 shadow-md">
                <h2 className="text-xl font-bold mb-2">{totalImages} images</h2>
                <div className="text-3xl font-bold mb-2">₹{totalPrice}</div>
                <p className="text-gray-500 mb-6">One-time payment</p>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center" role="alert">
                    <AlertCircle className="h-5 w-5 mr-2" aria-hidden="true" /> {error}
                  </div>
                )}

                <div className="mb-4 text-sm text-gray-600">
                  By proceeding with the purchase, you agree to our{" "}
                  <Link href="/terms-and-conditions" className="text-blue-600 hover:underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={!razorpayLoaded || isLoading || !formComplete}
                  className="w-full py-3 bg-black text-white font-medium text-lg rounded-md flex items-center justify-center"
                  aria-label="Buy now"
                >
                  {isLoading ? <Loader2 className="animate-spin h-5 w-5 mr-2" aria-hidden="true" /> : "Buy Now"}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>

                <div className="mt-4 text-sm">
                  <button
                    onClick={() => setFormComplete(false)}
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Back to user information"
                  >
                    ← Back to user information
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <div className="flex justify-center space-x-4">
              <Link href="/terms-and-conditions" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
