import { apiConfig, goRestApi, type User } from '@/src/data'

export interface SignupProps extends Pick<User, 'name' | 'email' | 'gender'> {
  password: string
}

export async function signup({
  name,
  email,
  password,
  gender,
}: SignupProps): Promise<User> {
  const response = await goRestApi.post(apiConfig, '/auth/signup', {
    json: { email, password, name, gender },
  })

  if (response.status !== 201) {
    throw new Error('Failed to signup')
  }

  return response.json()
}
