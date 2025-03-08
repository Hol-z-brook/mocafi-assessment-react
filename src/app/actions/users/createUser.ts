'use server'

import {
  createUser as _createUser,
  type User,
  type CreateUserProps,
} from '@/src/data'

export async function createUser(user: CreateUserProps): Promise<User> {
  return _createUser(user)
}
