import HeaderAuth from '@/components/header-auth'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Map My Kin',
  description:
    'Collaborate with family members to securely create and access a family tree online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={GeistSans.className} suppressHydrationWarning>
      <body className='bg-background text-foreground'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen flex flex-col items-center'>
            <div className='flex-1 w-full flex flex-col gap-20 items-center'>
              <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
                <div className='w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm'>
                  <HeaderAuth />
                </div>
              </nav>
              <div className='flex flex-col gap-20 max-w-5xl p-5'>
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
