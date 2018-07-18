import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import PostIndexItem from '../post/post_index_item';
import PostExploreItemShow from '../explore/post_explore_item_show';


class Modal extends React.Component {
  render() {

    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal.modal) {
      case 'createPost':
      component = <CreatePostFormContainer />;
      break;
      case 'postIndexItem':
      component = <PostExploreItemShow
        post={this.props.modal.passedProps.post}
        author={this.props.modal.passedProps.author}
      />;
      // case 'signup':
      //   component = <SignupFormContainer />;
      //   break;
      break;
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
