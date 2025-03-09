'use server'

import { revalidatePath } from 'next/cache'
import {
  updateUserById as _updateUserById,
  type UpdateUserByIdProps,
} from '@/src/data'

export async function updateUserById(props: UpdateUserByIdProps) {
  await _updateUserById(props)
  revalidatePath('/dashboard/users')
  revalidatePath(`/dashboard/users/${props.id}`)
}
