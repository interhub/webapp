import { createStore } from 'redux';
import state from './state';
import {
  SET_BACK, SET_GROUP,
  SET_SCREEN, SET_TAGS, SET_USER,
} from './actionNames';

//red
const reducer = ( state, action ) => {
  switch (action.type) {
    case SET_SCREEN:
      return {...state, screen: action.screen};
    case SET_BACK:
      return {...state, back: action.back};
    case SET_USER:
      return {...state, user: action.user};
    case SET_GROUP:
      return {...state, group: action.group};
    case SET_TAGS:
      return {...state, tags: action.tags};
    default:
      return {...state};
  }
};
//store
const store = createStore(reducer, state);

export default store;
