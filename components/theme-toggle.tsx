"use client"

import { Moon, Sun, Loader2 } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
        <div className="h-4 w-4" />
      </Button>
    )
  }

  const isDark = theme === "dark"

  const toggleTheme = async () => {
    setIsLoading(true)

    // Add theme transition disable class to prevent flash
    document.documentElement.classList.add("theme-transition-disable")

    // Set the new theme
    setTheme(isDark ? "light" : "dark")

    // Simulate loading time for theme application
    setTimeout(() => {
      // Remove the transition disable class
      document.documentElement.classList.remove("theme-transition-disable")
      setIsLoading(false)
    }, 300)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      disabled={isLoading}
      className="w-9 h-9 p-0 hover:bg-accent/50 transition-colors duration-100 disabled:opacity-50"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-4 h-4">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        ) : (
          <>
            <Sun
              className={`absolute inset-0 h-4 w-4 text-yellow-500 transition-all duration-150 ease-out ${
                isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <Moon
              className={`absolute inset-0 h-4 w-4 text-blue-600 transition-all duration-150 ease-out ${
                isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </>
        )}
      </div>
    </Button>
  )
}
