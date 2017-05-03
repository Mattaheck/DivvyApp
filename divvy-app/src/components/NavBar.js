import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class NavBar extends Component {
  sessionState(){
  if (this.props.currentUser){
    return(
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      <img className="nav-profile-pic" src={ this.props.currentUser.photoUrl } alt=""/> { this.props.currentUser.displayName }<span className="caret"></span>
      </a>
    )
  } else {
    return <LoginButton { ...this.props } className="link"> Login </LoginButton>
  }
}

  render() {
    return (

      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <nav className="tabs navbar navbar-default navbar-fixed-top">
            <Link className="navbar-brand" to="/">divvy</Link>
            <ul>
              <li><IndexLink to="/" activeClassName="active" className="link">Home</IndexLink></li>
              <li><Link to="/Goals" activeClassName="active" className="link">Goals</Link></li>
              <li><Link to="/AddGoals" activeClassName="active" className="link">Add a New Goal</Link></li>
              <li><Link to="/Profile" activeClassName="active" className="link">Profile</Link></li>
              <li>{ this.sessionState() }</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
