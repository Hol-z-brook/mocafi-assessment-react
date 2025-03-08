import { apiConfig, goRestApi } from '@/src/data'
import { type User } from '../../model/user'

export interface LoginProps {
  email: string
  password: string
}

export async function login({ email, password }: LoginProps): Promise<User> {
  const response = await goRestApi.post(apiConfig, '/auth/login', {
    json: { email, password },
  })

  if (response.status !== 200) {
    throw new Error('Failed to login')
  }

  return response.json()
}
