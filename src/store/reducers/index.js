import { combineReducers } from 'redux'

import searchVideoReducer from './searchVideoReducer'
import watchVideoReducer from './watchVideoReducer'

const rootReducer = combineReducers({
    searchVideoReducer,
    watchVideoReducer
})

export default rootReducer