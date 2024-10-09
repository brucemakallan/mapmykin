import { signInAction, signInWithGoogleAction } from '@/app/actions'
import { FormMessage, Message } from '@/components/form-message'
import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PasswordField from '@/components/ui/password'
import Link from 'next/link'

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <div className='flex flex-col gap-2'>
      <form className='flex min-w-64 flex-1 flex-col'>
        <h1 className='text-2xl font-medium'>Sign in</h1>
        <p className='text-sm text-foreground'>
          {"Don't have an account? "}
          <Link
            className='font-medium text-foreground underline'
            href='/sign-up'
          >
            Sign up
          </Link>
        </p>
        <div className='mt-8 flex flex-col gap-2 [&>input]:mb-3'>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' placeholder='you@example.com' required />
          <div className='flex items-center justify-between'>
            <Label htmlFor='password'>Password</Label>
            <Link
              className='text-xs text-foreground underline'
              href='/forgot-password'
            >
              Forgot Password?
            </Link>
          </div>
          <PasswordField />
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <SubmitButton pendingText='Signing In...' formAction={signInAction}>
            Sign in
          </SubmitButton>
        </div>
      </form>
      <form className='flex min-w-64 flex-1 flex-col gap-2'>
        <SubmitButton
          pendingText='Signing In...'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          formAction={signInWithGoogleAction}
        >
          Sign in with Google
        </SubmitButton>
        <FormMessage message={searchParams} />
      </form>
    </div>
  )
}
