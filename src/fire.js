import firebase from "firebase";
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBKIZjp4w3dTNjcHPBArhjb-eISwXHS1dM",
  authDomain: "task-70f6d.firebaseapp.com",
  projectId: "task-70f6d",
  storageBucket: "task-70f6d.appspot.com",
  messagingSenderId: "262141299085",
  appId: "1:262141299085:web:e6ff5fbd3f6d1c28f195c4",
};

const fire = firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
export default fire ;
 
