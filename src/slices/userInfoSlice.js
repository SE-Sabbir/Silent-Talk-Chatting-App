import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('currentUserInfo')) || null,
  },
  reducers: {
    userInfo: (state , actions) => {
      state.value = actions .payload
    }
  },
})

export const { userInfo } = userInfoSlice.actions

export default userInfoSlice.reducer