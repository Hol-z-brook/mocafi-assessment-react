'use server'

import {
  getUserById as _getUserById,
  type GetUserByIdProps,
  type User,
} from '@/src/data'

export async function getUserById(props: GetUserByIdProps): Promise<User> {
  return _getUserById(props)
}
