import { useState } from 'react'

function App() {

  return (
    <>
    <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
      <div className='bg-white shadow-lg p-8 rounded-xl'>
        <h1 className='text-3xl font-bold text-center mb-6'>Login</h1>
        <h4 className='m-2'>Email</h4>
        <input className=' w-full mb-4 border rounded-lg' type='email' placeholder='Enter Email'/>
        <h4 className='m-2'>Password</h4>
        <input className='border rounded-lg mb-4 w-full' type='password' placeholder='Enter Password'/>
        <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'>Login</button>
      </div>
    </div>
    </>
  )
}

export default App
