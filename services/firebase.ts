import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// TODO: Replace this object with your actual Firebase project configuration
// You can get this from the Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Initialize Firebase
// We wrap this in a try/catch or check to prevent crashing if config is missing
let app;
let db: any;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch (e) {
    console.warn("Firebase not initialized. Make sure to update services/firebase.ts with your config.");
}

export { db, collection, addDoc, serverTimestamp };
