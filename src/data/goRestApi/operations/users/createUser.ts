import { type User } from '../../model/user'
import { goRestApi } from '../../goRestApi'
import { apiConfig } from '../../../ApiConfig'

export type CreateUserProps = Omit<User, 'id'>

export async function createUser(props: CreateUserProps): Promise<User> {
  const user: User = await goRestApi.post(apiConfig, '/public/v2/users', props)

  return user
}
