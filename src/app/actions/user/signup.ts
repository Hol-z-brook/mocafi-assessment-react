'use server'

import { signup as _signup, type SignupProps, type User } from '@/src/data'

export async function signup(props: SignupProps): Promise<User> {
  return _signup(props)
}
