/* eslint-disable no-promise-executor-return */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
    darkMode: boolean;
    openEmail: boolean;
    openText: boolean;
}

const initialState: ExampleState = {
    darkMode: true,
    openEmail: false,
    openText: false,
};
const delay = async () =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve(true);
        }, 2000),
    );

export const incrementAsync = createAsyncThunk("exampleReducer/example", async (amount: number) => {
    await delay();
    return amount;
});

export const darkModeSlice = createSlice({
    name: "exampleReducer",
    initialState,
    reducers: {
        toggleDarkMode($state, action: PayloadAction<boolean>) {
            $state.darkMode = action.payload;
        },
        toggleEmail($state, action: PayloadAction<boolean>) {
            $state.openEmail = action.payload;
        },
        toggleText($state, action: PayloadAction<boolean>) {
            $state.openText = action.payload;
        },
    },
    extraReducers(builder) {
        // builder.addCase(incrementAsync.fulfilled, ($state, action) => {
        //   $state.value += action.payload;
        // });
    },
});

export const { toggleDarkMode, toggleEmail, toggleText } = darkModeSlice.actions;

export default darkModeSlice.reducer;
