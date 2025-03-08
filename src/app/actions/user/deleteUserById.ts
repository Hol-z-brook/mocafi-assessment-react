'use server'

import {
  deleteUserById as _deleteUserById,
  type DeleteUserByIdProps,
} from '@/src/data'

export async function deleteUserById(props: DeleteUserByIdProps) {
  return _deleteUserById(props)
}
