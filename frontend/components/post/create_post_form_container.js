import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state) => {
  return {
    post: {
      author_id: state.session.id,
      caption: ""
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (post) => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
