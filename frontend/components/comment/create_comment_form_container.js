import { connect } from 'react-redux';
import { createCommentForPost, createCommentForComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
  // pass in parentType and parentId
  debugger
  return {
    comment: {
      author_id: state.session.id,
      body: "",
      commented_item_id: ownProps.parentId,
      commented_item_type: ownProps.parentType
    },
    errors: state.errors.comment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitActionPost: (comment) => dispatch(createCommentForPost(comment)),
    submitActionComment: (comment) => dispatch(createCommentForComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
