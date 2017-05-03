import React, {Component} from 'react';
import dotenv from 'dotenv';
import {
  BrowserRouter as Router,
  Route
} from 'react-router';


import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
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

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result){
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

    });
  }

  handleLogin(e){
  // e.preventDefault();
  console.log('Login button clicked');

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function(result){
    console.log('Fuck yeah');
  }).catch(function(error){
    console.log('Error: ', error);
  })
}

handleLogout(e){
  e.preventDefault();
  console.log('Logout button clicked');
  auth.signOut();
}

  logoutButtonClicked(e) {
    e.preventDefault();

    auth.signOut();
  }


  render() {
    return (
    <div className="App">
      <NavBar
      handleLogout={ this.handleLogout }
      handleLogin={ this.handleLogin }
      currentUser={ this.state.currentUser }/>
      <div className="content">
        { this.props.children }
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
