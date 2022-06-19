import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface AppState {
  accessToken: string
  isBot: boolean
  version: string
}

const initialState: AppState = {
  accessToken: '',
  isBot: false,
  version: '0.0.1',
}

export const AppSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      state.accessToken = payload
    },
    setIsBot: (state, { payload }: PayloadAction<boolean>) => {
      state.isBot = payload
    },
  },
})
