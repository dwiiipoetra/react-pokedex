import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonRoute } from "../../utils/Constants";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk(
    "pokemon/initialData",
    async () => {
        try {
            const { data } = await axios.get(pokemonRoute)
            // console.log({data});
            return data.results
        } catch (err) {
            console.log(err);
        }
    }
)