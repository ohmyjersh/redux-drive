import makeItLikeAFunction from './makeItLikeAFunction';

export const createAction = (type, payload = null) => ({
  type,
  payload,
});

export const generationDefinition = definedActions => {
  return Object.keys(definedActions).reduce(
    (acc, curr) => {
      acc.actionTypes[curr] = curr;
      const { payload, reduce } = definedActions[curr];
      acc.reduce = reduce;
      acc.actions[makeItLikeAFunction(curr)] = (...value) =>
        typeof payload === 'function'
          ? createAction(curr, payload(...value)) // when a function
          : payload
            ? createAction(curr, payload) // just create the payload
            : createAction(curr); // everthing else

      return acc;
    },
    {
      actionTypes: {},
      actions: {},
    }
  );
};
export const createReducer = ({ initialState } = {}, ...definedActions) => (
  state = initialState,
  action
) => {
  return definedActions.reduce((state, currDef) => {
    return currDef.hasOwnProperty(action.type) && !!currDef[action.type].func
      ? currDef[action.type].func(state, action.payload)
      : !!action.payload
        ? { ...state, ...action.payload }
        : { ...state };
  }, state);
};
