import Image from 'next/image'

import { User } from '@/src/types/user'

type Props = {
  user: User
}

const UserCard = ({ user }: Props) => {
  const combineName = () => `${user.first_name} ${user.last_name}`

  return (
    <div className="p-4 shadow">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={user.avatar}
          width={80}
          height={80}
          alt="User Profile"
          className="rounded-full h-20 w-20"
        />
        <p>{user.id}</p>
        <div className="mt-3 break-all">{user.email}</div>
        <div className="mt-3">{combineName()}</div>
      </div>
    </div>
  )
}

export default UserCard
