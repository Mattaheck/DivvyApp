import React, {Component} from 'react';
import dotenv from 'dotenv';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { firebase, auth, database, firebaseListToArray } from './utils/firebase';

dotenv.config({ silent:true });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: ''
    }; this.ref = database.ref('/goals')
  }

  componentWillMount() {
    database.ref('/users')
    .on('value', data => {
      const results = firebaseListToArray(data.val());
      console.log('Users', results);

      this.setState({ currentUser:results[0] });
      console.log(this.state.currentUser.id)
    });
  }


handleLogin(e){
  // e.preventDefault();
  console.log('Login button clicked');
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function(result){
      console.log('Fuck yeah. Result: ', result);

      database.ref('/user').push({
        users: this.currentUser.displayName
      })
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
        <p>Hello, {this.state.currentUser.id}</p>
        {this.state.currentUser.goals}
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
