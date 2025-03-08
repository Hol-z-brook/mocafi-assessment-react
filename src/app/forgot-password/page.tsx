'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'
import { AuthLayout } from '@/src/components/ui/auth/auth-layout'

export default function ForgotPasswordPage() {
  const form = useForm({
    resolver: zodResolver(z.object({ email: z.string().email() })),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    // Handle form submission
    console.log(data)
  })

  return (
    <AuthLayout
      title="Forgot Password"
      description="Enter your email address and we'll send you a link to reset your password."
    >
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="lg:text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="lg:h-12 lg:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full lg:h-12 lg:text-lg mt-6"
            disabled={!form.formState.isValid}
          >
            Reset Password
          </Button>
          <Link
            href="/login"
            className="block text-sm lg:text-base text-primary hover:underline text-center pt-4"
          >
            Back to Login
          </Link>
        </form>
      </Form>
    </AuthLayout>
  )
}
