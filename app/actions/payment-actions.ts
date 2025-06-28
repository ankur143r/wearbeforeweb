"use server"

import { createPaymentOrder } from "./payment"

interface PaymentInitParams {
  amount: number
  credits: number
  telegramId: string
  firstName: string
  lastName: string
  email: string
}

export async function initializePayment(params: PaymentInitParams) {
  try {
    const { amount, credits, telegramId, firstName, lastName, email } = params

    // Create an order on the server
    const orderResult = await createPaymentOrder(amount, credits)

    if (!orderResult.success) {
      return { success: false, error: orderResult.error || "Failed to create order" }
    }

    // Build Razorpay checkout options using the returned data
    const options = {
      key: orderResult.key_id, // Key ID from the order result
      amount: orderResult.amount * 100, // Amount in paise
      currency: "INR",
      name: "WearBefore Inc.",
      description: `${credits} Image Credits`,
      order_id: orderResult.order_id, // Order ID from the order result
      prefill: {
        name: `${firstName} ${lastName}`,
        email: email,
      },
      notes: {
        telegram_id: telegramId,
        credits_requested: credits.toString(),
      },
      theme: {
        color: "#0077cc",
      },
    }

    return { success: true, ...options }
  } catch (error) {
    console.error("Error initializing payment:", error)
    return { success: false, error: "Failed to initialize payment" }
  }
}
