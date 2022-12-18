// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB9VB5rvhIykC-G2h6hZ2bJjR9sbAybAQQ',
	authDomain: 'scientist-course-register.firebaseapp.com',
	projectId: 'scientist-course-register',
	storageBucket: 'scientist-course-register.appspot.com',
	messagingSenderId: '649227998698',
	appId: '1:649227998698:web:b0eb2ad2c5f50ee5244e93',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);