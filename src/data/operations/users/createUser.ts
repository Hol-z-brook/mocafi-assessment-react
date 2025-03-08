import { apiConfig, goRestApi } from '@/src/data'
import { type User } from '../../model/user'

export interface CreateUserProps extends User {}

export async function createUser(props: CreateUserProps): Promise<User> {
  const res = await goRestApi.post(apiConfig, '/public/v2/users', {
    json: props,
  })

  if (!res.ok) {
    throw new Error('Failed to create user')
  }

  return res.json()
}
