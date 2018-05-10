import { actions, reducer, Filters } from './visibilityDef';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = Filters;
describe('should add correct filter', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual(SHOW_ALL);
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(reducer([], actions.setVisibilityFilter(SHOW_COMPLETED))).toEqual(
      SHOW_COMPLETED
    );

    expect(reducer([], actions.setVisibilityFilter(SHOW_ACTIVE))).toEqual(
      SHOW_ACTIVE
    );

    expect(reducer([], actions.setVisibilityFilter(SHOW_ALL))).toEqual(
      SHOW_ALL
    );
  });
});
