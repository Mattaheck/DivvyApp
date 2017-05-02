import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyCTnLCz-EtGw0LTcpW4WcbrnaZHSPk3Q3Y",
   authDomain: "divvyapp-14866.firebaseapp.com",
   databaseURL: "https://divvyapp-14866.firebaseio.com",
   projectId: "divvyapp-14866",
   storageBucket: "divvyapp-14866.appspot.com",
   messagingSenderId: "1043692060269"
 };
 firebase.initializeApp(config);

export default firebase;
