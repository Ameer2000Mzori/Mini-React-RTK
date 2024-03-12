import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  users: [],
  products: [],
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    },

    addProduct: (state, action) => {
      const { productName, description, price, stock, category } =
        action.payload

      state.products = [
        ...state.products,
        {
          productName,
          description,
          price,
          stock,
          category,
        },
      ]
      console.log('this is products after add: ', state.products)
    },
  },
})

export const { increment, decrement, addProduct } = counterSlice.actions

export default counterSlice.reducer
