import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  cart: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.cart += 1
    },
    decrement: (state) => {
      if (state.cart > 0) {
        state.cart -= 1;
      }
    }}
  })

  
  export const { increment, decrement } = counterSlice.actions
  export default counterSlice.reducer
