import { apiConfig, goRestApi } from '@/src/data'
import { type User } from '../../model/user'

export async function createUser(props: User): Promise<User> {
  const res = await goRestApi.post(apiConfig, '/public/v2/users', {
    json: props,
  })

  if (!res.ok) {
    throw new Error('Failed to create user')
  }

  return res.json()
}
