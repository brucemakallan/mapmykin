import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

// TODO: Maybe have a proper landing page when we have some assets from the real app
export default async function Index() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return !user ? redirect('/sign-in') : redirect('/dashboard')
}
