import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import UserCard from './components/UserCard'
import { getListUsers } from '@/src/queries/users/api'
import { useGetListUsers } from '@/src/queries/users/queries'
import { User } from '@/src/types/user'

const Users = () => {
  const [page, setPage] = useState<number>(1)
  const [disable, setDisabled] = useState<boolean>(false)

  // React Query for querying the data. Initially gets the data from getStaticProps dehydrated state
  const { data, refetch, isFetching } = useGetListUsers(page)

  const [users, setUsers] = useState<User[] | undefined>(data?.data)

  const loadMore = async () => {
    if (page !== 1) {
      const { data } = await refetch({
        queryKey: ['users', page],
      })

      // Append the data to users array
      const newUsers = data?.data
      setUsers((existingData) => [...(existingData ?? []), ...(newUsers ?? [])])

      // Check if there's more data, if no more data then disable button
      if (data?.total_pages === page) setDisabled(true)
    }
  }

  useEffect(() => {
    loadMore()
  }, [page])

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full py-4">
      <h1 className="mb-24">MSDavid - Evelan GmbH</h1>
      <h2 className="mb-10">Users List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mx-4">
        {(data?.total ?? 0) > 0 ? (
          users?.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <button
        className="mt-4"
        onClick={() => setPage(page + 1)}
        disabled={isFetching || disable}
      >
        Load More
      </button>
    </div>
  )
}

export default Users

export const getStaticProps = async () => {
  // For React Query Hydration (https://tanstack.com/query/v4/docs/react/guides/ssr)
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['users', 1], () => getListUsers(1))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
