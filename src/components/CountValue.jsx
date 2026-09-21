import React from 'react'
import { useSelector } from 'react-redux'

const CountValue = () => {

    const count = useSelector((state) => state.counter.value)

    return (
        <h1 className='flex justify-center m-5 items-center text-7xl font-semibold'>{count}</h1>
    )
}

export default CountValue