import { type User } from '../actions/user'
import { fetchUsers } from '../actions/users'

export default async function UsersPage() {
  const users: User[] = await fetchUsers()

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}
