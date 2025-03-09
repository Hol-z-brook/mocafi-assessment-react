'use server'

import { revalidatePath } from 'next/cache'
import {
  deleteUserById as _deleteUserById,
  type DeleteUserByIdProps,
} from '@/src/data'

export async function deleteUserById(props: DeleteUserByIdProps) {
  await _deleteUserById(props)
  revalidatePath('/dashboard/users')
}
