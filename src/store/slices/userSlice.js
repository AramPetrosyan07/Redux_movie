
const { createSlice } = require("@reduxjs/toolkit");

const userSLice = createSlice({
    name: "user",
    initialState: {
        id: null,
        name: null,
        date: null,
        email: null,
        pass: null,
        color: "#4d48f6",
        favorite: [],
        voteMovies: [],
        moviesHistory: [],
        role: null,
    },
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.date = action.payload.date;
            state.email = action.payload.email;
            state.pass = action.payload.pass;
            state.color = action.payload.color;
            state.favorite = action.payload.favorite;
            state.voteMovies = action.payload.voteMovies;
            state.moviesHistory = action.payload.moviesHistory;
            state.role = action.payload.role;
        },
        removeUser(state, action) {
            state.id = null;
            state.name = null;
            state.date = null;
            state.email = null;
            state.pass = null;
            state.favorite = null;
            state.voteMovies = null;
            state.moviesHistory = null;
            state.role = null;
        },
        addFavoriteMovie(state, action) {
            state.favorite.push(action.payload)
        },
        delFavoriteMovie(state, action) {
            state.favorite = action.payload;
        },
        addVoteMovies(state, action) {
            state.voteMovies.push(action.payload)
        },
        addMovieToHistory(state, action) {
            state.moviesHistory = action.payload
        },
        changeInfo(state, { payload }) {
            state[payload[0]] = payload[1]
        }

    }
})

export const { setUser, removeUser, addFavoriteMovie, addVoteMovies, addMovieToHistory, delFavoriteMovie, changeInfo } = userSLice.actions;
export default userSLice.reducer;