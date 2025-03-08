'use server'

import {
  getUserById as _getUserById,
  type User,
  type GetUserByIdProps,
} from '@/src/data'

export async function getUserById(props: GetUserByIdProps): Promise<User> {
  return _getUserById(props)
}
