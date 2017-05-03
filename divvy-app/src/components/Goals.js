import React, { Component } from 'react';
import './Goals.css'

class Goals extends Component {
  render(){
    return(
      <div className="home container">
        <div className="aboutContent container">
          <div className="row">
            <div className="col-md-offset-2 col-md-6 gT">
              Your Goals
            </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-6">
              {/* <div className="gT1">
                goals
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2 col-md-9">
              <div className="col-md-8 gB">
                <div className="col-md-3 gInfo gPercent">
                  What
                </div>
                <div className="col-md-3 gInfo gTotal">
                  the
                </div>
                <div className="col-md-3 gInfo gSaved">
                  actual
                </div>
                <div className="col-md-3 gInfo gProgress" id="trash">
                  fuck
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Goals;
