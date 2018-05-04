import {createActionsAndTypesFromDefinitions, createAction} from './reduxDrive';

describe('create the actions with types funcs and payloads', () => {
  it('should create a func with the correct payload', () => {
    const definedActions = {
      'SET_TEMPLATE_DETAILS': {payload: templateName => ({templateName}), reduce:() => {}},
    }
    const {actionTypes, actions} = createActionsAndTypesFromDefinitions(definedActions);
    expect(Object.keys(actionTypes).length).toBe(1);
    expect(actions.setTemplateDetails('hi')).toEqual({"payload": {"templateName": "hi"}, "type": "SET_TEMPLATE_DETAILS"});
  });
  it('should create a func with the correct payload', () => {
    const definedActions = {
      'MULTIPLE_STUFF' : {payload: (one, two, three, four) => ({one,two,three,four}), reduce:() => {}}
    }
    const {actionTypes, actions} = createActionsAndTypesFromDefinitions(definedActions);
    expect(Object.keys(actionTypes).length).toBe(1);
    expect(actions.multipleStuff("one","two","three","four")).toEqual(createAction(actionTypes.MULTIPLE_STUFF, {one:"one", two:"two", three:"three", four:"four"}));
  });
//   it('should handle a null func', () => {
//     const definedActions = {
//       'SET_TEMPLATE_DETAILS': (templateName) => ({templateName}),
//       'MULTIPLE_STUFF' : null
//     }
//     const {actionTypes, actions} = createActionsAndTypesFromDefinitions(definedActions);
//     expect(Object.keys(actionTypes).length).toBe(2);
//     expect(actions.multipleStuff("one","two","three","four")).));
//   })
});

// describe('create action test', () =>{
//   it('make the action object', () => {
//     const type = 'DUDE_STUFF';
//     const payload = 'PAYLOADZ';
//     expect(createAction(type, payload)).toEqual({ type: type, payload: payload });
//   });  
//})