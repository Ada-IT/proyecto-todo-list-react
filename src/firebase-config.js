import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwiol55GSsJ2Ix6hibVlEtnEJjNz_5HFQ",
  authDomain: "todo-list-ada-4a58e.firebaseapp.com",
  projectId: "todo-list-ada-4a58e",
  storageBucket: "todo-list-ada-4a58e.appspot.com",
  messagingSenderId: "415029745850",
  appId: "1:415029745850:web:1f23210ef1ecaeb7c70a83"
};

// Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
