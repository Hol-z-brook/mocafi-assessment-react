import Link from 'next/link'
import { Button } from '@/src/components/ui/button'
import { UserPlus, Users } from 'lucide-react'
import RecentUsersCard from './recent-users-card'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'

export default async function DashboardPage() {
  return (
    <>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common user management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild>
                <Link href="/dashboard/users">
                  <Users className="mr-2 h-4 w-4" />
                  View All Users
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/dashboard/users/new">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add User
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <RecentUsersCard />
      </div>
    </>
  )
}
