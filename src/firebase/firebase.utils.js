import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBko6PIeSKFeBb7_CS6IldxOnwIOGylnsg",
    authDomain: "p-17-clothing-f1bd3.firebaseapp.com",
    projectId: "p-17-clothing-f1bd3",
    storageBucket: "p-17-clothing-f1bd3.appspot.com",
    messagingSenderId: "196269423235",
    appId: "1:196269423235:web:8861ddd4576ace934179b6",
    measurementId: "G-ZRFZZ07394"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName,email } = userAuth;
        const createdAt = new Date()

        try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
        } catch (error) {
            console.log('error creating user',error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




