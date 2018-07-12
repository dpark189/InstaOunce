import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';


class Modal extends React.Component {
  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'createPost':
      component = <CreatePostFormContainer />;
      break;
      // case 'signup':
      //   component = <SignupFormContainer />;
      //   break;
      default:
      return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

export default Modal;
//
// const mapStateToProps = state => {
//   return {
//     modal: state.ui.modal
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     closeModal: () => dispatch(closeModal())
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
