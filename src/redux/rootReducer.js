import { combineReducers } from 'redux'
import { beamReducer } from './beamReducer'

export const rooReducer = combineReducers({
  beam: beamReducer,
})
