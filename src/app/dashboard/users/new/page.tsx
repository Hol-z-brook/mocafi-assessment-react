'use client'

import { Form } from '@/src/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import DashboardBreadcrumbs from '../../breadcrumbs'
import { BreadcrumbItem } from '@/src/components/ui/breadcrumb'
import { NameField } from '@/src/components/form/fields/name-field'
import { EmailField } from '@/src/components/form/fields/email-field'
import { GenderField } from '@/src/components/form/fields/gender-field'
import { AuthButton } from '@/src/components/ui/auth/auth-button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { DEMO_USERS } from '@/src/utils/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import {
  createUserSchema,
  type CreateUserSchema,
} from '@/src/data/model/user/User.schema'

export default function CreateUserPage() {
  const router = useRouter()
  const form = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      gender: undefined,
      email: '',
    },
    mode: 'onChange',
  })

  const fillAndSubmitDemoUser = () => {
    Object.entries(DEMO_USERS.create).forEach(([key, value]) => {
      form.setValue(key as keyof CreateUserSchema, value)
    })
    setTimeout(() => {
      form.handleSubmit(() => {
        toast.success('User created successfully!', {
          description: 'This is just a prototype.',
        })
        setTimeout(() => {
          router.push('/dashboard/users')
        }, 2000)
      })()
    }, 100)
  }

  return (
    <>
      <DashboardBreadcrumbs>
        <BreadcrumbItem>Create User</BreadcrumbItem>
      </DashboardBreadcrumbs>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button asChild variant="outline" size="icon">
            <Link href="/dashboard/users">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Go back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold">Create User</h1>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Create User</CardTitle>
            <CardDescription>Add a new user to the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(() => {
                  toast.success('User created successfully!', {
                    description: 'This is just a prototype.',
                  })
                  setTimeout(() => {
                    router.push('/dashboard/users')
                  }, 2000)
                })}
                className="space-y-4 lg:space-y-6"
              >
                <NameField control={form.control} />
                <GenderField control={form.control} />
                <EmailField control={form.control} />

                <div className="space-y-4">
                  <AuthButton type="submit" disabled={!form.formState.isValid}>
                    Create User
                  </AuthButton>
                  <AuthButton
                    type="button"
                    variant="outline"
                    onClick={fillAndSubmitDemoUser}
                  >
                    Demo User
                  </AuthButton>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
