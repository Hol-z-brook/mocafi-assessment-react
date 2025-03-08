import { type User } from '../../../model/user'
import { store } from '../../../store'

export interface GetUserByIdProps {
  id: number
}

export async function getUserById({
  id,
}: GetUserByIdProps): Promise<User | undefined> {
  return store.getUserById(id)
}
