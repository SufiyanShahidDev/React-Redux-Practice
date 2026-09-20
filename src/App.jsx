import React from 'react'

const App = () => {
  return (
    <div className='bg-blue-950 h-screen text-blue-50'>
      <h1 className='font-bold text-4xl underline flex pt-5 justify-center'>Counter Application</h1>

      <div className='flex justify-center m-5 items-center text-2xl'>
        <button className='bg-blue-800 p-3 rounded-2xl m-2 h-[70px]'>+</button>
        <button className='bg-blue-800 p-3 rounded-2xl m-2 h-[70px]'>-</button>
      </div>
        <div className='flex justify-center m-5 items-center text-2xl'>
          <button className='bg-blue-800 p-3 rounded-2xl'>Reset</button>
        </div>
    </div>
  )
}

export default App