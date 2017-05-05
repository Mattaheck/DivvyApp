import React, {Component} from 'react';
import dotenv from 'dotenv';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import Home from './components/Home';
// import Profile from './components/Profile';
import './App.css';
import { firebase, auth, database/*, firebaseListToArray*/ } from './utils/firebase';

dotenv.config({silent:true});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
    this.ref = database.ref('/goals')
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    if (auth.currentUser){
      this.setState({
        currentUser: auth.currentUser
      })
    }
  }

  handleLogin(e){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        this.setState({
          currentUser: result.user
        })
      })
      .catch(function(error){
        console.log('Error: ', error);
      })
  }

  handleLogout(e){
    auth.signOut()
      .then(() => {
        this.setState({
          currentUser: null
        })
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar
        handleLogout={ this.handleLogout }
        handleLogin={ this.handleLogin }
        currentUser={ this.state.currentUser }/>
        <div className="content">
          {this.props.children}
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;
