import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'read',
  initialState: {
    item: {}
  },
  reducers: {
    loadRead(state, { payload }) {
      return { ...state, item: payload }
    }
  }
})

export const { loadRead } = slice.actions

export const getRead = (state: any) => state.read

export default slice.reducer