import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slices/newsSlice'
import readReducer from './slices/readSlice'

export default configureStore({
  reducer: {
    news: newsReducer,
    read: readReducer
  }
})