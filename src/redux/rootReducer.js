import { combineReducers } from 'redux'
import { beamReducer } from './beamReducer'

export const rootReducer = combineReducers({
  beam: beamReducer,
})
