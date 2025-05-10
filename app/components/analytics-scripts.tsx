"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export function AnalyticsScripts() {
  const [consentGiven, setConsentGiven] = useState<{
    analytics: boolean
    marketing: boolean
  }>({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check for consent when component mounts
    const checkConsent = () => {
      try {
        const consent = localStorage.getItem("cookie-consent")
        if (consent) {
          const preferences = JSON.parse(consent)
          setConsentGiven({
            analytics: preferences.analytics,
            marketing: preferences.marketing,
          })
        }
      } catch (e) {
        console.error("Error checking cookie consent:", e)
      }
    }

    // Check immediately
    checkConsent()

    // Set up event listener for changes
    const handleStorageChange = () => {
      checkConsent()
    }

    window.addEventListener("storage", handleStorageChange)

    // Custom event for when consent is updated within the same page
    window.addEventListener("consentUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("consentUpdated", handleStorageChange)
    }
  }, [])

  return (
    <>
      {/* Google Analytics - only load if analytics consent is given */}
      {consentGiven.analytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel - only load if marketing consent is given */}
      {consentGiven.marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  )
}
