import { apiConfig, goRestApi } from '@/src/data'
import { type User } from '../../model/user'
import { type CreateUserSchema } from '../../model/user/User.schema'

export async function createUser(props: CreateUserSchema): Promise<User> {
  const res = await goRestApi.post(apiConfig, '/public/v2/users', {
    json: props,
  })

  if (!res.ok) {
    throw new Error('Failed to create user')
  }

  return res.json()
}
