'use server'

import { type User } from '../user'
import { usersSample } from './_/users.sample'

export async function fetchUsers() {
  return usersSample // temporary hardcoded return
}

export async function _fetchUsers() {
  const res = await fetch('https://gorest.co.in/public/v2/users', {
    headers: {
      Authorization: `Bearer ${process.env.GOREST_API_KEY}`,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }

  return res.json()
}

export async function createUser(user: User) {
  const res = await fetch('https://gorest.co.in/public/v2/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  if (!res.ok) {
    throw new Error('Failed to create user')
  }

  return res.json()
}
