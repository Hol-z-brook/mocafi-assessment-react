'use server'

import { getActiveUser as _getActiveUser, type User } from '@/src/data'

export async function getActiveUser(): Promise<User> {
  return _getActiveUser()
}
