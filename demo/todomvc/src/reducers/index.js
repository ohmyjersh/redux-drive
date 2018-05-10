import { combineReducers } from 'redux';
import { reducer as todos } from './todoDef';
import { reducer as visibilityFilter } from './visibilityDef';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export default rootReducer;
