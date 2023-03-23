import { InferGetStaticPropsType } from 'next'

import User from './components/User'

const Users = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="mb-24">Evelan GmbH</h1>
      <h2 className="mb-10">Users List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mx-4">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <button className="mt-4">Load More</button>
    </div>
  )
}

export default Users

type User = {
  id: number
  name: string
}

export const getStaticProps = async () => {
  // const res = await fetch('https://.../posts')
  // const posts: Post[] = await res.json()
  const users: User[] = []

  return {
    props: {
      users,
    },
  }
}
