import { useQuery } from '@tanstack/react-query'

import { getListUsers } from './api'

const useGetListUsers = (page: number) =>
  useQuery(['users', page], () => getListUsers(page), {
    keepPreviousData: true,
  })

export { useGetListUsers }
