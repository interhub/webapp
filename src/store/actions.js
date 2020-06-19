import {
  SET_SCREEN,
} from './actionNames';

export const setScreen = (screenName) => {
  return {
    type: SET_SCREEN,
    screen: screenName
  };
};
