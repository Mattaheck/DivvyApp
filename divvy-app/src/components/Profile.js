import React, { Component } from 'react';
import Avatar from './Avatar';
import Goals from './Goals';
import './Profile.css';

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
            <span className="progressBar">
              <img src="http://piskel-imgstore-b.appspot.com/img/0a386ab3-3035-11e7-bb0e-13ef97b06e1a.gif" />
              <h3>75% of the way there! Keep going!</h3>
              <br/>
              <img src="http://piskel-imgstore-b.appspot.com/img/0a386ab3-3035-11e7-bb0e-13ef97b06e1a.gif" />
              <h3>90% of the way there!?! Astonishing!</h3>
            </span>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Profile;
