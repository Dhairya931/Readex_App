import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDgC3yt1dAle3Kl2DsfTC91pDzedrR11sY",
    authDomain: "course-app-17ac9.firebaseapp.com",
    databaseURL: "https://course-app-17ac9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "course-app-17ac9",
    storageBucket: "course-app-17ac9.appspot.com",
    messagingSenderId: "510456113266",
    appId: "1:510456113266:web:36a6ca0595c07d7f7bfaeb",
    measurementId: "G-RM95FB84EV"
};

const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

export { database, ref, onValue}; 
