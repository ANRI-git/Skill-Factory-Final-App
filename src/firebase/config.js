import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// import { getEnviroment } from '../agents/helpers/getEnviroment';

// const {
//     VITE_APIKEY,
//     VITE_AUTHDOMAIN,
//     VITE_PROJECTID,
//     VITE_STORAGEBUCKET,
//     VITE_MESSAGINGSENDERID,
//     VITE_APPID,
//   } = getEnviroment();

const firebaseConfig = {
  apiKey: "AIzaSyAp7BFK-F5WjKmdf4bPsF6fkscVxYuaTMs",
  authDomain: "skill-factory-valorant-app.firebaseapp.com",
  projectId: "skill-factory-valorant-app",
  storageBucket: "skill-factory-valorant-app.appspot.com",
  messagingSenderId: "485696479549",
  appId: "1:485696479549:web:7d6da67a19f43a3f6da554",
};

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

