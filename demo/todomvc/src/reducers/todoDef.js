import { createReducer, generationDefinition } from 'redux-drive';

const definedActions = {
  ADD_TODO: {
    payload: text => ({ text }),
    reduce: (state, payload) => [
      ...state,
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: payload.text,
      },
    ],
  },
  DELETE_TODO: {
    payload: id => ({ id }),
    reduce: (state, payload) => state.filter(todo => todo.id !== payload.id),
  },
  EDIT_TODO: {
    payload: (id, text) => ({ id, text }),
    reduce: (state, payload) =>
      state.map(
        todo =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
      ),
  },
  COMPLETE_TODO: {
    payload: id => ({ id }),
    reduce: (state, payload) =>
      state.map(
        todo =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
      ),
  },
  COMPLETE_ALL_TODOS: {
    reduce: state =>
      state.map(todo => {
        const areAllMarked = state.every(todo => todo.completed);
        return {
          ...todo,
          completed: !areAllMarked,
        };
      }),
  },
  CLEAR_COMPLETED: {
    reduce: state => state.filter(todo => todo.completed === false),
  },
};
const definitions = generationDefinition(definedActions);
export const { actions, actionTypes } = definitions;
export const reducer = createReducer(definitions, [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
]);
