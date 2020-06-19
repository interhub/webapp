import {
  SET_BACK,
  SET_SCREEN,
} from './actionNames';

export const setScreen = (screenName) => {
  return {
    type: SET_SCREEN,
    screen: screenName
  };
};

export const setBack = (bool) => {
  return {
    type: SET_BACK,
    back: bool
  };
};

