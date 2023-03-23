import Image from 'next/image'

const User = () => {
  return (
    <div className="p-4 shadow">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/profile.jpg"
          width={80}
          height={80}
          alt="User Profile"
          className="rounded-full h-20 w-20"
        />
        <p>1</p>
        <div className="mt-3 break-all">beltondavid1@gmail.com</div>
        <div className="mt-3">Steven David</div>
      </div>
    </div>
  )
}

export default User
