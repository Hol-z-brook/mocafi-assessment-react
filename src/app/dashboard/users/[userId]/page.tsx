'use server'

import { BreadcrumbItem } from '@/src/components/ui/breadcrumb'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar'
import { Button } from '@/src/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getUserById } from '@/src/app/actions/users'
import { type User } from '@/src/data'
import DashboardBreadcrumbs from '../../breadcrumbs'
import { DeleteUserDialog } from './delete-user-dialog'

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const resolvedParams = await params

  if (!resolvedParams) {
    notFound()
  }

  const userId = Number(resolvedParams.userId)

  if (isNaN(userId) || userId < 1) {
    notFound()
  }

  const user: User | undefined = await getUserById({
    id: userId,
  })

  if (!user) {
    notFound()
  }

  return (
    <>
      <DashboardBreadcrumbs>
        <BreadcrumbItem>{user.name}</BreadcrumbItem>
      </DashboardBreadcrumbs>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="icon">
            <Link href="/dashboard/users">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Go back</span>
            </Link>
          </Button>
          <div className="flex items-center justify-between flex-1">
            <h1 className="text-2xl font-semibold">User Details</h1>
            <DeleteUserDialog userId={user.id} userName={user.name} />
          </div>
        </div>

        <Card className="max-w-4xl">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {user.email}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Gender</p>
                <p className="text-base capitalize">{user.gender}</p>
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-base capitalize">{user.status}</p>
                </div>
                <Button variant="outline">
                  <p>Toggle Status</p>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
