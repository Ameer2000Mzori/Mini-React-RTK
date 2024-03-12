import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  users: [],
  products: [],
}

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
