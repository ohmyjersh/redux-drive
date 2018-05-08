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
      acc.actions[makeItLikeAFunction(curr)] = (...value) => {
        return typeof payload === 'function'
          ? createAction(curr, payload(...value)) // when a function
          : payload
            ? createAction(curr, payload) // just create the payload
            : createAction(curr); // everthing else
      };
      return acc;
    },
    {
      actionTypes: {},
      actions: {},
    }
  );
};
export const createReducer = (...definedActions) => {
  return (state, action) =>
    definedActions.reduce((state, currDef) => {
      return currDef.hasOwnProperty(action.type) && !!currDef[action.type].func
        ? currDef[action.type].func(state, action.payload)
        : {
            ...state,
            ...payload,
          };
    }, state);
};
