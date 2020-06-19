import { createStore } from 'redux';
import state from './state';
import {
  SET_SCREEN,
} from './actionNames';

//red
const reducer = ( state, action ) => {
  switch (action.type) {
    case SET_SCREEN:
      return {...state, screen: action.screen};
    default:
      return {...state};
  }
};
//store
const store = createStore(reducer, state);

export default store;
