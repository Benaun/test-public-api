import { configureStore } from '@reduxjs/toolkit'
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

import { charactersApi } from '@/features/character/api'
import { characterReducer } from '@/features/character/model'

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    [charactersApi.reducerPath]: charactersApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(charactersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector
