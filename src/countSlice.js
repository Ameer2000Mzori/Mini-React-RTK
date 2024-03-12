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

    addProduct: (state, action) => {
      const payload = action.payload // Extract payload from action
      const newProduct = {
        productName: payload.productName,
        description: payload.description,
        price: payload.price,
        stock: payload.stock,
        category: payload.category,
      }

      state.products.unshift(newProduct)
      console.log('this is products after add: ', state.products)
    },
  },
})

export const { increment, decrement, addProduct } = counterSlice.actions

export default counterSlice.reducer
