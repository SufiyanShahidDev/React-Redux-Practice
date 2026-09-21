import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, reset } from './redux/slices/counter'

const App = () => {

const dispatch = useDispatch()

  return (
    <div className='bg-blue-950 h-screen text-blue-50'>
      <h1 className='font-bold text-4xl underline flex pt-5 justify-center'>Counter Application</h1>

      <div className='flex justify-center m-5 items-center text-2xl'>
        <button onClick={() => {dispatch(increment())}} className='bg-blue-800 p-3 rounded-2xl m-2 h-[70px]'>+</button>
        <button onClick={() => {dispatch(decrement())}} className='bg-blue-800 p-3 rounded-2xl m-2 h-[70px]'>-</button>
      </div>
        <div className='flex justify-center m-5 items-center text-2xl'>
          <button onClick={() => {dispatch(reset())}} className='bg-blue-800 p-3 rounded-2xl'>Reset</button>
        </div>
    </div>
  )
}

export default App