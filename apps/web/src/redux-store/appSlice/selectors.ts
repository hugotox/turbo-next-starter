import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

export const selectApp = (state: RootState) => state.app

export const selectAppVersion = createSelector(selectApp, (app) => app.version)

export const selectIsBot = createSelector(selectApp, (app) => app.isBot)

export const selectAccessToken = createSelector(selectApp, (app) => app.accessToken)
