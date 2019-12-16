import React from 'react';
import Main from './main.js';

import { Provider } from 'react-redux'
import { createPost } from './redux/actions'
import { fetchUser, createUser } from './redux/actions'

import DevTools from './containers/DevTools.jsx'
import { persistState } from 'redux-devtools'

// create Redux store
import store from './redux/store'

store.dispatch(createPost('user 1', 'POST ONE'))
store.dispatch(createPost('USER 2', 'POST TWO'))

//store.dispatch(createUser('USER1', 'LAST NAME ONE'))

console.log('initial state:', store.getState())

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;