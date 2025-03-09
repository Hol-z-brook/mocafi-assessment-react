'use server'

import { logout as _logout } from '@/src/data'

export async function logout(): Promise<boolean> {
  return _logout()
}
