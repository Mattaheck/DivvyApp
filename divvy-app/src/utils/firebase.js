import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB4fBSfLD-iaiIu3JBr6Z1y0_gz17dgJFQ",
  authDomain: "divvy-app-960db.firebaseapp.com",
  databaseURL: "https://divvy-app-960db.firebaseio.com",
  projectId: "divvy-app-960db",
  storageBucket: "divvy-app-960db.appspot.com",
  messagingSenderId: "333348074517"
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
