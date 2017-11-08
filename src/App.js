import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as key from '../keys';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: key.apiKey,
      authDomain: key.authDomain,
      databaseURL: key.databaseURL,
      projectId: key.projectId,
      storageBucket: key.storageBucket,
      messagingSenderId: key.messagingSenderId,
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
