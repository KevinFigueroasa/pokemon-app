import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokeMasterSlice = createSlice({
	name: 'pokeMaster',
    initialState: "",
    reducers: {
        changeName: (state, action) => {
            const changename = action.payload
            return changename
            // return "Steven"
        }
    }
})

export const {changeName} = pokeMasterSlice.actions;

export default pokeMasterSlice.reducer;