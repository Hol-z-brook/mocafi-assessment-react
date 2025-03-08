import { User } from './User.model'

interface GetUsersSampleProps {
  page?: number
  perPage?: number
  search?: string
}

export const getUsersSample = async (
  props: GetUsersSampleProps = {}
): Promise<User[]> => {
  const { page = 1, perPage = 10, search } = props

  const users: User[] = [
    {
      id: 7752435,
      name: 'Nanda Deshpande',
      email: 'deshpande_nanda@keeling.example',
      gender: 'Male',
      status: 'inactive',
    },
    {
      id: 7752434,
      name: 'Kama Trivedi',
      email: 'kama_trivedi@daniel.test',
      gender: 'Female',
      status: 'inactive',
    },
    {
      id: 7752433,
      name: 'Anjushri Nehru',
      email: 'nehru_anjushri@stiedemann-turcotte.test',
      gender: 'Male',
      status: 'inactive',
    },
    {
      id: 7752432,
      name: 'Gati Desai CPA',
      email: 'cpa_desai_gati@klocko.example',
      gender: 'Female',
      status: 'inactive',
    },
    {
      id: 7752431,
      name: 'Deeptanshu Patil',
      email: 'deeptanshu_patil@kulas-ernser.example',
      gender: 'Female',
      status: 'active',
    },
    {
      id: 7752430,
      name: 'Parvati Varrier',
      email: 'varrier_parvati@cormier-dicki.test',
      gender: 'Female',
      status: 'inactive',
    },
    {
      id: 7752429,
      name: 'Rep. Kannen Pilla',
      email: 'kannen_pilla_rep@kris.example',
      gender: 'Male',
      status: 'active',
    },
    {
      id: 7752428,
      name: 'Giri Verma',
      email: 'giri_verma@kulas.example',
      gender: 'Male',
      status: 'active',
    },
    {
      id: 7752427,
      name: 'Amaresh Nayar',
      email: 'amaresh_nayar@dibbert.example',
      gender: 'Female',
      status: 'active',
    },
    {
      id: 7752426,
      name: 'Bhisham Adiga',
      email: 'bhisham_adiga@sauer.test',
      gender: 'Male',
      status: 'inactive',
    },
  ]

  const filteredUsers = search
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      )
    : users

  return filteredUsers.slice((page - 1) * perPage, page * perPage)
}
