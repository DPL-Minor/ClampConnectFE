import React from 'react';
import Main from './main.js';

import { Provider } from 'react-redux'
import { createPost } from './redux/actions'
import { createUser } from './redux/actions'

import DevTools from './containers/DevTools.jsx'
import { persistState } from 'redux-devtools'

// create Redux store
import configureStore from './redux/store'

const store = configureStore()

store.dispatch(createPost('dan', 'hello world'))
setTimeout(() => store.dispatch(createPost('barry', 'hi!')), 2000)

store.dispatch(createUser('Wisse', 'Voortman'))

console.log('initial state:', store.getState())

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;