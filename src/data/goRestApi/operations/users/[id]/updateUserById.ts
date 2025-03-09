import { apiConfig } from '../../../../ApiConfig'
import { goRestApi } from '../../../goRestApi'
import { User } from '../../../model/user'

export type UpdateUserByIdProps = User

export async function updateUserById(props: UpdateUserByIdProps) {
  const user: User = await goRestApi.put(
    apiConfig,
    `/public/v2/users/${props.id}`,
    props as unknown as Record<string, unknown>
  )

  return user
}
