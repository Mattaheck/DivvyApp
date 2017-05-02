import React, { Component } from 'react';

class Image extends Component {
  render(){
    return(
      <div className="Image" style={{backgroundImage: 'url(' + this.props.src + ')'}}></div>
    );
    )
  }
}

export default Image;
