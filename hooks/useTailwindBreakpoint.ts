import { screens } from '@/lib/screens'
import { useMediaQuery } from './useMediaQuery'

export type Breakpoint = keyof typeof screens

export const useTailwindBreakpoint = (
  breakpoint: Breakpoint,
  initialValue = false
) => {
  const match = useMediaQuery(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `(min-width: ${screens[breakpoint]}px)`,
    initialValue
  )
  return match
}
