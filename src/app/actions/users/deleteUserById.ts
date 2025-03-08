'use server'

import {
  deleteUserById as _deleteUserById,
  type DeleteUserByIdProps,
} from '@/src/data'

export async function deleteUserById(
  props: DeleteUserByIdProps
): Promise<boolean> {
  return _deleteUserById(props)
}
