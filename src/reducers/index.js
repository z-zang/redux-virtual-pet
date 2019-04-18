import { combineReducers } from 'redux'
import names from './names'
import stats from './stats'
import items from './items'

export default combineReducers({
  names, stats, items
})