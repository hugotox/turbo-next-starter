import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

export const makeStore = () =>
  configureStore({
    reducer: {
      root: () => ({}),
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
