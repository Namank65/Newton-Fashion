import { createSlice } from "@reduxjs/toolkit";

const AiCompSlice = createSlice({
  name: "aiComp",
  initialState: {
    showAiSearch: false,
    clothpic: null,
    clothNames: null,
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
  },
});

export const { toggleAiSearch, aiSearchResults } = AiCompSlice.actions;
export default AiCompSlice.reducer;
