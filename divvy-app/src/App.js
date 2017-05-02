import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';
import dotenv from 'dotenv';
import './App.css';
import { firebase, auth } from './utils/firebase';


dotenv.config({silent:true});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();

    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  }

//   firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });


  logoutButtonClicked(e) {
    e.preventDefault();

    auth.signOut();
  }


  render() {
    return (

    <div className="App">
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
          </ul>
          </nav>
        </div>
      </div>
      <div className="content">
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default App;
