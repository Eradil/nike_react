import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBoTzxgi4KIEXGoalpNuoerQxCuae5x7Jg",
    authDomain: "nike-9b55f.firebaseapp.com",
    projectId: "nike-9b55f",
    storageBucket: "nike-9b55f.appspot.com",
    messagingSenderId: "1068340244205",
    appId: "1:1068340244205:web:fd7830b09dcbf21e45a6e4"
  };
  const fire = firebase.initializeApp(firebaseConfig)
  export default fire