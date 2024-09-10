import { CoverImage } from '@/components/cover-image'
import Stacked from '@/components/layouts/stacked'
import { ScrollToBottom } from '@/components/scroll-to-bottom'
import { Typography } from '@/components/typography/heading'
import { jigsawBackground } from '@/public/css/jigsaw-background'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='flex flex-col md:h-screen md:flex-row md:gap-8 md:p-8'
      style={jigsawBackground}
    >
      <div className='flex h-screen w-full flex-col items-center justify-center gap-8 rounded-2xl p-8 text-center md:h-full md:w-1/2'>
        <Typography type='h4' className='text-teal-800'>
          MapMyKin
        </Typography>
        <Typography>
          <span className='inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent'>
            Collaborate with family members to securely piece together and
            access your family tree online
          </span>
        </Typography>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-500'>Want to get started?</p>
          <ScrollToBottom />
        </div>
      </div>
      <div className='h-screen w-full overflow-hidden bg-blue-300 md:h-full md:w-1/2 md:rounded-2xl'>
        <Stacked
          background={
            <CoverImage
              src='/images/family-tree-dark.webp'
              alt='family tree'
              height='100%'
            />
          }
        >
          <div className='rounded-lg bg-white p-8 shadow-lg'>{children}</div>
        </Stacked>
      </div>
    </div>
  )
}
