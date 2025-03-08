import { goRestApi, apiConfig } from '@/src/data'
import { type User } from '../../model/user'
import { getUsersSample } from '../../model/user/users.sample'

export interface GetUsersProps {
  page?: number
  perPage?: number
  search?: string
  status?: 'active' | 'inactive'
}

export async function getUsers(props: GetUsersProps = {}): Promise<User[]> {
  return getUsersSample(props)
}

export async function _getUsers(props: GetUsersProps = {}): Promise<User[]> {
  const queryParams = new URLSearchParams()
  if (props.page) queryParams.set('page', props.page.toString())
  if (props.perPage) queryParams.set('per_page', props.perPage.toString())
  if (props.search) queryParams.set('search', props.search)
  if (props.status) queryParams.set('status', props.status)

  const res = await goRestApi.get(
    apiConfig,
    `/public/v2/users?${queryParams.toString()}`
  )

  if (!res.ok) {
    throw new Error('Failed to get users')
  }

  return res.json()
}
