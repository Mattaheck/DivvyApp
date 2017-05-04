import React, { Component } from 'react';
import '../css/Avatar.css';

const randomArrayElement = arr => arr[Math.floor(Math.random() * arr.length)];
const avatars = [
  'http://piskel-imgstore-b.appspot.com/img/5d11a9b8-3075-11e7-8664-7378e3ca4582.gif',
  'http://piskel-imgstore-b.appspot.com/img/85627973-3075-11e7-b249-7378e3ca4582.gif',
  'http://piskel-imgstore-b.appspot.com/img/afb4e52b-3075-11e7-aea4-7378e3ca4582.gif',
  'http://piskel-imgstore-b.appspot.com/img/7c6fa007-30d9-11e7-b1d6-7378e3ca4582.gif',
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
