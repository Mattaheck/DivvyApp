import React, {Component} from 'react';
import dotenv from 'dotenv';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';


dotenv.config({silent:true});

class App extends Component {
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
