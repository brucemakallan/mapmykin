import { useState, useLayoutEffect } from 'react'

export function useMediaQuery(query: string, initialValue = false) {
  const [matches, setMatches] = useState(initialValue)

  useLayoutEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const handleChange = () => {
      setMatches(media.matches)
    }

    media.addEventListener('change', handleChange)
    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [matches, query])

  return matches
}
