import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return async () => {
    try {
      const dataStore = await firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift });

      Actions.pop();

      return dataStore;
    } catch (err) {
      console.log(err);
    }
  };
};
