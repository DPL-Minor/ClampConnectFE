import React from 'react';
import Main from './main.js';

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './redux/reducers'
import { createPost } from './redux/actions'

// create Redux Store
let store = createStore(appReducer)

store.dispatch(createPost('dan', 'hello world'))
setTimeout(() => store.dispatch(createPost('barry', 'hi!')), 2000)

console.log('initial state:', store.getState())

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;