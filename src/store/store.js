import { createStore } from 'redux';
import state from './state';
import {
  SET_BACK,
  SET_SCREEN,
} from './actionNames';

//red
const reducer = ( state, action ) => {
  switch (action.type) {
    case SET_SCREEN:
      return {...state, screen: action.screen};
    case SET_BACK:
      return {...state, back: action.back};
    default:
      return {...state};
  }
};
//store
const store = createStore(reducer, state);

export default store;
