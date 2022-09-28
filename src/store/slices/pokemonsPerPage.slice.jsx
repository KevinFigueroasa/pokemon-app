import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonsPerPageSlice = createSlice({
	name: 'pokemonsPerPage',
    initialState: 12,
    reducers: {
        pokemonsPerPage: (state, action) => {
            return action.payload
            // return "Steven"
        }
    }
})

export const {pokemonsPerPage} = pokemonsPerPageSlice.actions;
export default pokemonsPerPageSlice.reducer;