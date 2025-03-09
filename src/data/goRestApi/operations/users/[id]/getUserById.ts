import { type User } from '../../../model/user'
import { goRestApi } from '../../../goRestApi'
import { apiConfig } from '../../../../ApiConfig'

export interface GetUserByIdProps {
  id: number
}

export async function getUserById({ id }: GetUserByIdProps): Promise<User> {
  const user: User = await goRestApi.get(apiConfig, `/public/v2/users/${id}`)

  return user
}
