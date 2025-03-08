'use client'
import { useCallback, useRef } from 'react'

export function useLongPress(callback: () => void, ms = 1000) {
  const timerRef = useRef<NodeJS.Timeout>(null)

  const start = useCallback(() => {
    timerRef.current = setTimeout(callback, ms)
  }, [callback, ms])

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }, [])

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  }
}
