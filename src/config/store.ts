import { createStore, applyMiddleware } from 'redux'

import { logger } from 'src/middleware/logger'
import { reducers } from '../reducers'

export const store = createStore(reducers, applyMiddleware(logger))
