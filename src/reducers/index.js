

import { combineReducers } from 'redux'
import user from './user'
import error from './error'

const reducers = combineReducers({
    user,
    error
})

export default reducers;