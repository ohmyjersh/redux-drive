import { connect } from 'react-redux';
import { actions as todoActions } from '../reducers/todoDef';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import { getCompletedTodoCount } from '../selectors';

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
