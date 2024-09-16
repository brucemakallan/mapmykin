import { resetPasswordAction } from '@/app/actions'
import { FormMessage, Message } from '@/components/form-message'
import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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
        <Input
          type='password'
          name='password'
          placeholder='New password'
          required
        />
        <Label htmlFor='confirmPassword'>Confirm password</Label>
        <Input
          type='password'
          name='confirmPassword'
          placeholder='Confirm password'
          required
        />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <SubmitButton formAction={resetPasswordAction}>
          Reset password
        </SubmitButton>
        <FormMessage message={searchParams} />
        <p className='text-sm text-foreground/60'>
          {'Proceed to the '}
          <Link className='text-primary underline' href='/dashboard'>
            Dashboard
          </Link>
        </p>
      </form>
    </div>
  )
}
