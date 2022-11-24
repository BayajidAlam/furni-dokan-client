import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBF1jIjKoawsW6USSBvT2Rx8NduJ-AiBCU",
  authDomain: "furni-dokan.firebaseapp.com",
  projectId: "furni-dokan",
  storageBucket: "furni-dokan.appspot.com",
  messagingSenderId: "373579815388",
  appId: "1:373579815388:web:90d4723f52634e718f1719",
  measurementId: "G-RLV39J18CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app