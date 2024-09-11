import { signOutAction } from '@/app/actions'
import { Button } from './ui/button'
import { createClient } from '@/utils/supabase/server'

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser()

  if (user) {
    return (
      <div className='ml-auto flex items-center gap-4 p-2'>
        <p className='text-sm'>Hey, {user.email}</p>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form action={signOutAction}>
          <Button type='submit' variant={'outline'}>
            Sign out
          </Button>
        </form>
      </div>
    )
  }

  return null
}
