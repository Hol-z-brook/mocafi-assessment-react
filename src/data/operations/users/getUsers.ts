import { type User } from '../../model/user'
import { store } from '../../store'

interface GetUsersProps {
  page?: number
  perPage?: number
  search?: string
}

export async function getUsers({
  page = 1,
  perPage = 10,
  search,
}: GetUsersProps = {}): Promise<User[]> {
  console.log('\n[Operation] Getting users with:', { page, perPage, search })
  let users = store.getUsers()

  // Apply search filter if provided
  if (search) {
    const searchLower = search.toLowerCase()
    users = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
    )
    console.log('[Operation] After search filter:', users.length, 'users found')
  }

  // Apply pagination
  const start = (page - 1) * perPage
  const end = start + perPage
  const paginatedUsers = users.slice(start, end)
  console.log(
    '[Operation] After pagination:',
    paginatedUsers.length,
    'users returned'
  )

  return paginatedUsers
}
