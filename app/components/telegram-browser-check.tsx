// app/components/telegram-browser-check.tsx
"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export function TelegramBrowserCheck({ children }: { children: React.ReactNode }) {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const params = new URLSearchParams(window.location.search);
    const isTelegramSource = params.get("source") === "telegram";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isPlainSafari = isIOS && /Safari/.test(ua) && /Version\//.test(ua);
    const isTelegramWebView = !!(window as any).Telegram?.WebApp;

    // Only proceed if ?source=telegram is present
    if (!isTelegramSource) {
      return;
    }

    // If in plain Safari (not Telegram WebView), strip the query param and stop
    if (isPlainSafari && !isTelegramWebView) {
      const url = new URL(window.location.href);
      url.searchParams.delete("source");
      window.history.replaceState(null, "", url.toString());
      return;
    }

    // Android → Chrome
    if (isAndroid) {
      window.location.href =
        "googlechrome://navigate?url=" + encodeURIComponent(window.location.href);
      return;
    }

    // iOS in-app (Telegram WebView) → Safari hand‑off
    if (isIOS) {
      try {
        window.open(window.location.href, "_blank");
        const link = document.createElement("a");
        link.href = window.location.href;
        link.target = "_blank";
        link.rel = "noopener";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.warn("iOS Safari redirect failed", e);
      }
      setTimeout(() => setShowFallback(true), 1500);
    }
  }, []);

  if (showFallback) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50 p-6">
        <div className="max-w-sm text-center">
          <p className="mb-4">
            For the best experience, please open this page in Safari.
          </p>
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full"
          >
            Open in Safari <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
