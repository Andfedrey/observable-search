import { createAsyncThunk } from "@reduxjs/toolkit"

export const skillsUpdate = createAsyncThunk(
  'skills/update',
  async (inputInSearch, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:7070/api/search?q=${inputInSearch}`)
      const data = await response.json()
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
