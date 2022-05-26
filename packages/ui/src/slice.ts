import { createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const SliceName = 'my-slice'

export interface SliceState {
  name: string
}

export interface RootState {
  [SliceName]: SliceState
}

const initialState: SliceState = {
  name: 'Hugo',
}

export const MySlice = createSlice({
  initialState,
  name: SliceName,
  reducers: {},
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
