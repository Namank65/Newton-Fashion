import { createSlice } from "@reduxjs/toolkit";

const AiCompSlice = createSlice({
    name: "aiComp",
    initialState: {
        showAiSearch: false
    },
    reducers: {
        toggleAiSearch: (state) => {
            state.showAiSearch = !state.showAiSearch
        }
    }
})

export const {toggleAiSearch} = AiCompSlice.actions;
export default AiCompSlice.reducer;