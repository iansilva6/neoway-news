import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slices/newsSlice'
import readReducer from './slices/readSlice'
import historySlice from './slices/historySlice'

export default configureStore({
  reducer: {
    news: newsReducer,
    read: readReducer,
    history: historySlice
  }
})