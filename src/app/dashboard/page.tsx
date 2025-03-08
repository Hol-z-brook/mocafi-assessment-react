import Link from 'next/link'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Search, UserPlus, Users } from 'lucide-react'
import RecentUsersCard from './recent-users-card'

export default async function DashboardPage() {
  return (
    <>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-9" />
          </div>
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
        </div>

        <RecentUsersCard />
      </div>
    </>
  )
}
