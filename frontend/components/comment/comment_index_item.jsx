import React from 'react';

export default (props) => {
  return (
    <span>
      <strong>{props.author.username} </strong>{props.comment.body}
    </span>
  );
};
