'use client'

import { type User } from '@/src/data'
import { DeleteUserDialog } from './delete-user-dialog'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'

interface UserDangerZoneProps {
  user: User
}

export function UserDangerZone({ user }: UserDangerZoneProps) {
  return (
    <Card className="max-w-4xl border-destructive/50">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-destructive">
          Danger Zone
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Delete User</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete this user and all of their data
              </p>
            </div>
            <DeleteUserDialog userId={user.id} userName={user.name} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
