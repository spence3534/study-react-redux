import { createSlice } from '@reduxjs/toolkit'

interface UserInfo {
  value: number
}

const initialState: UserInfo = {
  value: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { setUserId } = userSlice.actions
export default userSlice.reducer