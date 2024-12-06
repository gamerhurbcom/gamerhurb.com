import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8XDEw83Mm-aeL_eSR-PTZ15pxQT17Qds",
  authDomain: "gamerhurb-2de0a.firebaseapp.com",
  projectId: "gamerhurb-2de0a",
  storageBucket: "gamerhurb-2de0a.firebasestorage.app",
  messagingSenderId: "165035093135",
  appId: "1:165035093135:web:f76650c64da50ea443d4fa",
  measurementId: "G-S2CM7BXXTK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
