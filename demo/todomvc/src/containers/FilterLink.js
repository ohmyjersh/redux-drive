import { connect } from 'react-redux';
import { actions as visbilityActions } from '../reducers/visibilityDef';
import Link from '../components/Link';

const { setVisibilityFilter } = visbilityActions;

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
