import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'

export const store = configureStore({
  reducer: {
    user: userSlice
  }
})

export type userState = ReturnType<typeof store.getState>;
export type userDispatch = typeof store.dispatch
