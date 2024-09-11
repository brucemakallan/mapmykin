import { AuthNavBar } from '@/components/header-auth'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/sign-in')
  }

  return (
    <div className='flex flex-col'>
      {/* TODO: Change this to top nav */}
      <AuthNavBar />
      {children}
    </div>
  )
}
