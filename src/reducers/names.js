import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.names, action) => {
  switch (action.type) {
    case actionTypes.SET_PET_NAME:
      return {...state, petName: action.petName}
    case actionTypes.SET_USER_NAME:
      return {...state, userName: action.userName}
    default:
      return state;
  }
}