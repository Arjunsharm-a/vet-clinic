// Replace values with your Firebase config
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKS9DU4UO6zKAO8oSpTxXYvQfFd38nBAI",
  authDomain: "vet-clinic-7fe8e.firebaseapp.com",
  projectId: "vet-clinic-7fe8e",
  storageBucket: "vet-clinic-7fe8e.firebasestorage.app",
  messagingSenderId: "175464040532",
  appId: "1:175464040532:web:25100cdf0e028a4d3f45c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
