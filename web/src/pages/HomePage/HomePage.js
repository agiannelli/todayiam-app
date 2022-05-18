import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>today i am app</h1>
      <p>coming soon!</p>
    </>
  )
}

export default HomePage
