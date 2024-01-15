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


export const addPosts = createAsyncThunk(
    'posts/addPost',
    async (payload, thunkAPI) => {
        console.log('add post payload: ', payload);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            )
            const data = await response.json();
            return data
        } catch(err) {
            return thunkAPI.rejectWithValue('OOPs there is an error');
        } 
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

            builder.addCase(addPosts.pending, (state, action) => {
                console.log('thakur:', state);
                state.loading = true;
                return state;
            })

            // handle here the success scenario else resolve the promise object in the component itself.
            builder.addCase(addPosts.fulfilled, (state, action) => {
                // console.log('thakur:', state);
                // state.allPosts = action.payload
                state.loading = false;
                // return state;
            })
            builder.addCase(addPosts.rejected, (state, action) => {
                console.log('thakur:', state);
                state.loading = false;
                return state;
            })
        }
})

// export const { getPosts } = PostSlice.actions
export const postReducer = PostSlice.reducer;
