
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slices/counter'
import CountValue from './components/CountValue'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter)

  // console.log(count);

  return (
    <div className='bg-blue-950 h-screen text-blue-50'>
      <h1 className='font-bold text-4xl underline flex pt-5 justify-center'>Counter Application</h1>

      <CountValue />

      <div className='flex justify-center m-5 items-center text-2xl'>
        <button onClick={() => { dispatch(decrement()) }} className='bg-blue-800 p-3 rounded-2xl m-2 hover:bg-blue-900 cursor-pointer text-center font-bold text-4xl'>-</button>
        <button onClick={() => { dispatch(reset()) }} className='bg-blue-800 p-3 rounded-2xl hover:bg-blue-900 cursor-pointer'>Reset</button>
        <button onClick={() => { dispatch(increment()) }} className='bg-blue-800 p-3 rounded-2xl m-2 hover:bg-blue-900 cursor-pointer text-center font-bold text-4xl'>+</button>
      </div>
      <div className='flex justify-center m-5 items-center text-2xl'>
      </div>
    </div>
  )
}

export default App