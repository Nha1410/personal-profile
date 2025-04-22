"use client"

import { type ReactNode, useEffect, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { useAnimation } from "@/components/animation-provider"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function AnimatedSection({ children, className, delay = 0, direction = "up" }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const { animationsEnabled } = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isIntersecting, hasAnimated])

  // Nếu animation không được kích hoạt hoặc đã chạy xong, hiển thị nội dung ngay lập tức
  const shouldAnimate = animationsEnabled && !hasAnimated

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "opacity-0",
  }

  return (
    <div
      // @ts-ignore - ref is correctly typed but TypeScript doesn't recognize it
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        shouldAnimate && !isIntersecting
          ? `opacity-0 ${directionClasses[direction]}`
          : "opacity-100 translate-x-0 translate-y-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
