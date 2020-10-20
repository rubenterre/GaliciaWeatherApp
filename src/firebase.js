import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBw3dXHuNOwrGxuniReKPYS7_qVHR0lWVI",
  authDomain: "galiciaweatherapp.firebaseapp.com",
  databaseURL: "https://galiciaweatherapp.firebaseio.com",
  projectId: "galiciaweatherapp",
  storageBucket: "galiciaweatherapp.appspot.com",
  messagingSenderId: "851712290715",
  appId: "1:851712290715:web:3c791361723b3026a07b3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

