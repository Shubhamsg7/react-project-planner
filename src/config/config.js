import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD6bTvu6t5YYmcaCVZNVpKp8anFj8vM5sY",
    authDomain: "project-planner-a5042.firebaseapp.com",
    projectId: "project-planner-a5042",
    storageBucket: "project-planner-a5042.appspot.com",
    messagingSenderId: "1009688687992",
    appId: "1:1009688687992:web:bf82a8f96f9c96fecdc48d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true });

  export default firebase;