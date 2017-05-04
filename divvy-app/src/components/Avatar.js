import React, { Component } from 'react';
import './Avatar.css';

const randomArrayElement = arr => arr[Math.floor(Math.random() * arr.length)];
const avatars = [
  'http://piskel-imgstore-b.appspot.com/img/d89a96eb-3027-11e7-92c5-13ef97b06e1a.gif',
  'http://piskel-imgstore-b.appspot.com/img/aab9953d-3033-11e7-9568-13ef97b06e1a.gif',
  'http://piskel-imgstore-b.appspot.com/img/f9da5b70-3041-11e7-9a1f-13ef97b06e1a.gif',
];

class Avatar extends Component {
  render() {
    let randomUrl = randomArrayElement(avatars);
    return(
      <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="thisThing">
          <h6>Avatar</h6>
          <img src={randomUrl} />
        </div>
      </div>
    );
  };
};

export default Avatar;
