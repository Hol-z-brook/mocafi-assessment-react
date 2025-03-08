export interface DeleteUserByIdProps {
  id: number
}

export async function deleteUserById({
  id,
}: DeleteUserByIdProps): Promise<boolean> {
  // This is a mock implementation that simulates deleting a user with the given id
  console.log(`Deleting user with id: ${id}`)
  return Promise.resolve(true)
}
