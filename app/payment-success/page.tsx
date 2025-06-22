import { redirect } from "next/navigation"
import { verifyPayment } from "@/app/actions/payment"

interface SearchParams {
  razorpay_payment_id?: string
  razorpay_order_id?: string
  razorpay_signature?: string
}

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = searchParams

  if (
    razorpay_payment_id &&
    razorpay_order_id &&
    razorpay_signature
  ) {
    await verifyPayment(razorpay_payment_id, razorpay_order_id, razorpay_signature)
  }

  redirect("https://t.me/WearBefore_bot")
}
