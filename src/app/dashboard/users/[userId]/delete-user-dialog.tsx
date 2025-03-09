'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { deleteUserById } from '@/src/app/actions/users/deleteUserById'

interface DeleteUserDialogProps {
  userId: number
  userName: string
}

export function DeleteUserDialog({ userId, userName }: DeleteUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [nameConfirmation, setNameConfirmation] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (nameConfirmation !== userName) return

    try {
      setIsDeleting(true)
      await deleteUserById({ id: userId })
      toast.success('User deleted successfully')
      setIsOpen(false)
      router.push('/dashboard/users')
    } catch (error) {
      toast.error('Failed to delete user', {
        description:
          error instanceof Error ? error.message : 'Unknown error occurred',
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the user
            account and remove all associated data.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">
            To confirm, please type{' '}
            <span className="font-semibold">{userName}</span> below:
          </p>
          <Input
            value={nameConfirmation}
            onChange={(e) => setNameConfirmation(e.target.value)}
            placeholder="Type user's full name"
            className="w-full"
          />
        </div>
        <DialogFooter>
          <Button
            variant="ghost"
            onClick={() => setIsOpen(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={nameConfirmation !== userName || isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete User'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
