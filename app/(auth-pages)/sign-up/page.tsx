import { signInWithGoogleAction, signUpAction } from '@/app/actions'
import { FormMessage, Message } from '@/components/form-message'
import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PasswordField from '@/components/ui/password'
import Link from 'next/link'

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ('message' in searchParams) {
    return (
      <div className='flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md'>
        <FormMessage message={searchParams} />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-2'>
      <form className='mx-auto flex min-w-64 max-w-64 flex-col'>
        <h1 className='text-2xl font-medium'>Sign up</h1>
        <p className='text text-sm text-foreground'>
          {'Already have an account? '}
          <Link className='font-medium text-primary underline' href='/sign-in'>
            Sign in
          </Link>
        </p>
        <div className='mt-8 flex flex-col gap-2 [&>input]:mb-3'>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' placeholder='you@example.com' required />
          <Label htmlFor='password'>Password</Label>
          <PasswordField />
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <SubmitButton formAction={signUpAction} pendingText='Signing up...'>
            Sign up
          </SubmitButton>
        </div>
      </form>
      <form className='flex min-w-64 flex-1 flex-col gap-2'>
        <SubmitButton
          pendingText='Signing In...'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          formAction={signInWithGoogleAction}
        >
          Sign up with Google
        </SubmitButton>
        <FormMessage message={searchParams} />
      </form>
    </div>
  )
}
