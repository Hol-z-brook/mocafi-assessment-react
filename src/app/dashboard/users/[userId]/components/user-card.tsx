'use client'

import { type User } from '@/src/data'
import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/src/components/ui/card'
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar'
import { Button } from '@/src/components/ui/button'
import { Pencil } from 'lucide-react'
import { Input } from '@/src/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'
import { useRouter } from 'next/navigation'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const [isEditing, setIsEditing] = useState(false)

  const router = useRouter()
  const [formData, setFormData] = useState({
    name: user.name,
    gender: user.gender,
    status: user.status,
  })

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsEditing(false)
  }

  return isEditing ? (
    // <UserEditCard user={user} onCancel={() => setIsEditing(false)} />
    <Card className="max-w-4xl">
      <CardHeader>
        <CardTitle>Edit User</CardTitle>
        <CardDescription>
          Make changes to user information below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Name</label>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Gender</label>
            <Select
              value={formData.gender}
              onValueChange={(value) =>
                setFormData({ ...formData, gender: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Status</label>
            <Select
              value={formData.status}
              onValueChange={(value) =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={handleCancel} type="button">
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  ) : (
    <Card className="max-w-4xl">
      <CardHeader className="flex flex-row items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 group">
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={handleEdit}
                >
                  <Pencil className="h-3 w-3" />
                  <span className="sr-only">Edit Name</span>
                </Button>
              </div>
              <CardDescription className="text-sm text-muted-foreground">
                {user.email}
              </CardDescription>
            </div>
            <Button variant="outline" onClick={handleEdit}>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Gender</p>
            <div className="flex items-center gap-2 group">
              <p className="text-base capitalize">{user.gender}</p>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleEdit}
              >
                <Pencil className="h-3 w-3" />
                <span className="sr-only">Edit Gender</span>
              </Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <div className="flex items-center gap-2 group">
              <p className="text-base capitalize">{user.status}</p>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleEdit}
              >
                <Pencil className="h-3 w-3" />
                <span className="sr-only">Edit Status</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
