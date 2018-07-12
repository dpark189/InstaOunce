import { connect } from 'react-redux';
import { createPost, fetchPost } from '../../actions/post_actions';
import PostForm from './post_form';

class EditPostForm {
  componentDidMount(){
    this.fetchPost(this.props.match.params.postId);
  }

  render () {
    return(
      <PostForm
        post={this.props.post}
        formAction={this.props.formAction}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const dummyPost = {
    author_id: state.session.id,
    caption: ""
  };
  const id = ownProps.match.params.postId;
  const post = state.posts[id] || dummyPost;
  return {
    post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (post) => dispatch(updatePost(post)),
    fetchPost: (postId) => dispatch(fetchPost(postId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm));
