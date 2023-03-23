import { InferGetStaticPropsType } from 'next'

import UserCard from './components/UserCard'
import { type User } from '@/src/types/user'

const Users = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="mb-24">Evelan GmbH</h1>
      <h2 className="mb-10">Users List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mx-4">
        {/* <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard /> */}
      </div>
      <button className="mt-4">Load More</button>
    </div>
  )
}

export default Users

export const getStaticProps = async () => {
  const users: User[] = []
  console.log('get static proopss')

  return {
    props: {
      users,
    },
  }
}
