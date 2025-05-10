import Script from "next/script"

export function PurchaseSEO() {
  return (
    <Script
      id="purchase-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "WearBefore Image Credits",
          description: "Purchase image credits for WearBefore's AI virtual try-on service",
          offers: [
            {
              "@type": "Offer",
              name: "Basic Package",
              price: "49",
              priceCurrency: "INR",
              description: "5 AI try-on images",
            },
            {
              "@type": "Offer",
              name: "Standard Package",
              price: "449",
              priceCurrency: "INR",
              description: "50 AI try-on images",
            },
            {
              "@type": "Offer",
              name: "Premium Package",
              price: "799",
              priceCurrency: "INR",
              description: "100 AI try-on images",
            },
          ],
        }),
      }}
    />
  )
}
