import { generationDefinition, createAction } from './reduxDrive';

describe('create the actions with types funcs and payloads', () => {
  it('should create a func with the correct payload', () => {
    const keyForAction = 'SET_TEMPLATE_DETAILS';
    const definedActions = {
      [keyForAction]: {
        payload: templateName => ({ templateName }),
        reduce: () => {},
      },
    };
    const { actionTypes, actions } = generationDefinition(definedActions);
    expect(Object.keys(actionTypes).length).toBe(1);
    const action = actions.setTemplateDetails('hi');
    expect(actions.setTemplateDetails('hi')).toEqual({
      payload: { templateName: 'hi' },
      type: `${keyForAction}`,
    });
  });
  it('should create a func with the correct payload', () => {
    const definedActions = {
      MULTIPLE_STUFF: {
        payload: (one, two, three, four) => ({
          one,
          two,
          three,
          four,
        }),
        reduce: () => {},
      },
    };
    const { actionTypes, actions } = generationDefinition(definedActions);
    expect(Object.keys(actionTypes).length).toBe(1);
    expect(actions.multipleStuff('one', 'two', 'three', 'four')).toEqual(
      createAction(actionTypes.MULTIPLE_STUFF, {
        one: 'one',
        two: 'two',
        three: 'three',
        four: 'four',
      })
    );
  });
  it('should create with just payload func', () => {
    const definedActions = {
      MULTIPLE_STUFF: {
        payload: (one, two, three, four) => ({
          one,
          two,
          three,
          four,
        }),
      },
    };
    const { actionTypes, actions } = generationDefinition(definedActions);
    expect(Object.keys(actionTypes).length).toBe(1);
    expect(actions.multipleStuff('one', 'two', 'three', 'four')).toEqual(
      createAction(actionTypes.MULTIPLE_STUFF, {
        one: 'one',
        two: 'two',
        three: 'three',
        four: 'four',
      })
    );
  });
  it('should create with just payload', () => {
    const definedActions = {
      MULTIPLE_STUFF: {
        payload: {
          one: 'one',
          two: 'two',
          three: 'three',
          four: 'four',
        },
      },
    };
    const { actionTypes, actions } = generationDefinition(definedActions);
    expect(Object.keys(actionTypes).length).toBe(1);
    expect(actions.multipleStuff()).toEqual(
      createAction(actionTypes.MULTIPLE_STUFF, {
        one: 'one',
        two: 'two',
        three: 'three',
        four: 'four',
      })
    );
  });
  it('should create with just reduce func', () => {
    const definedActions = {
      MULTIPLE_STUFF: { reduce: () => {} },
    };
    const { actionTypes, actions } = generationDefinition(definedActions);
    expect(Object.keys(actionTypes).length).toBe(1);
    expect(actions.multipleStuff()).toEqual(
      createAction(actionTypes.MULTIPLE_STUFF)
    );
  });
});
