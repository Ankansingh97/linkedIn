// Import the required functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_igL-TT3xv1t-9Efz9DBs6j9QGBGYYA",
  authDomain: "linkedin-198ef.firebaseapp.com",
  projectId: "linkedin-198ef",
  storageBucket: "linkedin-198ef.appspot.com",
  messagingSenderId: "120553341936",
  appId: "1:120553341936:web:594cfe8b1822a692835335",
  measurementId: "G-KXWT2DM0HD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
