import { resetPasswordAction } from '@/app/actions'
import { FormMessage, Message } from '@/components/form-message'
import { SubmitButton } from '@/components/submit-button'
import { Label } from '@/components/ui/label'
import PasswordField from '@/components/ui/password'
import Link from 'next/link'

export default function ResetPassword({
  searchParams,
}: {
  searchParams: Message
}) {
  return (
    <div className='mx-auto flex flex-col'>
      <form className='mx-auto flex w-full max-w-md flex-col gap-2 p-4 [&>input]:mb-4'>
        <h1 className='text-2xl font-medium'>Reset password</h1>
        <p className='text-sm text-foreground/60'>
          Please enter your new password below.
        </p>
        <Label htmlFor='password'>New password</Label>
        <PasswordField />
        <Label htmlFor='confirmPassword'>Confirm password</Label>
        <PasswordField
          name='confirmPassword'
          placeholder='Confirm password'
        />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <SubmitButton formAction={resetPasswordAction}>
          Reset password
        </SubmitButton>
        <FormMessage message={searchParams} />
        <p className='text-sm text-foreground/60'>
          {'Back to '}
          <Link className='text-primary underline' href='/dashboard'>
            Dashboard
          </Link>
        </p>
      </form>
    </div>
  )
}
