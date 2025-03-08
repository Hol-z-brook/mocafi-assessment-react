'use server'

import { createUser as _createUser, type User } from '@/src/data'
import { type CreateUserSchema } from '@/src/data/model/user/User.schema'
import { revalidatePath } from 'next/cache'

export async function createUser(user: CreateUserSchema): Promise<User> {
  console.log('\n[Server Action] Creating user:', user)
  const newUser = await _createUser(user)
  console.log('[Server Action] Created user:', newUser)

  // Revalidate the users list and the new user's page
  revalidatePath('/dashboard/users')
  revalidatePath(`/dashboard/users/${newUser.id}`)
  return newUser
}
