'use server'

import {
  getUsers as _getUsers,
  type User,
  type GetUsersProps,
} from '@/src/data'

export async function getUsers(props: GetUsersProps): Promise<User[]> {
  return _getUsers(props)
}
