// import React, { Component } from 'react';
// import Goals from './Goals';
// import Avatar from 'react-avatar';
//
//
// class Profile extends Component {
//   constructor(props){
//     super(props)
//
//     this.state={
//       avatars: [
//         'http://piskel-imgstore-b.appspot.com/img/d89a96eb-3027-11e7-92c5-13ef97b06e1a.gif',
//         'http://piskel-imgstore-b.appspot.com/img/aab9953d-3033-11e7-9568-13ef97b06e1a.gif'
//       ]
//     }
//   }
//
//   render(){
//     const avatars = this.state.avatars.map((avatars) =>
//     return(
//         <div key={avatars.key} className="col-sm-6 col-md-4 col-lg-4">
//           <div className="card">
//
//           </div>
//         </div>
//       )
//     })
//     return(
//       <div className="profile container">
//         <div className="profileContent container">
//           <div className="row">
//             <div className="col-md-offset-1 col-md-3 col-sm-3 lT">
//             <span className="avatar">
//               <div className="col-md-offset-2">
//               <Avatar src={avatars} size="130" />
//             </div>
//               <br/>
//             </span>
//             <span className="userInfo">
//               <ul>
//                 <li>Name:</li>
//                 <li>Points Earned:</li>
//                 <li>Active Goals:</li>
//                 <li><a href="#">Create New Goal</a></li>
//               </ul>
//             </span>
//           </div>
//           <div className="col-md-offset-1 col-md-6 col-sm-3 rT">
//             <span className="goals">
//               <Goals />
//             </span>
//           </div>
//           <div className="col-md-offset-1 col-md-6 col-sm-3 rT">
//             <span className="progressBar">
//               <img src="http://piskel-imgstore-b.appspot.com/img/0a386ab3-3035-11e7-bb0e-13ef97b06e1a.gif" />
//               <h3>75% of the way there! Keep going!</h3>
//               <br/>
//               <img src="http://piskel-imgstore-b.appspot.com/img/0a386ab3-3035-11e7-bb0e-13ef97b06e1a.gif" />
//               <h3>90% of the way there!?! Astonishing!</h3>
//             </span>
//           </div>
//         </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Profile;
