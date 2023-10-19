import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.counterReducer.count)
  return (
    <>
        <h1 className='text-center mt-5'> Counter App </h1>
        <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'70vh'}}>
            <div className="border rounded p-5 w-25 d-flex justify-content-center align-items-center flex-column">
                <h1> {count} </h1>
                <div className='d-flex justify-content-between w-100 mt-5'>
                    <button className='btn btn-warning' onClick={()=>dispatch(decrement())}> Decrement </button>
                    <button className='btn btn-danger' onClick={()=>dispatch(reset())}> Reset </button>
                    <button className='btn btn-success' onClick={()=>dispatch(increment())}> Increment </button>
                </div>
                <button className='btn btn-primary mt-3' onClick={()=>dispatch(incrementByAmount(6))}> Increment By Amount </button>
            </div>
        </div>
    </>
  )
}

export default Counter