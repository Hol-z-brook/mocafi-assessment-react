import { goRestApi, apiConfig } from '@/src/data'
import { type User } from '../../../model/user'

export interface GetUserByIdProps {
  id: number
}

export async function getUserById({ id }: GetUserByIdProps): Promise<User> {
  // This is a mock implementation
  return {
    id,
    name: 'John Doe',
    email: 'john@example.com',
    gender: 'Male',
    status: 'active',
  }
}

export async function _getUserById({ id }: GetUserByIdProps): Promise<User> {
  const res = await goRestApi.get(apiConfig, `/users/${id}`)
  return res.json()
}
