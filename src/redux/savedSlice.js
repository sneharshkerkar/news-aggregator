import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.url !== action.payload.url
      );
    },
  },
});

export const { addArticle, removeArticle } = savedSlice.actions;
export default savedSlice.reducer;
