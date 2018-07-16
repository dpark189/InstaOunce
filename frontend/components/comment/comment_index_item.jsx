import React from 'react';
import CommentIndex from './comment_index';

export default (props) => {
  let child_comments;
  if (props.comment.commentIds.length === 0) {
  } else {
    child_comments = (
      <CommentIndex
        commentIds={props.comment.commentIds}
        parentType="Comment"
        parentId={props.comment.id}
      />
    );
  }
  return (
    <ul>
      <span>
        <strong>{props.author.username} </strong>{props.comment.body}
      </span>
      {child_comments}
    </ul>
  );
};
