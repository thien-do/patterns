"use client"

import { useEffect, useState } from 'react'

export function useMedia(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    // No need to set "matches" here,
    // as it's already set in the initial state.
    // We only need to listen for future changes.
    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches)
    }
    media.addEventListener('change', handleChange)
    return () => void media.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
