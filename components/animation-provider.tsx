"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface AnimationContextType {
  animationsEnabled: boolean
}

const AnimationContext = createContext<AnimationContextType>({
  animationsEnabled: true,
})

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(false)

  // Kích hoạt animation sau khi trang đã tải
  useEffect(() => {
    setAnimationsEnabled(true)

    // Lưu trạng thái vào sessionStorage để animation không chạy lại khi chuyển trang
    if (typeof window !== "undefined") {
      const hasAnimated = sessionStorage.getItem("hasAnimated")
      if (!hasAnimated) {
        setAnimationsEnabled(true)
        sessionStorage.setItem("hasAnimated", "true")
      } else {
        setAnimationsEnabled(false)
      }
    }
  }, [])

  return <AnimationContext.Provider value={{ animationsEnabled }}>{children}</AnimationContext.Provider>
}

export function useAnimation() {
  return useContext(AnimationContext)
}
