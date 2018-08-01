import React from 'react';
import UserProfilePicture from '../user/user_profile_picture';
import { Link } from 'react-router-dom';

export default (props) => {


  // ------ Process Dates --------
    const now = Date.now();

    const updatedDate = new Date(props.user.last_update);
    const difference = now - updatedDate;
    let weeks = 0;
    let days = 0;
    let hours = Math.floor(difference / (1000*60*60));
      if (hours >= 24) {

        days = Math.floor(hours/24);
        hours = hours % 24;
        if (days >= 7) {
          weeks = Math.floor(days / 7);
          days = days % 7;
        }
      }

  // ------ Set what to display --------

    let dateDisp;

    if (weeks > 0) {
      dateDisp = `Updated ${weeks} ${weeks === 1 ? "week" : "weeks"}, ${days} ${days === 1 ? "day" : "days"}, and ${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (days > 0) {
        dateDisp = `Updated ${days} ${days === 1 ? "day" : "days"}, and ${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (hours > 0){
        dateDisp = `Updated ${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
        dateDisp = "Updated less than an hour ago";
    }
  // ----- end -----

  return (
    <div className="story-item">
      <UserProfilePicture user={props.user}/>
      <span className="story-item-updated_at">{dateDisp}</span>
    </div>
  );
};
