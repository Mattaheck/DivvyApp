import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';
import dotenv from 'dotenv';
import './index.css';


dotenv.config({silent:true});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <header className="navbar">
            <h1 className="pull-left">divvy</h1>
          </header>

          <nav className="tabs">
            <li><IndexLink to="/" activeClassName="active" className="link">Home</IndexLink></li>
            <li><Link to="/goals" activeClassName="active" className="link">Goals</Link></li>
            <li><Link to="/AddGoals" activeClassName="active" className="link">Add a New Goal</Link></li>
            <li><Link to="/Profile" activeClassName="active" className="link">All about you</Link></li>

          </nav>
          <div className="content">
            {this.props.children}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
