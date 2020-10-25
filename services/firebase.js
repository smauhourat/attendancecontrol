// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');
require('firebase/database');

var firebaseConfig = {
  apiKey: 'AIzaSyCiuQKu6tLzFJ8R0VOr4mIz-LIYVs1d5SU',
  authDomain: 'attendance-control-86064.firebaseapp.com',
  databaseURL: 'https://attendance-control-86064.firebaseio.com',
  projectId: 'attendance-control-86064',
  storageBucket: 'attendance-control-86064.appspot.com',
  messagingSenderId: '1007880427677',
  appId: '1:1007880427677:web:02ea86447105f3c4f29c74',
  measurementId: 'G-1HS2ZBBLBN',
};

class Firebase {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }

  login = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
}

const firebaseService = new Firebase();

export default firebaseService;
