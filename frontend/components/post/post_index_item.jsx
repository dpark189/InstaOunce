import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import UserProfilePicture from '../user/user_profile_picture';

export default (props) => {

  return(
    <div className="post-index-item-div">
      <section className="post-header">
        <div className="post-user-info">
          <UserProfilePicture user={props.author} />
          <strong>{props.author.username}</strong>
        </div>
      </section>
      <section className="post-sub-header">
        <div className="post-icon-links">
          <i className="far fa-heart post-icons"></i>
          <i className="far fa-comment post-icons"></i>
        </div>

        <div className="post-sub-header-likes">
          <strong># likes</strong>
        </div>
      </section>
      <section className="post-index-item-caption">
        <span><strong>{props.author.username} </strong>{props.post.caption}</span>
        <div className="update-date">
          {props.post.updated_at}
        </div>
      </section>
      <section className="index-item-comment">
        <p>comments will go here</p>
      </section>
    </div>
  );
};
