import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return async dispatch => {
    try {
      const dataStore = await firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift });
      Actions.pop();
      dispatch({ type: EMPLOYEE_CREATE });

      return dataStore;
    } catch (err) {
      console.log(err);
    }
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    try {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
          dispatch({
            type: EMPLOYEES_FETCH_SUCCESS,
            payload: snapshot.val(),
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return async dispatch => {
    try {
      const dataStore = await firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift });

      Actions.pop();
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });

      return dataStore;
    } catch (err) {
      console.log(err);
    }
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  console.log(uid);
  return async () => {
    try {
      const dataErase = await firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove();
      Actions.pop();
      console.log(dataErase);
      return dataErase;
    } catch (err) {
      console.log(err);
    }
  };
};
