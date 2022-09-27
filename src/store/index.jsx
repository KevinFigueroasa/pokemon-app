import { configureStore } from "@reduxjs/toolkit";
import pokeMasterSlice from "./slices/pokeMaster.slice";
import currentPageSlice from "./slices/currentPage.slice";
import pokemonsPerPageSlice from "./slices/pokemonsPerPage.slice";
import numPageNoneSlice from "./slices/numPageNone.Slice";
import pokemonSlice from "./slices/pokemon.Slice";

export default configureStore({
    reducer: {
        userName: pokeMasterSlice,
        currentPage: currentPageSlice,
        pokemonsPerPage: pokemonsPerPageSlice,
        numPageNoneIt: numPageNoneSlice,
        pokemon: pokemonSlice
    }
})