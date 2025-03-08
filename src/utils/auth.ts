import { toast } from 'sonner'

export const DEMO_USERS = {
  login: {
    email: 'dev@mocafi.com',
    password: 'password123',
  },
  signup: {
    name: 'Demo User',
    gender: 'Rather not say',
    email: 'demo@mocafi.com',
    password: 'demo123456',
    confirmPassword: 'demo123456',
  },
  create: {
    name: 'John Smith',
    gender: 'Male',
    email: 'john.smith@example.com',
  },
} as const

interface HandleAuthSuccessOptions {
  message?: string
  description?: string
  redirectPath?: string
}

export function handleAuthSuccess({
  message = '👋 This is just a prototype!',
  description = 'No actual authentication occurred.',
  redirectPath = '/dashboard',
}: HandleAuthSuccessOptions = {}) {
  toast.success(message, {
    description,
  })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(redirectPath)
    }, 2000)
  })
}
