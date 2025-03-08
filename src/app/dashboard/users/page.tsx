'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table'
import { Badge } from '@/src/components/ui/badge'
import { getUsers } from '@/src/app/actions/users'
import { useEffect, useState } from 'react'
import { User } from '@/src/data/model/user/User.model'
import DashboardBreadcrumbs from '../breadcrumbs'
import { BreadcrumbItem, BreadcrumbPage } from '@/src/components/ui/breadcrumb'
import Link from 'next/link'
import { Button } from '@/src/components/ui/button'
import { Plus } from 'lucide-react'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers({
      page: 1,
      perPage: 10,
    }).then(setUsers)
  }, [])

  return (
    <>
      <DashboardBreadcrumbs>
        <BreadcrumbPage>Users</BreadcrumbPage>
      </DashboardBreadcrumbs>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <Button asChild>
            <Link href="/dashboard/users/new">
              <Plus className="h-4 w-4 mr-2" />
              Create User
            </Link>
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-muted/50 transition-colors"
              >
                <TableCell>
                  <Link
                    href={`/dashboard/users/${user.id}`}
                    className="block hover:underline"
                  >
                    {user.name}
                  </Link>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === 'active' ? 'default' : 'secondary'}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
