'use server'

import { getUsers as _getUsers, type GetUsersProps } from '@/src/data'

export async function getUsers(props: GetUsersProps) {
  return _getUsers(props)
}
