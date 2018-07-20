import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter, Route, Link } from 'react-router-dom';
import EditProfileForm from './edit_profile_form';
import UserProfilePicture from './user_profile_picture';
import PostIndexItem from '../post/post_index_item';
import { compact } from 'lodash';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    let followText;

    if ((typeof this.props.user.followerIds === "undefined") ||
      (!this.props.user.followerIds.includes(this.props.currentUser.id))) {
      followText = false;
    } else {
      followText = true;
    }

    this.state = {
      username: props.user.username,
      followStatus: followText
    };
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  componentDidMount(){
    const id = this.props.match.params.userId;
    this.props.fetchUser(id).then(
      (payload) => console.log(payload),
      (error) => {
        this.props.history.push('/nomatch');
      }
    );
  }

  handleFollowClick() {
      if (this.state.followStatus === false) {
        this.props.createFollow(this.props.currentUser.id, this.props.user.id).then(
          this.setState({followStatus: true})
        );
      } else {
        this.props.deleteFollow(this.props.currentUser.id, this.props.user.id).then(
          this.setState({followStatus: false})
        );
      }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
    // if ((typeof this.props.user.followerIds === "undefined") ||
    //   (!this.props.user.followerIds.includes(this.props.currentUser.id))) {
    //   this.setState({followStatus: false});
    // } else {
    //
    //   this.setState({followStatus: true});
    // }
  }
  // TODO: logic for when to show user edit form or user's page
  render(){

    let userEdit;
    if (this.props.currentUser.id === this.props.user.id){
      userEdit = (
        <div className="user-info-sub-1-links">
          <div className="profile-buttons">
              <Link to={`${this.props.currentUser.id}/edit`}>
              <button className="edit-profile button">Edit Profile</button>
              </Link>
              <button
              className="edit-profile button"
              onClick={() => this.props.openModal('createPost')}
              >
                Create Post
              </button>
          </div>
          <i className="fas fa-cog icon4"></i>
        </div>
      );
    } else {
      let followText;
      this.state.followStatus ? followText = "Unfollow" : followText = "Follow";

      userEdit = (
        <div className="user-info-sub-1-links">
          <div className="profile-buttons">
              <button onClick={this.handleFollowClick} className="edit-profile button">
                {`${this.state.followStatus ? "Unfollow" : "Follow"}`}
              </button>
          </div>
          <i className="fas fa-ellipsis-h icon4"></i>
        </div>
      );
    }

    const postItems = Object.keys(this.props.userPosts).reverse().map( (key) => {

      return (
        <PostIndexItem
          post={this.props.userPosts[key]}
          author={this.props.user}
          key={key}
          currentUserId={this.props.currentUser.id}
        />
      );
    });
    let postCount = 0;
    if (typeof this.props.user.postIds === "undefined") {
    } else {
      postCount = this.props.user.postIds.length;
    }
    let followCount = 0;
    if (typeof this.props.user.followerIds === "undefined") {
    } else {
      followCount = this.props.user.followerIds.length;
    }

    let followeeCount = 0;
    if (typeof this.props.user.followeeIds === "undefined") {
    } else {
      followeeCount = this.props.user.followeeIds.length;
    }
    return(
      <div className="profile-page">
        <div className="profile-header">
          <UserProfilePicture fetchUser={this.props.fetchUser} user={this.props.user || ""} />
          <div className="user-content">
            <div className="user-info-sub1">
              <h3 className="profile-username">{this.props.user.username}</h3>
              {userEdit}
            </div>
            <div className="user-info-sub2">
              <h4 className="user-info">{postCount} posts</h4>
              <h4 className="user-info">{followCount} followers</h4>
              <h4 className="user-info">{followeeCount} following</h4>
            </div>
            <div className="user-info-sub3">
              <h4 className="user-name">{this.props.user.full_name || ""}</h4>
            </div>
          </div>
        </div>
        {postItems}
      </div>
    );
  }
}

const mapStateToprops = (state, ownProps) => {

  const dummyUser = {
    full_name: "",
    username: "",
    website: "",
    bio: "",
    email: "",
    phone_number: "",
    gender: "",
    profile_pictureUrl: ""
  };

  const user = (state.entities.users[ownProps.match.params.userId]) || (dummyUser);
  const statePosts = Object.values(state.entities.posts) || [];
  let userPosts = [];
  if ((statePosts.length === 0)) {}
  else {
    userPosts = statePosts.map( post => {
      if (post.author_id === Number(ownProps.match.params.userId)) {
        return post;
      }
    });
  }
  userPosts= _.compact(userPosts);

  const usertype = "i dont know why this is here";
  return {
    user,
    userPosts,
    currentUser: state.session
  };
};

const mapStateToProps = (state, ownProps) => {
  const dummyUser = {
    full_name: "",
    username: "",
    website: "",
    bio: "",
    email: "",
    phone_number: "",
    gender: "",
    profile_pictureUrl: "",
    postIds: [],
    commentIds: [],
    followeeIds: []
  };
  const id = ownProps.match.params.userId;
  const user = state.entities.users[id] || dummyUser;
  return {
    user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    createFollow: (followerId, followeeId) => dispatch(createFollow(followerId, followeeId)),
    deleteFollow: (followerId, followeeId) => dispatch(deleteFollow(followerId, followeeId))
  };
};

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(UserProfile));
