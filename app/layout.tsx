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
      <body className='w-full bg-background text-foreground'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex min-h-screen w-full flex-col items-center'>
            <div className='w-full'>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
