import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createReducer, generationDefinition } from 'redux-drive';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let manifest = {
  HELLO_WORLD: { payload: { message: 'hello world' } },
};
let definitions = generationDefinition(manifest);
console.log(definitions);
let reducer = createReducer(definitions, { heck: 'yes' });
let store = createStore(reducer);
console.log(definitions.actions.helloWorld());
store.dispatch(definitions.actions.helloWorld());
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
