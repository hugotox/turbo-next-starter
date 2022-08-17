import { compose } from '@reduxjs/toolkit'

import { RootState } from '../store'

export const selectApp = (state: RootState) => state.app

export const selectAppVersion = compose((app) => app.version, selectApp)

export const selectIsBot = compose((app) => app.isBot, selectApp)

export const selectAccessToken = compose((app) => app.accessToken, selectApp)

export const selectApolloReady = compose((accessToken) => !!accessToken, selectAccessToken)
