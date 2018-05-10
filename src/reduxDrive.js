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
  let definedActionsArr = Array.isArray(definedActions)
    ? definedActions
    : [definedActions];
  let stateFunc = Array.isArray(initialState)
    ? updateArrayState
    : isObject(initialState)
      ? updateObjectState
      : updateStringOrPrimitiveState;
  return (state = initialState, action) => {
    return definedActionsArr
      .filter(x => x.actionTypes.hasOwnProperty(action.type))
      .reduce((state, currDef) => {
        let reducerFunc =
          typeof currDef.reducers[action.type] === 'function'
            ? currDef.reducers[action.type]
            : stateFunc;
        return reducerFunc(state, action.payload);
      }, state);
  };
};

const updateStringOrPrimitiveState = (state, payload) =>
  payload === false || payload === 0 || payload ? payload : state;

const updateArrayState = (state, payload) =>
  !!payload ? [...state, ...payload] : [...state];

const updateObjectState = (state, payload) =>
  !!payload ? { ...state, ...payload } : { ...state };

const isObject = obj => obj === Object(obj);
