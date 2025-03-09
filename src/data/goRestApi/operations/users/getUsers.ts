import { apiConfig } from '@/src/data/ApiConfig'

import { goRestApi } from '../../goRestApi'
import { type User } from '../../model/user'

export interface GetUsersProps {
  page?: number
  perPage?: number
}

export async function getUsers({
  page = 1,
  perPage = 10,
}: GetUsersProps = {}): Promise<User[]> {
  const url = `/public/v2/users?page=${page}&per_page=${perPage}`
  const users: User[] = await goRestApi.get(apiConfig, url)

  return users
}
