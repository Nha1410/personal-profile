"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingDownloadButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled past 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <Button
        asChild
        className="rounded-full shadow-lg flex items-center gap-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300"
      >
        <a href="/cv/nha-le-thanh-cv.pdf" download="Nha_Le_Thanh_CV.pdf">
          <Download size={16} />
          <span className="sm:inline hidden">Download CV</span>
        </a>
      </Button>
    </div>
  )
}
