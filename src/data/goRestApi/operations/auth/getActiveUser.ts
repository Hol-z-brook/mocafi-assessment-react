import { getUsersSample, type User } from '../../model/user'

export async function getActiveUser(): Promise<User> {
  const user = await getUsersSample()
  return user[0]
}
