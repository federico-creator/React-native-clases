import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCoIsjSJHpsEGHUobGadCbXa8_JZ6078NQ",
  authDomain: "pruebadefirebaseprogramcion.firebaseapp.com",
  projectId: "pruebadefirebaseprogramcion",
  storageBucket: "pruebadefirebaseprogramcion.appspot.com",
  messagingSenderId: "724532684069",
  appId: "1:724532684069:web:04cbf7a96b0baedd4626cc"
};

app.initializeApp(firebaseConfig);

export const auth= firebase.auth()
export const storage= app.storage()
export const db= app.firestore()



