import { combineReducers } from 'redux';
//import todos from './todos'
import { reducer as todos } from './todoDef';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export default rootReducer;
