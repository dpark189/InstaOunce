import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

class UserProfile extends React.Component {

  componentDidMount(){
    const id = this.props.match.params.userId;
    this.props.fetchUser(id);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.user.id != nextProps.match.params.userId) {
    this.props.fetchUser(nextProps.match.params.userId);
    }
  }
  // TODO: logic for when to show user edit form or user's page
  render(){
    let userEdit;
    if (this.props.session.id === this.props.user){
      userEdit = (
        <EditProfileForm user={this.props.user} updateUser={this.props.updateUser}/>
      )
    }
    return(
      <div>
        {userEdit}
      </div>
    )
  }
}

const mapStateToprops = (state, ownProps) => {
  debugger
  const dummyUser = {
    full_name: "",
    username: "",
    website: "",
    bio: "",
    email: "",
    phone_number: "",
    gender: ""
  }

  const user = state.users[ownProps.match.params.userId] || dummyUser
  return {
    user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (user) => dispatch(fetchUser)
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(UserProfile);
