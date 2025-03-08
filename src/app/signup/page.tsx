'use client'

import { AuthLayout } from '@/src/components/ui/auth/auth-layout'
import { Form } from '@/src/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLongPress } from '@/src/hooks/use-long-press'
import { NameField } from '@/src/components/form/fields/name-field'
import { EmailField } from '@/src/components/form/fields/email-field'
import { PasswordField } from '@/src/components/form/fields/password-field'
import { GenderField } from '@/src/components/form/fields/gender-field'
import { AuthButton } from '@/src/components/ui/auth/auth-button'
import { DEMO_USERS, handleAuthSuccess } from '@/src/utils/auth'

const signupSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    gender: z.enum(['Male', 'Female', 'Rather not say'], {
      required_error: 'Please select a gender',
    }),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type SignupSchema = z.infer<typeof signupSchema>

export default function SignupPage() {
  const router = useRouter()
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      gender: undefined,
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  })

  const fillAndSubmitDemoUser = () => {
    Object.entries(DEMO_USERS.signup).forEach(([key, value]) => {
      form.setValue(key as keyof SignupSchema, value)
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
    <AuthLayout title="Signup" titleProps={longPressProps}>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6">
          <NameField control={form.control} />
          <GenderField control={form.control} />
          <EmailField control={form.control} />
          <PasswordField control={form.control} />
          <PasswordField
            control={form.control}
            name="confirmPassword"
            label="Confirm Password"
          />
          <div className="space-y-4">
            <AuthButton type="submit" disabled={!form.formState.isValid}>
              Signup
            </AuthButton>
            <AuthButton
              type="button"
              variant="outline"
              onClick={fillAndSubmitDemoUser}
            >
              Demo Signup
            </AuthButton>
          </div>
          <div className="flex flex-row items-center gap-2 justify-center">
            <p className="text-sm lg:text-base">Already have an account?</p>
            <Link
              href="/login"
              className="text-sm lg:text-base text-primary hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </Form>
    </AuthLayout>
  )
}
