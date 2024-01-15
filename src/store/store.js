import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from '../features/Posts/slices/PostSlice';

export const store = configureStore({
    reducer:{postReducer}
});
