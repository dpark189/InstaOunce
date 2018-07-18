import { connect } from 'react-redux';
import { createPost, fetchPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { closeModal } from '../../actions/modal_actions';


class EditPostForm {
  componentDidMount(){
    this.fetchPost(this.props.match.params.postId);
  }

  render () {
    return(
      <PostForm
        post={this.props.post}
        formAction={this.props.formAction}
        closeModal={this.props.closeModal}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const dummyPost = {
    id: "",
    author_id: state.session.id,
    caption: "",
    photos: {photoUrl: ""},
    commentIds: [],
    likes_by_user_id: "",
    likes_count: 0
  };
  const id = ownProps.match.params.postId;
  const post = state.posts[id] || dummyPost;
  return {
    post,
    buttonStatus: false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (post) => dispatch(updatePost(post)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    closeModal: () => dispatch(closeModal())

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm));
