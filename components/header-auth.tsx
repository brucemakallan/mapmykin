import { signOutAction } from '@/app/actions'
import Link from 'next/link'
import { Button } from './ui/button'
import { createClient } from '@/utils/supabase/server'

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser()

  if (user) {
    return (
      <div className='flex items-center gap-4'>
        Hey, {user.email}!
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form action={signOutAction}>
          <Button type='submit' variant={'outline'}>
            Sign out
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className='flex gap-2'>
      <Button asChild size='sm' variant={'outline'}>
        <Link href='/sign-in'>Sign in</Link>
      </Button>
      <Button asChild size='sm' variant={'default'}>
        <Link href='/sign-up'>Sign up</Link>
      </Button>
    </div>
  )
}
