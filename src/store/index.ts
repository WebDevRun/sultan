import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import productsSlice from './productsSlice'
import basketSlice from './basketSlice'

export const store = configureStore({
  reducer: {
    productsSlice,
    basketSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { type IProduct } from './productsSlice'
export { type ISelectedProduct } from './basketSlice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
