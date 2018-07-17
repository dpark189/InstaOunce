import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { Link } from 'react-router-dom';
import UserProfilePicture from '../user/user_profile_picture';
import CommentIndex from '../comment/comment_index';
import CreateCommentFormContainer from '../comment/create_comment_form_container';

class PostExploreItem extends React.Component {
  constructor(props) {
    super(props);
    let likedStatus;

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
    this.state.hidden = true;
  }

  componentDidMount() {

  }

  componentWillUnmount () {

  }

  fadingDone () {

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

  }

  render() {
    let images;
    const likeCount = this.props.post.likes_count;
    const commentCount = this.props.post.commentIds.length;

    if ((typeof this.props.post.photos === "undefined" ) ||
    (Object.values(this.props.post.photos).length === 0 ) ||
    (typeof this.props.post.photos === "null")) {
      images = "";
    } else {
      let photoUrl = Object.values(this.props.post.photos)[0];
      images = (
        <div>
          <div className="hidden-modal" >
            <div className="modal-like hidden-modal-section">
              <i class="fas fa-heart"></i>
              {likeCount}
            </div>
            <div className="modal-comment hidden-modal-section">
              <i class="fas fa-comment"></i>
              {commentCount}
            </div>
          </div>
          <div className="post-explore-item-div">
            <img key={this.props.post.id} className="explore-image" src={photoUrl}/>
          </div>
        </div>
        );
    }


    return (
      <div className="dummy">
        {images}
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

export default connect(msp, mdp)(PostExploreItem);
