import { BreadcrumbItem } from '@/src/components/ui/breadcrumb'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar'

import { type User, getUserById } from '../../../actions/user'
import DashboardBreadcrumbs from '../../breadcrumbs'
import { Skeleton } from '@/src/components/ui/skeleton'
import { Button } from '@/src/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const sampleUserId = 7752433

export default async function UserPage() {
  const user: User | undefined = await getUserById({ id: sampleUserId })

  return (
    <>
      <DashboardBreadcrumbs>
        <BreadcrumbItem>{user?.name}</BreadcrumbItem>
      </DashboardBreadcrumbs>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="icon">
            <Link href="/dashboard/users">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Go back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold">User Details</h1>
        </div>
        <Card className="max-w-4xl">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <CardTitle className="text-2xl">{user?.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {user?.email}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Gender</p>
                <p className="text-base capitalize">{user?.gender}</p>
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-base capitalize">{user?.status}</p>
                </div>
                <Button variant="outline">
                  <p>Toggle Status</p>
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-1/8" />
                <Skeleton className="h-4 w-1/3" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-1/8" />
                <Skeleton className="h-4 w-1/3" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-1/8" />
                <Skeleton className="h-4 w-1/3" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-1/8" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
