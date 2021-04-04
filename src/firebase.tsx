import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyARFsL9zog6n0_FPueHhlY48YjTjZblyfk",
    authDomain: "react-food-recipe-c8cbd.firebaseapp.com",
    projectId: "react-food-recipe-c8cbd",
    storageBucket: "react-food-recipe-c8cbd.appspot.com",
    messagingSenderId: "276981545187",
    appId: "1:276981545187:web:4250770bbe2dbf8603add6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};