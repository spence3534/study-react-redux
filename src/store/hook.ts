import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { userDispatch, userState } from './store'

export const useUserDispatch = () => useDispatch<userDispatch>();
export const useUserSelector: TypedUseSelectorHook<userState> = useSelector