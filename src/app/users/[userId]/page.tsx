import { type User } from '../../actions/user';
import { fetchUser } from '../../actions/user';

const sampleUserId = 7752433;

export default async function UserPage() {
  const user: User | undefined = await fetchUser(sampleUserId); 

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