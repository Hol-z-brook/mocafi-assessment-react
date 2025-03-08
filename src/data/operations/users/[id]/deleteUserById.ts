import { store } from '../../../store'

export interface DeleteUserByIdProps {
  id: number
}

export async function deleteUserById({
  id,
}: DeleteUserByIdProps): Promise<boolean> {
  return store.deleteUser(id)
}
