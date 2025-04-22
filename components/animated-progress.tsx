"use client"

import { useRef } from "react"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedProgressProps {
  value: number
  label: string
  color?: string
}

export function AnimatedProgress({ value, label, color }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0)
  const { ref, isIntersecting } = useIntersectionObserver()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated.current) {
      const timer = setTimeout(() => {
        setProgress(value)
        hasAnimated.current = true
      }, 200)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isIntersecting, value])

  // Determine color class based on skill name
  const getColorClass = () => {
    if (color) return color

    const skillName = label.toLowerCase()
    if (skillName.includes("php")) return "bg-theme-orange"
    if (skillName.includes("golang")) return "bg-theme-blue"
    if (skillName.includes("english")) return "bg-theme-purple"
    if (skillName.includes("git")) return "bg-theme-red"
    if (skillName.includes("sql")) return "bg-theme-green"

    return "bg-primary"
  }

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
      <Progress value={progress} className={cn("h-2 transition-all duration-1000 ease-out", getColorClass())} />
    </div>
  )
}
