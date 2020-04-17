import { composeAppRoute } from 'src/functions/helper-functions'

export const HOME_PAGE_ENDPOINT = '/'
export const SIGN_IN_ENDPOINT = '/sign-in'
export const SIGN_UP_ENDPOINT = '/sign-up'
export const FORGOT_PASSWORD_ENDPOINT = '/forgot-password'

export const MAIN_PAGE_ROUTE = composeAppRoute([
  HOME_PAGE_ENDPOINT,
  SIGN_IN_ENDPOINT,
  SIGN_UP_ENDPOINT,
  FORGOT_PASSWORD_ENDPOINT,
])
