import React from 'react'
import { UserButton } from '@clerk/nextjs'


const Home = () => {
  return (
    <div>
        <UserButton afterSignOutUrl='/'/>
      <h1 className='h1-bold'> hello </h1>
      <h2 className='h2-bold'>hello</h2>
    </div>
  )
}

export default Home