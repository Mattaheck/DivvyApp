import React, { Component } from 'react';
import Goals from './Goals';
import Avatar from 'react-avatar';


class Profile extends Component {
  render(){
    return(
      <div className="profile container">
        <div className="profileContent container">
          <div className="row">
            <div className="col-md-offset-1 col-md-3 col-sm-3 lT">
            <span className="avatar">
              <div className="col-md-offset-2">
              <Avatar src="http://piskel-imgstore-b.appspot.com/img/d89a96eb-3027-11e7-92c5-13ef97b06e1a.gif" size="130" />
            </div>
              <br/>
            </span>
            <span className="userInfo">
              <ul>
                <li>Name:</li>
                <li>Points Earned:</li>
                <li>Active Goals:</li>
                <li><a href="#">Create New Goal</a></li>
              </ul>
            </span>
          </div>
          <div className="col-md-offset-1 col-md-6 col-sm-3 rT">
            <span className="goals">
              <Goals />
            </span>
          </div>
          <div className="col-md-offset-1 col-md-6 col-sm-3 rT">
            <span className="progressBar">
              <p>Goal Progress Bars here</p>
            </span>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Profile;
