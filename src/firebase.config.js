import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDu-A2fRZgRMGgyk1PYszPAceVlx8KkZ84",
  authDomain: "restorentapp-825ea.firebaseapp.com",
  databaseURL: "https://restorentapp-825ea-default-rtdb.firebaseio.com",
  projectId: "restorentapp-825ea",
  storageBucket: "restorentapp-825ea.appspot.com",
  messagingSenderId: "165426052648",
  appId: "1:165426052648:web:acc9f0f69b3096bfe8ff1d",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
