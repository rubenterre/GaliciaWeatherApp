import firebase from 'firebase/app'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyCC7A7pYKMYLxMTkKBCDsoOdnyvI_vc-24",
    authDomain: "galiciaweather.firebaseapp.com",
    databaseURL: "https://galiciaweather.firebaseio.com",
    projectId: "galiciaweather",
    storageBucket: "galiciaweather.appspot.com",
    messagingSenderId: "852001517676",
    appId: "1:852001517676:web:3fd0346db0f5fe4a7aa849",
    measurementId: "G-0Y307169YP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db = firebase.firestore()