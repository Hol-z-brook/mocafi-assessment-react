import { type User } from '../../../model/user'
import { goRestApi } from '../../../goRestApi'
import { apiConfig } from '../../../../ApiConfig'

export interface GetUserByIdProps {
  id: number
}

export async function getUserById({
  id,
}: GetUserByIdProps): Promise<User | undefined> {
  try {
    const user: User = await goRestApi.get(apiConfig, `/public/v2/users/${id}`)
    return user
  } catch (error) {
    console.error('Error fetching user by ID:', error)
    return undefined
  }
}
