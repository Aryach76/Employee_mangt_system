import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC_qB7e6nrSxF46Unalr3FXGlimUcjfv5M",
    authDomain: "login-482ca.firebaseapp.com",
    projectId: "login-482ca",
    storageBucket: "login-482ca.appspot.com",
    messagingSenderId: "631121754902",
    appId: "1:631121754902:web:e2090c228a584f8e5d6e37"
  };
 
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;