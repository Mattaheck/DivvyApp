import React, { Component } from 'react';
import Avatar from './Avatar';
import Goals from './Goals';
import ProgressBar from './ProgressBar';
import '../css/Profile.css';

class Profile extends Component {
  render(){
    return(
      <div className="profile container">
        <div className="profileContent container">
          <div className="row">
            <div className="col-md-offset-1 col-md-3 col-sm-3 lT">
            <span className="avatar">
              <div className="col-md-offset-2">
                <br/>
                <Avatar />
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
            <h3>Only 50%? Why can't you be better? Keep going!</h3>
            <ProgressBar percent={50} />
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Profile;
