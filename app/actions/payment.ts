// app/actions/payment.ts
"use server"

import Razorpay from "razorpay"
import { v4 as uuidv4 } from "uuid"

// Pull your live keys from Vercel’s Environment Variables
const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env

if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
  throw new Error("Missing Razorpay API credentials: please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET")
}

export async function createPaymentOrder(amount: number, credits: number) {
  try {
    // Initialize Razorpay instance with live credentials
    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    })

    // Use a short receipt ID (<=40 chars)
    // e.g. "rcpt_1714067890123"
    const receiptId = `rcpt_${Date.now()}`

    // Create the order
    const order = await razorpay.orders.create({
      amount: amount * 100,           // amount in paise
      currency: "INR",
      receipt: receiptId,               // <=40 chars

      // --- MODIFICATION START ---
      // This tells Razorpay where to send the user after a successful payment.
      callback_url: "https://t.me/WearBefore_bot",
      // --- MODIFICATION END ---

      notes: {
        credits: credits.toString(),
        product: "WearBefore Image Credits",
      },
    })

    return {
      success: true,
      order_id: order.id,
      amount,
      credits,
      key_id: RAZORPAY_KEY_ID,
    }
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    return {
      success: false,
      error: "Failed to create payment order",
    }
  }
}

export async function verifyPayment(paymentId: string, orderId: string, signature: string) {
  try {
    const crypto = require("crypto")
    const generatedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET!)
      .update(`${orderId}|${paymentId}`)
      .digest("hex")

    if (generatedSignature === signature) {
      return { success: true }
    } else {
      return { success: false, error: "Invalid payment signature" }
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return { success: false, error: "Failed to verify payment" }
  }
}
