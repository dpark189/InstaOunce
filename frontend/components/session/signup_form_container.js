import { connect } from 'react-redux';
import SignupSessionForm from './signup_session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    errors: state.errors.session,
    formType: "Signup"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);
