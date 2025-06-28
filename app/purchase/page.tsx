// page.tsx
"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Loader2, Plus, Minus, ArrowRight, CheckIcon } from "lucide-react"
import { initializePayment } from "@/app/actions/payment-actions"
import Link from "next/link"
import { PurchaseSEO } from "./seo"
import { Logo } from "@/app/components/logo"

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
  const preselectedPackage = searchParams.get("package") || ""

  // Determine telegram ID/username to use (user_id takes precedence)
  const defaultTelegramValue = urlUserId || urlUsername || defaultTgId

  // User info form state
  const [firstName, setFirstName] = useState(urlFirstName)
  const [lastName, setLastName] = useState(urlLastName)
  const [email, setEmail] = useState("")
  const [telegramId, setTelegramId] = useState(defaultTelegramValue)

  // Form validation states
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [telegramIdError, setTelegramIdError] = useState("")
  const [showValidationErrors, setShowValidationErrors] = useState(false)

  // Package selection state
  const [selectedImages, setSelectedImages] = useState(() => {
    if (preselectedPackage === "5") return 5
    if (preselectedPackage === "50") return 50
    if (preselectedPackage === "100") return 100
    return 5
  })
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

  // Validation functions
  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s'.]+$/
    return nameRegex.test(name.trim())
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }

  const validateTelegramId = (id: string) => {
    const telegramIdRegex = /^\d+$/
    return telegramIdRegex.test(id.trim())
  }

  // Handle input changes with validation
  const handleFirstNameChange = (value: string) => {
    setFirstName(value)
    if (value.trim() && !validateName(value)) {
      setFirstNameError("First name can only contain letters, spaces, apostrophes, and periods")
    } else {
      setFirstNameError("")
    }
  }

  const handleLastNameChange = (value: string) => {
    setLastName(value)
    if (value.trim() && !validateName(value)) {
      setLastNameError("Last name can only contain letters, spaces, apostrophes, and periods")
    } else {
      setLastNameError("")
    }
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (value.trim() && !validateEmail(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  const handleTelegramIdChange = (value: string) => {
    setTelegramId(value)
    if (value.trim() && !validateTelegramId(value)) {
      setTelegramIdError("Telegram ID must contain only numbers")
    } else {
      setTelegramIdError("")
    }
  }

  const totalImages = isCustomSelected ? customAmount * 5 : selectedImages
  const totalPrice = (() => {
    if (isCustomSelected) {
      // For custom amounts, calculate based on the tier they would fall into
      const totalImgs = customAmount * 5
      if (totalImgs >= 100) return Math.round(totalImgs * 7.99) // ₹799 for 100 = ₹7.99 per image
      if (totalImgs >= 50) return Math.round(totalImgs * 8.98) // ₹449 for 50 = ₹8.98 per image
      return totalImgs * 9.8 // ₹49 for 5 = ₹9.8 per image
    }

    // For standard packages, use the exact prices
    if (selectedImages === 100) return 799
    if (selectedImages === 50) return 449
    if (selectedImages === 5) return 49

    return 0 // Fallback
  })()

  const handleContinue = () => {
    setShowValidationErrors(true)

    // Check if mandatory fields are filled and valid
    const isFirstNameValid = firstName.trim() && validateName(firstName)
    const isEmailValid = email.trim() && validateEmail(email)
    const isTelegramIdValid = telegramId.trim() && validateTelegramId(telegramId)

    if (isFirstNameValid && isEmailValid && isTelegramIdValid) {
      setFormComplete(true)
      // Scroll to package selection
      const packageSection = document.getElementById("package-selection")
      if (packageSection) {
        packageSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handlePackageSelect = (images: number) => {
    setCustomSelected(false)
    setSelectedImages(images)
  }

  const handleCustomSelect = () => setCustomSelected(true)
  const handleIncrement = () => setCustomAmount((prev) => prev + 1)
  const handleDecrement = () => setCustomAmount((prev) => Math.max(1, prev - 1))

  const scrollToForm = (packageImages: number) => {
    setSelectedImages(packageImages)
    setCustomSelected(false)
    const formSection = document.getElementById("user-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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
      
      // --- MODIFICATION START ---
      // The `handler` function has been removed and replaced with `redirect: true`.
      // This allows the `callback_url` set on the server to function correctly.
      const razorpayOptions = {
        ...paymentOptions,
        redirect: true,
      }

      const rzp = new window.Razorpay(razorpayOptions)
      // --- MODIFICATION END ---
      
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
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Header with Logo */}
        <header className="w-full py-6 px-4 flex justify-center">
          <Logo isLink={true} />
        </header>

        <main className="max-w-6xl mx-auto p-6">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Purchase Image Credits
            </h1>
            <p className="mt-2 text-gray-300">Get credits to try on outfits virtually before buying</p>
          </div>

          {/* Pricing Plans Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                Choose Your Plan
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Affordable Pricing Options</h2>
              <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
                Pay only for what you use with our simple credit system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                <CardContent className="pt-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">Free</span>
                  </div>
                  <p className="text-gray-300 mb-6">5 credits on sign-up</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Try the service</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">5 AI try-on images</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">No payment needed</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 border-0"
                  >
                    <a href="https://t.me/WearBefore_bot" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <CardContent className="pt-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Basic</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">₹49</span>
                  </div>
                  <p className="text-gray-300 mb-6">5 images</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">High-quality images</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Secure payment via Razorpay</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Instant access</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => scrollToForm(5)}
                    className="w-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 border-0"
                  >
                    Buy Package
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-sm overflow-hidden relative z-10 scale-105">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="absolute -top-5 left-0 right-0 mx-auto w-max px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-medium shadow-md">
                  POPULAR
                </div>
                <CardContent className="pt-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Standard</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">₹449</span>
                  </div>
                  <p className="text-gray-300 mb-6">50 images – ₹9 per image (10% off)</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Everything in Basic</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">50 AI try-on images</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Save ₹51 compared to Basic</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => scrollToForm(50)}
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-lg shadow-blue-500/20"
                  >
                    Buy Package
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <CardContent className="pt-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">₹799</span>
                  </div>
                  <p className="text-gray-300 mb-6">100 images – ₹8 per image (20% off)</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Everything in Basic</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">100 AI try-on images</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Save ₹201 compared to Basic</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => scrollToForm(100)}
                    className="w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 border-0"
                  >
                    Buy Package
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
                <CardContent className="pt-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">Bulk</span>
                  </div>
                  <p className="text-gray-300 mb-6">For high-volume users</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Bulk image generation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Priority processing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-gray-300">Dedicated support</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 border-0"
                  >
                    <a href="mailto:support@wearbefore.com" target="_blank" rel="noopener noreferrer">
                      Contact Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Purchase Form Section */}
          <div className="max-w-4xl mx-auto" id="user-form">
            <Card className="p-6 mb-6 border-0 bg-white/10 backdrop-blur-sm shadow-xl rounded-xl text-white">
              <h2 className="text-xl font-bold mb-4 text-blue-300">Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-200">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => handleFirstNameChange(e.target.value)}
                    className={`w-full border rounded-md p-2 text-white bg-gray-800/50 ${
                      firstNameError || (showValidationErrors && !firstName.trim())
                        ? "border-red-500"
                        : "border-gray-700"
                    }`}
                    placeholder="Enter your first name"
                    aria-required="true"
                  />
                  {(firstNameError || (showValidationErrors && !firstName.trim())) && (
                    <p className="text-red-400 text-sm mt-1">{firstNameError || "First name is required"}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => handleLastNameChange(e.target.value)}
                    className={`w-full border rounded-md p-2 text-white bg-gray-800/50 ${
                      lastNameError ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="Enter your last name"
                  />
                  {lastNameError && <p className="text-red-400 text-sm mt-1">{lastNameError}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={`w-full border rounded-md p-2 text-white bg-gray-800/50 ${
                      emailError || (showValidationErrors && !email.trim()) ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="Enter your email address"
                    aria-required="true"
                  />
                  {(emailError || (showValidationErrors && !email.trim())) && (
                    <p className="text-red-400 text-sm mt-1">{emailError || "Email address is required"}</p>
                  )}
                  <p className="text-sm text-gray-400 mt-1">
                    (This is the email where your payment receipt will be sent.)
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="telegramId" className="block text-sm font-medium mb-1 text-gray-200">
                    Enter the Telegram ID you want to recharge <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="telegramId"
                    value={telegramId}
                    onChange={(e) => handleTelegramIdChange(e.target.value)}
                    className={`w-full border rounded-md p-2 text-white bg-gray-800/50 ${
                      telegramIdError || (showValidationErrors && !telegramId.trim())
                        ? "border-red-500"
                        : "border-gray-700"
                    }`}
                    placeholder="e.g., 123456789"
                    aria-required="true"
                  />
                  {(telegramIdError || (showValidationErrors && !telegramId.trim())) && (
                    <p className="text-red-400 text-sm mt-1">{telegramIdError || "Telegram ID is required"}</p>
                  )}
                  <p className="text-sm text-gray-400 mt-1">
                    If you don't know your Telegram ID, please tap /recharge from{" "}
                    <a
                      href="https://t.me/WearBefore_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      WearBefore bot's menu on telegram
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-md border-0"
                  aria-label="Continue to select package"
                >
                  Continue to select package
                </Button>
              </div>
            </Card>

            {/* Package Selector & Checkout */}
            <div
              id="package-selection"
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${!formComplete ? "opacity-50 pointer-events-none" : ""}`}
              aria-disabled={!formComplete}
            >
              {/* Left Column: Packages */}
              <div>
                {[5, 50, 100].map((images) => {
                  const isSelected = totalImages === images && !isCustomSelected
                  let price = 0
                  if (images === 5) price = 49
                  else if (images === 50) price = 449
                  else if (images === 100) price = 799

                  const pricePerImage = images === 5 ? 9.8 : images === 50 ? 8.98 : 7.99
                  const discount = images === 5 ? 0 : images === 50 ? 10 : 20
                  return (
                    <Card
                      key={images}
                      className={`mb-4 p-4 flex justify-between items-center cursor-pointer border-0 ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40 shadow-lg border-l-4 border-blue-400"
                          : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                      }`}
                      onClick={() => handlePackageSelect(images)}
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={0}
                    >
                      <div>
                        <h3 className="font-semibold text-lg text-white">{images} images</h3>
                        <p className="text-gray-300 text-sm">
                          ₹{price}{" "}
                          {discount > 0 ? `(₹${pricePerImage}/image, ${discount}% off)` : `(₹${pricePerImage}/image)`}
                        </p>
                      </div>
                      <div>
                        {isSelected && (
                          <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </Card>
                  )
                })}

                {/* Custom amount input if needed */}
                <Card className="p-4 border-0 bg-white/10 backdrop-blur-sm text-white">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleDecrement}
                      disabled={!isCustomSelected || customAmount <= 1}
                      className="p-2 rounded-full border border-gray-600 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <div className="text-lg">{isCustomSelected ? `${customAmount * 5} images` : "Custom amount"}</div>
                    <button
                      onClick={() => {
                        handleIncrement()
                        handleCustomSelect()
                      }}
                      className="p-2 rounded-full border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </Card>
              </div>

              {/* Right Column: Checkout Details */}
              <div>
                <Card className="p-6 shadow-xl border-0 bg-white/10 backdrop-blur-sm text-white">
                  <h2 className="text-xl font-bold mb-2 text-blue-300">Order Summary</h2>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    ₹{totalPrice}
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-gray-300">{totalImages} images</span>
                    <span className="px-2 py-1 bg-blue-600/30 rounded-full text-xs text-blue-200">
                      One-time payment
                    </span>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-900/50 text-red-200 rounded-md flex items-center" role="alert">
                      <AlertCircle className="h-5 w-5 mr-2" aria-hidden="true" /> {error}
                    </div>
                  )}

                  <div className="mb-4 text-sm text-gray-300">
                    By proceeding with the purchase, you agree to our{" "}
                    <Link href="/terms-and-conditions" className="text-blue-300 hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-blue-300 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </div>

                  <Button
                    onClick={handlePayment}
                    disabled={!razorpayLoaded || isLoading || !formComplete}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium text-lg rounded-md flex items-center justify-center border-0"
                    aria-label="Buy now"
                  >
                    {isLoading ? <Loader2 className="animate-spin h-5 w-5 mr-2" aria-hidden="true" /> : "Buy Now"}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>

                  <div className="mt-4 text-sm">
                    <button
                      onClick={() => setFormComplete(false)}
                      className="text-blue-300 hover:text-blue-200"
                      aria-label="Back to user information"
                    >
                      ← Back to user information
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <div className="flex justify-center space-x-4">
              <Link href="/terms-and-conditions" className="text-blue-300 hover:underline">
                Terms and Conditions
              </Link>
              <Link href="/privacy-policy" className="text-blue-300 hover:underline">
                Privacy Policy
              </Link>
            </div>
            <p className="mt-4">© 2023 WearBefore. All rights reserved.</p>
          </div>
        </main>
      </div>
    </>
  )
}
