import { createSelector } from '@reduxjs/toolkit'

import { RootState } from './store'

export const selectApp = (state: RootState) => state.app

export const selectAppVersion = createSelector(selectApp, (app) => app.version)
