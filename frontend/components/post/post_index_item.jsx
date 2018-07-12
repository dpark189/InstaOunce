import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

export default (props) => {

  return(
    <div className="post-index-item-div">
      <section className="post-header">
        <div className="post-icon-links">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <div className="post-header-likes">
          <span># likes</span>
        </div>
      </section>
      <section className="post-index-item-caption">
        <span><strong>{author.username} </strong>{post.caption}</span>
      </section>
    </div>
  );
};
