'use server'

import {
  deleteUserById as _deleteUserById,
  type DeleteUserByIdProps,
} from '@/src/data'
import { revalidatePath } from 'next/cache'

export async function deleteUserById(
  props: DeleteUserByIdProps
): Promise<boolean> {
  const result = await _deleteUserById(props)

  revalidatePath('/dashboard/users')
  revalidatePath(`/dashboard/users/${props.id}`)
  return result
}
