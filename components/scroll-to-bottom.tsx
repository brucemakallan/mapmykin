'use client'

import { useTailwindBreakpoint } from '@/hooks/useTailwindBreakpoint'

export function ScrollToBottom() {
  const isMd = useTailwindBreakpoint('md')

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  const arrow = isMd ? <>&rarr;</> : <>&darr;</>

  return (
    <button onClick={scrollToBottom}>Create account or sign in {arrow}</button>
  )
}
