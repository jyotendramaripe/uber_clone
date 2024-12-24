import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover  bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col'>
        <img  className='ml-9 rounded-md backdrop-blur-md bg-white/10 shadow-lg w-16' src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png" alt="" />
        <div className='bg-white pb-7 w-full py-3 px-3 flex flex-col items-center'>
          <h2 className='text-[30px] font-medium'>Get Started With Uber</h2>
          <Link to ='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
