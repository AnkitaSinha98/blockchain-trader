import Firebase from "firebase";

var firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyClPfyOO9AzRXH-rMy5zIdIVIE1U7u2L8w",
  authDomain: "farmerxchange.firebaseapp.com",
  projectId: "farmerxchange",
  storageBucket: "farmerxchange.appspot.com",
  messagingSenderId: "1026599856819",
  appId: "1:1026599856819:web:954a657a2d018e6c8e1ec6",
});
var db = firebaseApp.firestore();
export { db };
