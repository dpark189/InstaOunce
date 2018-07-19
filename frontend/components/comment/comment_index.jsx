import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComment, createComment, fetchCommentsForPost, fetchCommentsForComment } from '../../actions/comment_actions';
import { compact } from 'lodash';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  // this.props.comments
  // this.props.parentType
  componentDidMount() {
    if (this.props.parentType === "Post") {
      this.props.fetchCommentsForPost(this.props.parentId);
    } else if (this.props.parentType === "Comment") {

      this.props.fetchCommentsForComment(this.props.parentId);
    }
  }

  render() {
    let comments;
    if ((this.props.comments.length === 0)) {
      comments = "";
    } else {

      comments = this.props.comments.map( (comment) => {
        return (
          <CommentIndexItem
            comment={comment}
            author={this.props.users[comment.author_id]}/>
        );
      });
    }
    return(
      <ul>{comments}</ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // pass parent.commentIds and  parent type to help filter
  // change post controller to also give comments for a post

  let parentComments = ownProps.commentIds.map( (commentId) => {
    return state.entities.comments[commentId];
  }) || {};
  parentComments = _.compact(parentComments);

  return {
    comments: parentComments,
    users: state.entities.users
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchCommentsForPost: (postId) => dispatch(fetchCommentsForPost(postId)),
    fetchCommentsForComment: (commentId) => dispatch(fetchCommentsForComment(commentId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
