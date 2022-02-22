import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBmg4_wPsCPypv520npuS4kfZy6CfYuU0g",
    authDomain: "react3w-c8a7b.firebaseapp.com",
    databaseURL: "https://react3w-c8a7b.firebaseio.com",
    projectId: "react3w-c8a7b",
    storageBucket: "react3w-c8a7b.appspot.com",
    messagingSenderId: "352673126080",
    appId: "1:352673126080:web:e54c0f9d4eca9f8f0d3f25",
    measurementId: "G-KGCQH8XP52"
};
firebase.initializeApp(firebaseconfig);

firebase.firestore().settings(settings);

export default firebase;