import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  isBot: boolean
  version: string
}

const initialState: AppState = {
  isBot: false,
  version: '0.0.1',
}

export const AppSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setIsBot: (state, { payload }: PayloadAction<boolean>) => {
      state.isBot = payload
    },
  },
})
