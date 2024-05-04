
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CommentServices, PostServices } from "services/test/type";

interface StaticState {
    error?: string;
    posts?: any[];
    comments?: any[];
}

const initialState: StaticState = {
    posts: [],
    comments: [],
};

export const testSlice = createSlice({
    name: "testReducer",
    initialState,
    reducers: {
        setPosts($state, action: PayloadAction<any[]>) {
            $state.posts = action.payload;
        },
        setComments($state, action: PayloadAction<any[]>) {
            $state.comments = action.payload;
        },
    },
    extraReducers() {
        // builder.addCase(getStaticTestPostAsync.fulfilled, ($state, action) => {
        //     $state.dataPost = action.payload;
        // });
    },
});

export const { setPosts, setComments } = testSlice.actions;

export default testSlice.reducer;
