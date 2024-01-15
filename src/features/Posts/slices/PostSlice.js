import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allPosts: [],
    loading: true
};


// create async requests
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
            data => data.json()
        )
        return res;
    }
);


export const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder.addCase(getPosts.pending, (state, action) => {
                // console.log('thakur:', state);
                state.loading = true;
                return state;
            })

            // handle here the success scenario else resolve the promise object in the component itself.
            builder.addCase(getPosts.fulfilled, (state, action) => {
                // console.log('thakur:', state);
                state.allPosts = action.payload
                state.loading = false;
                return state;
            })
            builder.addCase(getPosts.rejected, (state, action) => {
                // console.log('thakur:', state);
                state.loading = false;
                return state;
            })
        }
})

// export const { getPosts } = PostSlice.actions
export const postReducer = PostSlice.reducer;
