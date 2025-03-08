'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '@/src/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { AuthLayout } from '@/src/components/ui/auth/auth-layout'
import { useRouter } from 'next/navigation'
import { useLongPress } from '@/src/hooks/use-long-press'
import { EmailField } from '@/src/components/form/fields/email-field'
import { PasswordField } from '@/src/components/form/fields/password-field'
import { AuthButton } from '@/src/components/ui/auth/auth-button'
import { DEMO_USERS, handleAuthSuccess } from '@/src/utils/auth'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type LoginSchema = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const fillAndSubmitDemoUser = () => {
    Object.entries(DEMO_USERS.login).forEach(([key, value]) => {
      form.setValue(key as keyof LoginSchema, value)
    })
    setTimeout(() => {
      form.handleSubmit(async () => {
        const redirectPath = await handleAuthSuccess()
        router.push(redirectPath as string)
      })()
    }, 100)
  }

  const longPressProps = useLongPress(fillAndSubmitDemoUser)

  const onSubmit = form.handleSubmit(async () => {
    const redirectPath = await handleAuthSuccess()
    router.push(redirectPath as string)
  })

  return (
    <AuthLayout title="Login" titleProps={longPressProps}>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6">
          <EmailField control={form.control} />
          <PasswordField control={form.control} />
          <div className="space-y-4">
            <AuthButton type="submit" disabled={!form.formState.isValid}>
              Login
            </AuthButton>
            <AuthButton
              type="button"
              variant="outline"
              onClick={fillAndSubmitDemoUser}
            >
              Demo Login
            </AuthButton>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 justify-center">
              <p className="text-sm lg:text-base text-muted-foreground">
                Don&apos;t have an account?
              </p>
              <Link
                href="/signup"
                className="text-sm lg:text-base text-primary hover:underline"
              >
                Signup
              </Link>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm lg:text-base text-primary hover:underline text-center"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </Form>
    </AuthLayout>
  )
}
