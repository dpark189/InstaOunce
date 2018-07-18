import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    post: {
      author_id: state.session.id,
      caption: "",
      photoFile: null,
      photoUrl: null
    },
    currentUserId: state.session.id,
    buttonStatus: false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
