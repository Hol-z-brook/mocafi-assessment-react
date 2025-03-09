import { goRestApi } from '../../../goRestApi'
import { apiConfig } from '../../../../ApiConfig'

export interface DeleteUserByIdProps {
  id: number
}

export async function deleteUserById({
  id,
}: DeleteUserByIdProps): Promise<boolean> {
  await goRestApi.delete(apiConfig, `/public/v2/users/${id}`)

  return true
}
