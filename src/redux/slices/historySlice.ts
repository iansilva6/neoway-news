import { createSlice } from '@reduxjs/toolkit'

const addItemToArray = (state: any, action: any) => {
  state.push(action.payload)
}

export const slice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    loadHistory: addItemToArray,
  },
})

export const { loadHistory } = slice.actions

export const getHistory = (state: any) => state.history

export default slice.reducer