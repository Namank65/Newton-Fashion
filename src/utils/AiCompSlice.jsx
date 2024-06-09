import { createSlice } from "@reduxjs/toolkit";

const AiCompSlice = createSlice({
  name: "aiComp",
  initialState: {
    showAiSearch: false,
    clothpic: null,
    clothNames: null,
    removeResults: null,
    productSize: ""
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
    },
    productSize: (state, action) => {
      state.productSize = action.payload
    } 

  },
});

export const { toggleAiSearch, aiSearchResults, removeAiSearchResults, productSize } = AiCompSlice.actions;
export default AiCompSlice.reducer;
