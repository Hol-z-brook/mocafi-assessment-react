import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  gender: z.enum(['Male', 'Female', 'Rather not say'], {
    required_error: 'Please select a gender',
  }),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  status: z.optional(z.enum(['active', 'inactive'])),
})

export type CreateUserSchema = z.infer<typeof createUserSchema>
