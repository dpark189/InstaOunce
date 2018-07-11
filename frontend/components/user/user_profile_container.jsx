import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import EditProfileForm from './edit_profile_form';

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
    debugger
    if (this.props.currentUser.id === this.props.user.id){
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
  };

  const user = (state.entities.users[ownProps.match.params.userId]) || (dummyUser);
  const usertype = "i dont know why this is here";
  return {
    user,
    currentUser: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (user) => dispatch(fetchUser)
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(UserProfile);
