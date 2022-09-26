import { createSlice } from '@reduxjs/toolkit';
  
export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: 1,
  reducers: {
    currentPage: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { currentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;