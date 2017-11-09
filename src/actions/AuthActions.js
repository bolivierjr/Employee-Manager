import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

// Authentification actions
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return async dispatch => {
    dispatch({ type: LOGIN_USER });

    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      return loginSuccess(dispatch, user);
    } catch (err) {
      console.log(err);

      return loginFail(dispatch);
    }
  };
};

// Helper functions for loginUser action
const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};

const loginFail = dispatch => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};
