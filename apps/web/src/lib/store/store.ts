import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { MySlice } from 'ui'

import { AppSlice } from './appSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      [AppSlice.name]: AppSlice.reducer,
      [MySlice.name]: MySlice.reducer,
    },
  })

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<AppStore>(makeStore)
