import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import UserProfilePicture from '../user/user_profile_picture';
import CommentIndex from '../comment/comment_index';
import CreateCommentFormContainer from '../comment/create_comment_form_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    let likedStatus;
    let buttonClass;

    if ((props.post.likes_count === 0) || !props.post.likes_by_user_id) {
      likedStatus = false;
    } else {
      if (Object.values(props.post.likes_by_user_id).includes(props.currentUserId)){
        likedStatus = true;
      } else {
        likedStatus = false;
      }
    }

    this.state = {
      likedStatus
    };

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick(e) {

    if ((typeof this.props.post.likes_by_user_id === 'undefined') ||
      (typeof this.props.post.likes_by_user_id[this.props.currentUserId] === 'undefined')
    ) {
      this.props.createLike("Post", this.props.post.id, this.props.currentUserId).then(
        this.setState({likedStatus: false})
      );
    } else {

      this.props.deleteLike("Post", this.props.post.likes_by_user_id[this.props.currentUserId].like_id).then(
        this.setState({likedStatus: true})
      );
    }
  }


  // componentDidUpdate(prevProps, prevState) {
  //   if ((typeof this.props.post.likes_by_user_id === 'undefined') ||
  //     (typeof this.props.post.likes_by_user_id[this.props.currentUserId] === 'undefined')
  //   ) {
  //       this.setState({likedStatus: false});
  //     } else {
  //       this.setState({likedStatus: true});
  //     }
  // }

  componentWillReceiveProps(newProps) {
    if ((typeof newProps.post.likes_by_user_id === 'undefined') ||
      (typeof newProps.post.likes_by_user_id[newProps.currentUserId] === 'undefined')
    ) {
        this.setState({likedStatus: false});
      } else {
        this.setState({likedStatus: true});
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
                className={`far fa-heart post-icons ${this.state.likedStatus}-like-icon`}
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

const msp = (state, ownProps) => {
  return {
    post: ownProps.post
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (likedType, likedId, currentUserId) => dispatch(createLike(likedType, likedId, currentUserId)),
    deleteLike: (likedType, likedId, currentUserId) => dispatch(deleteLike(likedType, likedId, currentUserId))
  };
};

export default connect(msp, mdp)(PostIndexItem);
