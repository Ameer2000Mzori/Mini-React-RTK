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

    addUser: (state, action) => {
      const { name, password } = action.payload
      console.log('user info before add : ', name, password)

      state.users = [
        ...state.users,
        {
          name,
          password,
        },
      ]
      console.log('this is users after add: ', state.users)
    },
  },
})

export const { increment, decrement, addProduct, addUser } =
  counterSlice.actions

export default counterSlice.reducer
