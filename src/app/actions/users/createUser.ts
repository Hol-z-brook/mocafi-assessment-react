'use server'

import { createUser as _createUser, type User } from '@/src/data'
import { type CreateUserSchema } from '@/src/data/model/user/User.schema'

export async function createUser(user: CreateUserSchema): Promise<User> {
  return _createUser(user)
}
