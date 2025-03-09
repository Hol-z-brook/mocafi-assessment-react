import { ApiConfig } from '../ApiConfig'

export const goRestApi = {
  get: async (config: ApiConfig, path: string) => {
    const url = `${config.origin}${path}`

    const res = await fetch(url, {
      method: 'GET',
      headers: config.headers,
    })

    if (!res.ok) {
      throw new Error('Failed to fetch user')
    }

    return res.json()
  },
  post: async <T extends Record<string, unknown>>(
    config: ApiConfig,
    path: string,
    body: T
  ) => {
    const res = await fetch(`${config.origin}${path}`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to create user')
    }

    return res.json()
  },
  put: async <T extends Record<string, unknown>>(
    config: ApiConfig,
    path: string,
    body: T
  ) => {
    const res = await fetch(`${config.origin}${path}`, {
      method: 'PUT',
      headers: config.headers,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to update user')
    }

    return res.json()
  },
  delete: async (config: ApiConfig, path: string) => {
    const res = await fetch(`${config.origin}${path}`, {
      method: 'DELETE',
      headers: config.headers,
    })

    if (!res.ok) {
      throw new Error('Failed to delete user')
    }

    return res.json()
  },
}
