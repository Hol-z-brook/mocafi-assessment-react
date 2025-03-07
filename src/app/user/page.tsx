import { fetchUser } from '../actions/user';

const currentUserId = 7752435;

export default async function UsersPage() {
  const user = await fetchUser(currentUserId); 

  return (
    <div>
      <h1>User</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.gender}</p>
      <p>{user?.status}</p>
    </div>
  );
}