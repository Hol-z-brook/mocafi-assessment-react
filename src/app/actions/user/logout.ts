'use server'

import { logout as _logout } from '@/src/data'

export async function logout() {
  return _logout()
}
