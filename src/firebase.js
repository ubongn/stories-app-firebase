import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDUZDiI_EwK8FZctiZw3OSwhqO2J5tmJmM",
  authDomain: "stories-app-74688.firebaseapp.com",
  projectId: "stories-app-74688",
  storageBucket: "stories-app-74688.appspot.com",
  messagingSenderId: "1088582654090",
  appId: "1:1088582654090:web:ed2ca9012b94d30576f573",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db }
