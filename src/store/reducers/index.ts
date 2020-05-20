import { combineReducers } from 'redux'
import orderlistReducer from './order-list-reducer'

export const reducers = combineReducers({
  orders: orderlistReducer,
})
