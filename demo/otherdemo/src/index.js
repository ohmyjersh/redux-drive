import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createReducer, generationDefinition } from 'redux-drive';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let manifest1 = {
  HELLO_WORLD: {
    payload: {
      message: 'hello world',
    },
  },
  ACTION_1: {
    payload: (one, two) => ({
      stuff: {
        thing: {
          what: one,
          hey: {
            two,
          },
        },
      },
    }),
  },
};
let manifest2 = {
  CHICKEN_DINNER: {
    payload: {
      hey: 'mondays',
    },
  },
  UPDATE_STUFF: {
    payload: {
      stuff: 'asdf',
    },
    reduce: (state, payload) => {
      let stuff = {
        stuff: payload.stuff,
      };
      return {
        ...state,
        ...stuff,
      };
    },
  },
};
let definitions1 = generationDefinition(manifest1);
let definitions2 = generationDefinition(manifest2);

let reducer = createReducer([definitions1, definitions2], {
  heck: 'yes',
});
let store = createStore(reducer);

store.dispatch(definitions1.actions.helloWorld());
store.dispatch(definitions2.actions.chickenDinner());
store.dispatch(definitions1.actions.action1('one', 'two'));
store.dispatch(definitions2.actions.updateStuff());
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
