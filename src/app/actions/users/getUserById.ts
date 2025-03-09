'use server'

import {
  getUserById as _getUserById,
  type User,
  type GetUserByIdProps,
} from '@/src/data'

export async function getUserById(props: GetUserByIdProps): Promise<User> {
  const user = await _getUserById(props)
  return user
}
