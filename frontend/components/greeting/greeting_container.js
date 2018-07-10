import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {

  const userId = state.session.id;
  const user = state.entities.users[userId];
  return {
    currentUser: user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Greeting);
