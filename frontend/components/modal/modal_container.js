import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => {

  let passedProps;
  if (typeof state.ui.passedProps === "undefined") {
  } else {
    passedProps = state.ui.passedProps;
  }
  return {
    modal: state.ui.modal || {},
    passedProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
