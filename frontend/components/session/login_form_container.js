import { connect } from 'react-redux';
import LoginSessionForm from './login_session_form';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  
  return {
    errors: state.errors.session,
    formType: "Login"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);
