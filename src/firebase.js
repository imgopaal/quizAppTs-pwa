import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBgha8oeJxz7z-ZDiHhYxwSrjOL95jhwSI",
    authDomain: "quizapp-project7a.firebaseapp.com",
    databaseURL: "https://quizapp-project7a.firebaseio.com",
    projectId: "quizapp-project7a",
    storageBucket: "quizapp-project7a.appspot.com",
    messagingSenderId: "428061031564",
    appId: "1:428061031564:web:7b1f424e7dadbd11314fa9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase