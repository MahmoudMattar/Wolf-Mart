// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSNCrpxTNdidmEGTSLfoWhs-BRvoDvNzI",
  authDomain: "challenge-31a2b.firebaseapp.com",
  projectId: "challenge-31a2b",
  storageBucket: "challenge-31a2b.appspot.com",
  messagingSenderId: "418658333212",
  appId: "1:418658333212:web:eb9e7d85ca3c29f261e5d9",
  measurementId: "G-MKKMZ96Z37",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
