"use client"

import { useEffect, useState } from 'react'

export function useMedia(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // "media" is only available on the client side,
    // so we need to set it here, in an effect.
    setMatches(media.matches)

    // Watch for future changes.
    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches)
    }
    media.addEventListener('change', handleChange)
    return () => void media.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
