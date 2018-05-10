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
      acc.reducers[curr] = reduce;
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
      reducers: {},
    }
  );
};
export const createReducer = (definedActions, initialState = {}) => {
  console.log(definedActions);
  let definedActionsArr = Array.isArray(definedActions)
    ? definedActions
    : [definedActions];
  return (state = initialState, action) => {
    console.log(action);
    console.log(definedActionsArr);
    return definedActionsArr.reduce((state, currDef) => {
      console.log(currDef);
      console.log(currDef.actionTypes.hasOwnProperty(action.type));
      if (currDef.actionTypes.hasOwnProperty(action.type)) {
        //step in if actiontype is found
        console.log('has the type');
        if (typeof currDef.reducers[action.type] === 'function') {
          // step in if reducer is found for that actiontype
          console.log('functionsss');
          return currDef.reducers[action.type](state, action.payload);
        }
        if (!!action.payload) {
          // step in if there's a payload
          return Array.isArray(state)
            ? [...state, ...action.payload]
            : {
                ...state,
                ...action.payload,
              };
        }
      }
      return Array.isArray(state) ? [...state] : { ...state };
    }, state);
  };
};
