// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: 'AIzaSyDcfYKWdZqhL8bzg2v4yaYUqwcd3PSTHDY',
//   authDomain: 'foodapp2-2b58b.firebaseapp.com',
//   projectId: 'foodapp2-2b58b',
//   storageBucket: 'foodapp2-2b58b.appspot.com',
//   messagingSenderId: '328180707420',
//   appId: '1:328180707420:web:6c8b36ac3b1a3716cc7699',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCB95rYhXfFQ0Yq2tRPyEVB0C1E7a5DAQA',
  authDomain: 'bitesquare-go.firebaseapp.com',
  projectId: 'bitesquare-go',
  storageBucket: 'bitesquare-go.appspot.com',
  messagingSenderId: '1035647196911',
  appId: '1:1035647196911:web:53dec5d2e12dc0c50e851a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };
