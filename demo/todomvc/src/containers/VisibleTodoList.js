import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as todoActions } from '../reducers/todoDef';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch),
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
