import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState  = {
  accessToken: undefined,
  refreshToken: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    deleteTokens: (state) => {
      state.accessToken = undefined
      state.refreshToken = undefined
    }
  },
})

export const { setTokens, deleteTokens } = authSlice.actions

export default authSlice.reducer