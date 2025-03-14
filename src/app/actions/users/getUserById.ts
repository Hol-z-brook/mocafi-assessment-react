'use server'

import {
  getUserById as _getUserById,
  type GetUserByIdProps,
  type User,
} from '@/src/data'

export async function getUserById(
  props: GetUserByIdProps
): Promise<User | undefined> {
  const user = await _getUserById(props)
  return user
}
