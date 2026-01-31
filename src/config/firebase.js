import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjsiHMnNGAdPt8ErJuYsgMhDAMKwcm584",
    authDomain: "golamkibria-official.firebaseapp.com",
    projectId: "golamkibria-official",
    storageBucket: "golamkibria-official.firebasestorage.app",
    messagingSenderId: "992067724036",
    appId: "1:992067724036:web:dd7933ba665743bf36a651",
    measurementId: "G-LK8RFT128Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
