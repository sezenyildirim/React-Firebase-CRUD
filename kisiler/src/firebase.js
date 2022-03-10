import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyArAuRktWSrdwk1Rjb8mQU8tKcZv3m3XIo",
    authDomain: "kisiler-c4d3d.firebaseapp.com",
    projectId: "kisiler-c4d3d",
    storageBucket: "kisiler-c4d3d.appspot.com",
    messagingSenderId: "695317765524",
    appId: "1:695317765524:web:2cd6a7db024bd071ab0381"
  }; 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export default db;
  export{auth,provider};
  