// ** Imports **
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// ** Keys to connect to firebase - Secret :) **
const firebaseConfig = {
  apiKey: "AIzaSyBK9qlA4sqQBuJffytmSggmBHPNRMWrCTA",
  authDomain: "schola-waitlist.firebaseapp.com",
  projectId: "schola-waitlist",
  storageBucket: "schola-waitlist.appspot.com",
  messagingSenderId: "1098610428010",
  appId: "1:1098610428010:web:58cf768c3b4bbf6025a213",
  measurementId: "G-7LVNQ54GVE"
};

// ** Exporting everything else we might need in the code **
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);