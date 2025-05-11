"use client"

import type React from "react"

export function TelegramBrowserCheck({ children }: { children: React.ReactNode }) {
  // Component now simply returns children without any checks
  return <>{children}</>
}
