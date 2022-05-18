// Import the functions you need from the SDKs you need

import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4YP1q4dWJa8R-QL2HvcAIwzgr6miTPdo",
  authDomain: "authproject-5e72a.firebaseapp.com",
  projectId: "authproject-5e72a",
  storageBucket: "authproject-5e72a.appspot.com",
  messagingSenderId: "902897898433",
  appId: "1:902897898433:web:be3e9e49a1fee60d69d540",
  measurementId: "G-K9BJ3JW02V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics( );
export default firebase