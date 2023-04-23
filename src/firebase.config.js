import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWaRbWFBZCdSLIqC34_vKqgApOyQC2LB4",
  authDomain: "resturantapp-2cb6e.firebaseapp.com",
  databaseURL: "https://resturantapp-2cb6e-default-rtdb.firebaseio.com",
  projectId: "resturantapp-2cb6e",
  storageBucket: "resturantapp-2cb6e.appspot.com",
  messagingSenderId: "514298575920",
  appId: "1:514298575920:web:fec10ff540eff8952ac1f5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
