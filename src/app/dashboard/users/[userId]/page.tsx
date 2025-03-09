'use server'

import { BreadcrumbItem } from '@/src/components/ui/breadcrumb'
import { Button } from '@/src/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getUserById } from '@/src/app/actions/users'
import { type User } from '@/src/data'
import DashboardBreadcrumbs from '../../breadcrumbs'
import { notFound } from 'next/navigation'
import { UserCard } from './components/user-card'
import { UserDangerZone } from './components/user-danger-zone'

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
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button asChild variant="outline" size="icon">
            <Link href="/dashboard/users">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Go back</span>
            </Link>
          </Button>
          <div className="flex items-center justify-between flex-1">
            <h1 className="text-2xl font-semibold">User Details</h1>
          </div>
        </div>

        <div className="space-y-6">
          <UserCard user={user} />
          <UserDangerZone user={user} />
        </div>
      </div>
    </>
  )
}
