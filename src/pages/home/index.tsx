import User from './components/User'

const Home = () => {
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

export default Home
