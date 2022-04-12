// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5otHEoiiSgFd3nZ3U0UcgLyCoqHyVEOU",
    authDomain: "email-password-auth-5331f.firebaseapp.com",
    projectId: "email-password-auth-5331f",
    storageBucket: "email-password-auth-5331f.appspot.com",
    messagingSenderId: "220311146321",
    appId: "1:220311146321:web:2045fcff592faf1f508d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app