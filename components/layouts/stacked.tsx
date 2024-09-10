interface Props {
  background: React.ReactNode
  children: React.ReactNode
}

export default function Stacked(props: Props) {
  const { background, children } = props

  return (
    <div className='relative h-full w-full overflow-hidden'>
      <div className='absolute inset-0'>{background}</div>
      <div className='relative z-10 flex h-full w-full items-center justify-center'>
        {children}
      </div>
    </div>
  )
}
