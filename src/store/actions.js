import {
  SET_BACK, SET_GROUP,
  SET_SCREEN, SET_USER,
} from './actionNames';

export const setScreen = ( screenName ) => {
  return {
    type: SET_SCREEN,
    screen: screenName
  };
};

export const setBack = ( bool ) => {
  return {
    type: SET_BACK,
    back: bool
  };
};

export const setUser = ( user ) => {
  return {
    type: SET_USER,
    user: user
  };
};

export const setGroup = ( group ) => {
  return {
    type: SET_GROUP,
    group: group
  };
};
