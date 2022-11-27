import { createSlice } from "@reduxjs/toolkit"
import { data } from "dataBase";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [...data],
        searchFilter: [],
        largeBg: [],
        status: null,
        error: null,
    },
    reducers: {
        getAllMovies: (state, { payload }) => {
            state.movies = payload
        },
        handleSearchFilter: (state, { payload }) => {
            state.searchFilter = payload
        },
        changeRateingMovie: (state, { payload }) => {
            state.movies = payload;
        },
        addMovie: (state, { payload }) => {
            state.movies.push(payload)
        },
        removeMovie: (state, { payload }) => {
            state.movies = state.movies.filter(movie => movie.name !== payload)
        },
        setLargeBgMovies: (state, { payload }) => {
            state.largeBg = payload;
        },

    },

})

export const { getAllMovies, handleSearchFilter, changeRateingMovie, addMovie, removeMovie, setLargeBgMovies } = moviesSlice.actions;
export default moviesSlice.reducer;