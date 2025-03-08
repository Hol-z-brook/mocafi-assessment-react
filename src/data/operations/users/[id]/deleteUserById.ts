export interface DeleteUserByIdProps {
  id: number
}

export async function deleteUserById({
  id,
}: DeleteUserByIdProps): Promise<boolean> {
  // This is a mock implementation
  return Promise.resolve(true)
}
