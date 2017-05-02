import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div className="home container">
        <div className="homeContent container">
          <div className="row">
            <div className="col-md-offset-2 col-md-3 col-sm-3 lT">
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
            <div className="col-md-offset-1 col-md-6 aT">
              Save Your Money
            </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-6">
              <div className="aT1">
                Earn points
              </div>
            </div>
          </div>
          <div className="row aboutRow">
            <div className="col-md-offset-2 col-md-9 aBCol">
              <div className="col-md-4 aB">

              </div>
              <div className="col-md-4 aB">

              </div>
              <div className="col-md-4 aB">

              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-offset-2 col-md-4 aB2">
            </div> */}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
