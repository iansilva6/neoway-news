import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'news',
  initialState: {
    items: []
  },
  reducers: {
    loadNews(state, { payload }) {
      return { ...state, items: payload }
    }
  }
})

export const { loadNews } = slice.actions

export const getNews = (state: any) => state.news

export default slice.reducer