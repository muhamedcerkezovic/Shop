import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBKlyECztMuTtoW5q2IuQWIqLmQCcWwzT8",
    authDomain: "shik-db.firebaseapp.com",
    projectId: "shik-db",
    storageBucket: "shik-db.appspot.com",
    messagingSenderId: "631064096764",
    appId: "1:631064096764:web:e038d877f9ac13f03d0c79"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("Erorr creating the user ", error.message);
        }
    }

    return userDocRef;
}