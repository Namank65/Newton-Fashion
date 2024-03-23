import { createSlice } from "@reduxjs/toolkit";

const AiCompSlice = createSlice({
  name: "aiComp",
  initialState: {
    showAiSearch: false,
    clothpic: null,
    clothNames: null,
    removeResults: null
  },
  reducers: {
    toggleAiSearch: (state) => {
      state.showAiSearch = !state.showAiSearch;
    },
    aiSearchResults: (state, action) => {
      const { clothNames, clothpic } = action.payload;
      state.clothpic = clothpic;
      state.clothNames = clothNames;
    },
    removeAiSearchResults: (state) => {
      state.clothpic.length = 0
    }
  },
});

export const { toggleAiSearch, aiSearchResults, removeAiSearchResults } = AiCompSlice.actions;
export default AiCompSlice.reducer;
