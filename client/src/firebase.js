// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg52gqvikvCEaNyT-0woQcSCWzYhMNN04",
  authDomain: "twitter-clone-ae92e.firebaseapp.com",
  projectId: "twitter-clone-ae92e",
  storageBucket: "gs://twitter-clone-ae92e.appspot.com",
  messagingSenderId: "823152550609",
  appId: "1:823152550609:web:bfc1b606da403ff8465bf0",
  measurementId: "G-W7KNWZVSJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
