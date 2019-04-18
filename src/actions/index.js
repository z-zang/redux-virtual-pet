import * as types from './actionTypes';

// names, shortened versions
export const setPetName = petName => ({type: types.SET_PET_NAME, petName})
export const setUserName = userName => ({type: types.SET_USER_NAME, userName})

// stats
export const playCatch = (happiness, exp, money, health, hunger) => ({type: types.PLAY_CATCH, happiness, exp, money, health, hunger})
export const eatFood = (happiness, hunger, health) => ({type: types.EAT_FOOD, happiness, hunger, health})
export const goToSleep = (happiness, health) => ({type: types.GO_TO_SLEEP, happiness, health})


// export const SET_PET_NAME = 'SET_PET_NAME';
// export const SET_USER_NAME = 'SET_USER_NAME';

// // time centric commands
// export const TIME_PASSES = 'TIME_PASSES'; // lose 0.5 from health, lose 1 from hunger

// // pet centric commands
// export const GET_ILL = 'GET_ILL'; // lose health & happiness; mood: ill
// export const USE_MEDICINE = 'USE_MEDICINE'
