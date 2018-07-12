import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfilePicture extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      image: props.user.profile_picture || window.profile_placeholder
    };
  }

  render () {
    let image;
    if (!this.props.user.profile_picture) {
      image = (
        <div className="profile-frame">
          <img className="profile_picture" src={`${this.state.image}`} />
        </div>
      )
    }
    return (
      <div className="profile-frame">
        {image}
      </div>
    )
  }
}

export default withRouter(ProfilePicture);
