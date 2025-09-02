import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('currentUserInfo')) || null,
    chatUser:JSON.parse(localStorage.getItem('chatUser')) || null
  },
  reducers: {
    userInfo: (state , actions) => {
      state.value = actions .payload
    },
    selectChatUserInfo:(state ,action )=>{
      state.chatUser = action.payload
    }
  },
})

export const { userInfo ,selectChatUserInfo } = userInfoSlice.actions

export default userInfoSlice.reducer