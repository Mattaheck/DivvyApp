import React, {Component} from 'react';
import dotenv from 'dotenv';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { firebase, auth } from './utils/firebase';

dotenv.config({ silent:true });

class App extends Component {
  constructor(props) {
    super(props);

    this.stateg = {
      currentUser: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
    
      if (currentUser) {
        console.log('Logged in:', currentUser.displayName );
        this.setState({ currentUser: currentUser });
        console.log(this.state.currentUser)
      } else {
        this.setState({ currentUser: null });

      }
    });
  }


  handleLogin(e){
  // e.preventDefault();
  console.log('Login button clicked');
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function(result){
    console.log('Fuck yeah. Result: ', result);
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).on('value', function(snapshot){
    console.log( userId );
    });
    }).catch(function(error){
      console.log('Error: ', error);
    })
  }

handleLogout(e){
  e.preventDefault();
  console.log('Logout button clicked');
  auth.signOut().then(function(result){
  }).catch(function(error){
    console.log("ERROR OCCURRED: ", error);
  })
}


  render() {
    return (
    <div className="App">
      <NavBar
      handleLogout={ this.handleLogout.bind(this) }
      handleLogin={ this.handleLogin.bind(this) }
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
