'use server'

import { login as _login, type LoginProps, type User } from '@/src/data'

export async function login(props: LoginProps): Promise<User> {
  return _login(props)
}
