"use client"

import { useState, useEffect, useRef } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px" }: UseIntersectionObserverProps = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const hasIntersected = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Nếu phần tử đã từng hiển thị và hiện tại đang hiển thị, giữ nguyên trạng thái
        if (hasIntersected.current && entry.isIntersecting) {
          return
        }

        // Nếu phần tử đang hiển thị lần đầu tiên, đánh dấu đã hiển thị
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          hasIntersected.current = true
        }
      },
      {
        rootMargin,
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isIntersecting }
}
