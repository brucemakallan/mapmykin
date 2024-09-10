import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  children?: React.ReactNode
}

const headingVariants = cva('scroll-m-20', {
  variants: {
    type: {
      h1: ' text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: ' border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: ' text-2xl font-semibold tracking-tight',
      h4: ' text-xl font-semibold tracking-tight',
    },
  },
  defaultVariants: {
    type: 'h1',
  },
})

export function Typography(props: Props) {
  const { children, className, type = 'h1' } = props

  return (
    <h1 className={cn(className, headingVariants({ type }))}>{children}</h1>
  )
}
