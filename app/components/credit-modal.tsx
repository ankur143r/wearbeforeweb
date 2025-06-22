"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Minus, Plus, ArrowRight, Loader2 } from "lucide-react"
import Script from "next/script"
import { initializePayment } from "@/app/actions/payment-actions"
import Link from "next/link"

interface CreditModalProps {
  isOpen: boolean
  onClose: () => void
  telegramId?: string
  firstName?: string
  lastName?: string
  email?: string
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export function CreditModal({ isOpen, onClose, telegramId, firstName, lastName, email }: CreditModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<number>(5)
  const [quantity, setQuantity] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)

  // Package options
  const packageOptions = [
    { credits: 5, price: 49, label: "5 images" },
    { credits: 50, price: 449, label: "50 images" },
    { credits: 100, price: 799, label: "100 images" },
  ]

  // Calculate total credits and price
  const totalCredits = selectedPackage * quantity
  const basePackage = packageOptions.find((pkg) => pkg.credits === selectedPackage)
  const totalPrice = basePackage ? basePackage.price * quantity : 0

  // Auto-switch to better package
  useEffect(() => {
    if (selectedPackage === 5 && quantity >= 10) {
      // Auto-switch to 50 credit package if buying 10+ basic packages
      setSelectedPackage(50)
      setQuantity(1)
    } else if (selectedPackage === 5 && quantity >= 20) {
      // Auto-switch to 100 credit package if buying 20+ basic packages
      setSelectedPackage(100)
      setQuantity(1)
    } else if (selectedPackage === 50 && quantity >= 2) {
      // Auto-switch to 100 credit package if buying 2+ standard packages
      setSelectedPackage(100)
      setQuantity(1)
    }
  }, [selectedPackage, quantity])

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Load Razorpay script
  useEffect(() => {
    if (isOpen && !razorpayLoaded) {
      try {
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.async = true

        script.onload = () => {
          setRazorpayLoaded(true)
        }

        script.onerror = () => {
          console.error("Failed to load Razorpay script")
          setPaymentStatus({
            success: false,
            message: "Failed to load payment gateway. Please try again later.",
          })
        }

        document.body.appendChild(script)
      } catch (err) {
        console.error("Error loading Razorpay script:", err)
      }
    }
  }, [isOpen, razorpayLoaded])

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handlePayment = async () => {
    try {
      setIsProcessing(true)
      setPaymentStatus(null)

      // Check if Razorpay script is loaded
      if (!razorpayLoaded || typeof window.Razorpay !== "function") {
        setPaymentStatus({
          success: false,
          message: "Payment gateway is not ready. Please try again.",
        })
        return
      }

      // Initialize payment on the server
      const paymentOptions = await initializePayment({
        amount: totalPrice,
        credits: totalCredits,
        telegramId: telegramId || "",
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
      })

      if (!paymentOptions.success) {
        setPaymentStatus({
          success: false,
          message: paymentOptions.error || "Failed to initialize payment",
        })
        return
      }

      // Create Razorpay instance with options from server
      paymentOptions.handler = (response: any) => {
        console.log("Payment successful:", response)
      }

      const razorpayInstance = new window.Razorpay(paymentOptions)

      // Handle payment failure - just log to console, don't show error message
      razorpayInstance.on("payment.failed", () => {
        // Simply log that payment failed without accessing error details
        console.log("Payment failed or was cancelled")
        setIsProcessing(false)
      })

      razorpayInstance.open()
    } catch (error) {
      console.error("Payment error:", error)
      // Only show error for unexpected errors, not for payment failures
      setPaymentStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">TOP UP CREDITS</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              {packageOptions.map((pkg) => (
                <button
                  key={pkg.credits}
                  onClick={() => {
                    setSelectedPackage(pkg.credits)
                    setQuantity(1)
                  }}
                  className={`w-full py-3 px-4 border rounded-lg text-center ${
                    selectedPackage === pkg.credits
                      ? "bg-black text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  disabled={isProcessing}
                >
                  {pkg.label}
                </button>
              ))}

              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-2">Custom amount (multiples of {selectedPackage}):</p>
                <div className="flex items-center">
                  <button
                    onClick={handleDecrement}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                    disabled={quantity <= 1 || isProcessing}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="flex-1 px-4">
                    <p className="text-center">
                      {quantity} × {selectedPackage} = {totalCredits} images
                    </p>
                  </div>
                  <button
                    onClick={handleIncrement}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                    disabled={isProcessing}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                <p className="text-lg text-gray-600 mb-2">{totalCredits} images</p>
                <p className="text-4xl font-bold mb-2">₹{totalPrice.toLocaleString()}</p>
                <p className="text-gray-500">One-time payment</p>
              </div>

              {paymentStatus && paymentStatus.message && (
                <div
                  className={`mb-4 p-3 rounded-md text-center ${
                    paymentStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}
                >
                  {paymentStatus.message}
                </div>
              )}

              <div className="mb-2 text-sm text-gray-600 text-center">
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
                className="bg-black hover:bg-gray-800 text-white rounded-md py-3 flex items-center justify-center gap-2 mt-4"
                onClick={handlePayment}
                disabled={isProcessing || !razorpayLoaded}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : !razorpayLoaded ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Buy now <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
