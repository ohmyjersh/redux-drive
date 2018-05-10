import { createReducer, generationDefinition } from 'redux-drive';

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

const actionDefs = {
  SET_VISIBILITY_FILTER: { payload: filter => filter },
};
const definition = generationDefinition(actionDefs);
export const { actionTypes, actions } = definition;
export const reducer = createReducer(definition, Filters.SHOW_ALL);
