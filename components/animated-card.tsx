"use client"

import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden", className)}>
      {children}
    </Card>
  )
}
