import makeItLikeAFunction from './makeItLikeAFunction';

export const createAction = (type, payload = null) => ({ type, payload});

export const generationDefinition = (definitions) => {
  return Object.keys(definitions).reduce((acc, curr) => {
    acc.actionTypes[curr] = curr;
    const {payload, reduce} = definitions[curr];
    acc.reduce = reduce;
    acc.actions[makeItLikeAFunction(curr)] = (...value) => {
    return (typeof payload === 'function')  
          ? createAction(curr, payload(...value)) // when a function
          :  createAction(curr, ...value.payload) // everthing else
    };
    return acc;
  }, {actionTypes:{}, actions:{}});
}
export const createReducer = (...definitions) => {
    return (state, action) => definitions.reduce((state, currDef) => {
        return currDef.hasOwnProperty(action.type) && !!currDef[action.type].func ? currDef[action.type].func(state, action.payload) : {...state, ...payload};
    }, state) 
}