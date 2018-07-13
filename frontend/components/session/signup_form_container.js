import { connect } from 'react-redux';
import SignupSessionForm from './signup_session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    errors: state.errors.session,
    formType: "Signup"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);
