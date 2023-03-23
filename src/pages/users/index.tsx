import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import UserCard from './components/UserCard'
import { getListUsers } from '@/src/queries/users/api'
import { useGetListUsers } from '@/src/queries/users/queries'
import { User } from '@/src/types/user'
import { ApiListResponse } from '@/src/types/apiResponse'

const Users = () => {
  const [page, setPage] = useState<number>(1)

  const { data, refetch } = useGetListUsers(page)

  const [users, setUsers] = useState<ApiListResponse<User> | undefined>(data)

  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="mb-24">Evelan GmbH</h1>
      <h2 className="mb-10">Users List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mx-4">
        {(users?.total ?? 0) > 0 ? (
          users?.data.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <button className="mt-4" onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </div>
  )
}

export default Users

export const getStaticProps = async () => {
  // For React Query Hydration (https://tanstack.com/query/v4/docs/react/guides/ssr)
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['users'], () => getListUsers(1))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
