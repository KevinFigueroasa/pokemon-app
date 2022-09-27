import { createSlice } from '@reduxjs/toolkit';
  
export const numPageNoneSlice = createSlice({
  name: 'numPageNone',
  initialState: true,
  reducers: {
    numPageNone: (state, actions) => {
      const n = actions.payload
      return n
    }
  }
})
  
export const { numPageNone } = numPageNoneSlice.actions;
export default numPageNoneSlice.reducer;