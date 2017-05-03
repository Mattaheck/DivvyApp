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


 const firebaseListToArray = (firebaseObjectList) => {
   if (!firebaseObjectList) return [];

   return Object.keys(firebaseObjectList)
   .map(k => {
     const obj = {
       id: k
     };
     for (let key in firebaseObjectList[k]) {
       if (firebaseObjectList[k].hasOwnProperty(key)){
         obj[key] = firebaseObjectList[k][key];
       }
     }
     return obj;
   });
 }

 const database = firebase.database();
 const auth = firebase.auth();

 export { firebase, database, auth };
 export { firebaseListToArray };
