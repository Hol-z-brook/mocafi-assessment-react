'use server'

import { createUser as _createUser, type User } from '@/src/data'
import { type CreateUserSchema } from '@/src/data/goRestApi/model/user/CreateUser.schema'
import { revalidatePath } from 'next/cache'

export async function createUser(user: CreateUserSchema): Promise<User> {
  const newUser = await _createUser({
    name: user.name,
    email: user.email,
    gender: user.gender,
    status: user.status ?? 'active',
  })

  revalidatePath('/dashboard/users')
  revalidatePath(`/dashboard/users/${newUser.id}`)
  return newUser
}
