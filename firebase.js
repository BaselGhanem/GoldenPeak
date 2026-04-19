import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, collection, query, where, orderBy, Timestamp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxuFGMSbDEOVjy1buAM4i6XeJ57FIGuiY",
  authDomain: "goldenpeak-f8a0d.firebaseapp.com",
  projectId: "goldenpeak-f8a0d",
  storageBucket: "goldenpeak-f8a0d.firebasestorage.app",
  messagingSenderId: "935788401204",
  appId: "1:935788401204:web:448b2521962ac533807061"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.firebaseDB = db;
window.firebaseTimestamp = Timestamp;
