'use server'

import {
  getUserById as _getUserById,
  type User,
  type GetUserByIdProps,
} from '@/src/data'
import { notFound } from 'next/navigation'

export async function getUserById(props: GetUserByIdProps): Promise<User> {
  const user = await _getUserById(props)

  if (!user) {
    notFound()
  }

  return user
}
