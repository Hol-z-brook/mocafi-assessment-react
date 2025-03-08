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
import { Button } from '@/src/components/ui/button'
import { ArrowLeft, Shuffle } from 'lucide-react'
import Link from 'next/link'
import {
  createUserSchema,
  type CreateUserSchema,
} from '@/src/data/model/user/User.schema'
import { createUser } from '@/src/app/actions/users/createUser'
import { generateRandomUser } from '@/src/utils/demo-data'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'

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

  const fillRandomUser = () => {
    const randomUser = generateRandomUser()
    Object.entries(randomUser).forEach(([key, value]) => {
      form.setValue(key as keyof CreateUserSchema, value, {
        shouldValidate: true,
      })
    })
  }

  const handleSubmit = async (data: CreateUserSchema) => {
    try {
      await createUser(data)
      toast.success('User created successfully!')
      router.refresh()
      router.push('/dashboard/users')
    } catch (error) {
      toast.error('Failed to create user', {
        description:
          error instanceof Error ? error.message : 'Unknown error occurred',
      })
    }
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
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4 lg:space-y-6"
              >
                <NameField control={form.control} />
                <GenderField control={form.control} />
                <EmailField control={form.control} />

                <div className="space-y-4">
                  <AuthButton type="submit" disabled={!form.formState.isValid}>
                    Create User
                  </AuthButton>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={fillRandomUser}
                  >
                    <Shuffle className="h-4 w-4 mr-2" />
                    Fill Random Data
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
