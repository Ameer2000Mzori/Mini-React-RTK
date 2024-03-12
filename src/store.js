import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './countSlice.js' // Assuming counterSlice.js is in the same directory

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
