import { type User } from '../../model/user'
import { type CreateUserSchema } from '../../model/user/User.schema'
import { store } from '../../store'

export async function createUser(props: CreateUserSchema): Promise<User> {
  return store.createUser(props)
}
