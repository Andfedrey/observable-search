import { createSlice } from '@reduxjs/toolkit'
import { skillsUpdate } from './asyncAction'

const initialState = {
  value: [],
  status: '',
  error: null
}

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(skillsUpdate.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(skillsUpdate.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.value = action.payload
        state.error = null
      })
      .addCase(skillsUpdate.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})


export default skillsSlice.reducer