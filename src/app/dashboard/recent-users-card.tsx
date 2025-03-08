'use server'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar'
import { getUsers } from '../actions/users'
import { type User } from '../actions/user'

export default async function RecentUsersCard() {
  const recentUsers = await getUsers({
    page: 1,
    perPage: 5,
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Users</CardTitle>
        <CardDescription>Recently added users that need review</CardDescription>
      </CardHeader>
      <CardContent className="max-w-full">
        <div className="space-y-4">
          <div className="divide-y divide-border rounded-md border overflow-hidden">
            {recentUsers?.slice(0, 5).map((user: User) => (
              <Link
                key={user.id}
                href={`/dashboard/users/${user.id}`}
                className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 transition-colors hover:bg-muted/50"
              >
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 w-0 space-y-0.5 sm:space-y-1">
                  <p className="text-sm sm:text-base font-medium leading-none truncate">
                    {user.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
