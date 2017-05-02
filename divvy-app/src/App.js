import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';
import dotenv from 'dotenv';
import './App.css';
import firebase from './utils/firebase';


dotenv.config({silent:true});

class App extends Component {
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
