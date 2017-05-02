import React, {Component} from 'react';
import dotenv from 'dotenv';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
      <NavBar />
      <div className="content">
        {this.props.children}
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
