import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div className="home container">
        <div className="homeContent container">
          <div className="row">
            <div className="col-md-offset-2 col-sm-3 lT">
              <div className="lT1">
                <span className="lT2">
                  Learn to Save<br/>
                </span>
                <span className="lT3">
                  it's never been so fun!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutContent container">
          <div className="row">
            <div className="col-md-offset-1">
              <div className="col-md-12 aT">
                About Content Goes Here
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
