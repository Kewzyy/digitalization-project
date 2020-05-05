import { combineReducers } from 'redux'
import { reducer as appReducer } from './core/app'

export const reducers = combineReducers({
  app: appReducer,
})
