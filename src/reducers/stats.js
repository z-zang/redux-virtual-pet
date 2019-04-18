import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';
import * as utils from '../functions';

export default (state = initialState.stats, action) => {
  const happy = state.happiness >= 100 ? 0 : (state.hunger || state.health) >= 60 ? 10 : -10
  const exp = state.exp >= 100 ? 0 : state.exp + 10
  switch (action.type) {
    
    case actionTypes.PLAY_CATCH:
      console.log('play catch fired')
      console.log(state.hunger, state.health)
      utils.example();

      

      return {
        ...state, 
        happiness: state.happiness + happy,
        exp: exp,
        money: state.money + 10,
        hunger: state.hunger - 10,
        health: state.health - 5, 
      }
    case actionTypes.GO_TO_SLEEP:
      return {
        ...state, 
        happiness: state.happiness + happy,
        health: state.health + 5, 
      }
    case actionTypes.EAT_FOOD:
      return {
        ...state, 
        hunger: state.hunger + 10}
    default:
      return state;
  }
}