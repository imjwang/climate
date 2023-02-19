// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore, collection, limit, doc, getDocs, query, where } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgNeFTYqQgH673x-ue8Nm1ZC2aR8o0v4w",
  authDomain: "climate-823dd.firebaseapp.com",
  projectId: "climate-823dd",
  storageBucket: "climate-823dd.appspot.com",
  messagingSenderId: "118409926388",
  appId: "1:118409926388:web:5eb707f6700453e3e6f0a1",
  measurementId: "G-N0NPVKCP81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const storage = getStorage(app);

//Example
export async function getUser(id) {
  const usersRef = collection(firestore, 'users');
  const q = query(usersRef, where('id', '==', id), limit(1));
  const querySnapshot = await getDocs(q);
  const userDoc = querySnapshot.docs[0];
  return userDoc;
}
