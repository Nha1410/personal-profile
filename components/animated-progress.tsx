"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useAnimation } from "@/components/animation-provider"

interface AnimatedProgressProps {
  value: number
  label: string
}

export function AnimatedProgress({ value, label }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0)
  const { ref, isIntersecting } = useIntersectionObserver()
  const { animationsEnabled } = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && animationsEnabled && !hasAnimated) {
      const timer = setTimeout(() => {
        setProgress(value)
        setHasAnimated(true)
      }, 200)
      return () => clearTimeout(timer)
    } else if (!animationsEnabled || hasAnimated) {
      setProgress(value)
    }
    return undefined
  }, [isIntersecting, value, animationsEnabled, hasAnimated])

  return (
    <div
      // @ts-ignore - ref is correctly typed but TypeScript doesn't recognize it
      ref={ref}
      className="space-y-2"
    >
      <div className="flex justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-gray-500">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2 transition-all duration-1000 ease-out" />
    </div>
  )
}
