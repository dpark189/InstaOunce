import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentIndex extends React.Component {

}

const mapStateToProps = (state, ownProps) => {
  // pass parent.commentIds and  parent type to help filter
  // change post controller to also give comments for a post
  const parentComments = ownProps.commentIds.map( (commentId) => {
    return state.entities.comments[commentId];
  })
  const
  return {
    comments
  }
}
