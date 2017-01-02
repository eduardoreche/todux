import { combineReducers }  from 'redux';
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibilityFilter';

const todoStore = combineReducers({
  todos,
  visibilityFilter
});

export default todoStore;