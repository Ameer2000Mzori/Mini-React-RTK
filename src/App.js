import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './countSlice.js' // Assuming counterSlice.js is in the same directory

function App() {
  const count = useSelector((state) => state.counter.count) // Corrected state access
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
