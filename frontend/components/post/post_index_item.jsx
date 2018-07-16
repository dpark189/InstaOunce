import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import UserProfilePicture from '../user/user_profile_picture';
import CommentIndex from '../comment/comment_index';
import CreateCommentFormContainer from '../comment/create_comment_form_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    let likedStatus;
    let buttonClass;

    if (props.post.likes_count === 0) {
      likedStatus = false;
    } else {
      debugger
      if (!props.post.likes_by_user_id){
        likedStatus = false;
      } else {
        likedStatus = true;
      }
    }

    this.state = {
      likedStatus,
      buttonClass: "far fa-heart post-icons like-icon"
    };

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick() {
    const currentUserId = this.props.currentUserId;
    const post = this.props.post;
    let likeId;
    debugger
    if (this.state.likedStatus === false) {
      debugger
      this.props.createLike("Post", post.id, currentUserId).then(
        this.setState({
          likedStatus: !this.state.likedStatus,
          buttonClass: "far fa-heart post-icons unlike-icon"
        })
      );
    } else if (this.state.likedStatus === true ) {
      debugger
      likeId = post.likes_by_user_id[currentUserId].like_id;
      this.props.deleteLike("Post", likeId).then(
        this.setState({
          likedStatus: !this.state.likedStatus,
          buttonClass: "far fa-heart post-icons like-icon"
        })
      );
    }
  }

  render() {
    let images;


    if ((typeof this.props.post.photos === "undefined" ) ||
    (Object.values(this.props.post.photos).length === 0 ) ||
    (typeof this.props.post.photos === "null")) {
      images = "";
    } else {
      images = Object.values(this.props.post.photos).map( (photoUrl, i) => {
        return (
          <img key={i} className="post-image" src={photoUrl}/>
        );
      });
    }
    const likeCount = this.props.post.likes_count;
    return(
      <div className="post-index-item-div">
        <section className="post-header">
          <div className="post-user-info">
            <UserProfilePicture user={this.props.author} />
            <strong>{this.props.author.username}</strong>
          </div>
        </section>
        <section className="post-images">
          {images}
        </section>
        <section className="post-sub-header">
          <div className="post-icon-links">
              <i
                onClick={this.handleLikeClick}
                className={this.state.buttonClass}
                >
              </i>
            <i className="far fa-comment post-icons"></i>
          </div>

          <div className="post-sub-header-likes">
            <strong>{likeCount} likes</strong>
          </div>
        </section>
        <section className="post-index-item-caption">
          <span>
            <strong>{this.props.author.username} </strong>{this.props.post.caption}
          </span>
          <CommentIndex
            commentIds={this.props.post.commentIds}
            parentType="Post"
            parentId={this.props.post.id}
          />
          <div className="update-date">
            {this.props.post.updated_at}
          </div>
        </section>
        <section className="index-item-comment">
          <CreateCommentFormContainer
            parentType="Post"
            parentId={this.props.post.id}
          />
        </section>
      </div>
    );
  }
}

export default PostIndexItem;
