import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        user: userSlice,
    }
})