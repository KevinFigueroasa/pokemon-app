import { createSlice } from '@reduxjs/toolkit';
  
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: [],
  reducers: {
    pokemonArray : (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { pokemonArray } = pokemonSlice.actions;
export default pokemonSlice.reducer;