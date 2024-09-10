import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width?: string
  height?: string
}

export function CoverImage(props: Props) {
  const { src, alt, width = '100%', height = '400px' } = props

  return (
    <div style={{ width, height, position: 'relative' }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        priority
      />
    </div>
  )
}
