import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyC7WyFKDhX-fVpxDiSTLv0PbSqreyMWeT4",
    authDomain: "learn-reacth.firebaseapp.com",
    projectId: "learn-reacth",
    storageBucket: "learn-reacth.appspot.com",
    messagingSenderId: "412831378336",
    appId: "1:412831378336:web:6c090705a8e631785f92c5",
    measurementId: "G-L7T94341K2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };