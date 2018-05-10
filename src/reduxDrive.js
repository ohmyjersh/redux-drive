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
// export const createReducer = (definedActions, initialState = {}) => {
//   console.log(definedActions);
//   let definedActionsArr = Array.isArray(definedActions)
//     ? definedActions
//     : [definedActions];
//   return (state = initialState, action) => {
//     return definedActionsArr.reduce((state, currDef) => {
//       if (currDef.actionTypes.hasOwnProperty(action.type)) {
//         if (typeof currDef.reducers[action.type] === 'function') {
//           return currDef.reducers[action.type](state, action.payload); //
//         }
//         if (!!action.payload) {
//           return Array.isArray(state) ? [...state] : isObject(state) ? { ...state, ...action.payload } : action.payload;
//         }
//       }
//       return Array.isArray(state) ? [...state] : isObject(state) ? { ...state } : state;
//     }, state);
//   };
// };

export const createReducer = (definedActions, initialState = {}) => {
  let definedActionsArr = Array.isArray(definedActions)
    ? definedActions
    : [definedActions];
  let stateFunc = Array.isArray(initialState)
    ? updateArrayState
    : isObject(initialState)
      ? updateObjectState
      : updatePrimitiveState;
  return (state = initialState, action) => {
    return definedActionsArr.reduce((state, currDef) => {
      if (currDef.actionTypes[action.type]) {
        let reducerFunc =
          typeof currDef.reducers[action.type] === 'function'
            ? currDef.reducers[action.type]
            : stateFunc;
        return reducerFunc(state, action.payload);
      }
      return stateFunc(state);
    }, state);
  };
};

const updatePrimitiveState = (state, payload) =>
  payload === false || payload === 0 || payload ? payload : state;

const updateArrayState = (state, payload) =>
  !!payload ? [...state, ...payload] : [...state];

const updateObjectState = (state, payload) =>
  !!payload ? { ...state, ...payload } : { ...state };

const isObject = obj => obj === Object(obj);
