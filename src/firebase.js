import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// function requestPermission() {
//     Notification.requestPermission().then(permission => {
//         if (permission === "granted") {
//         }
//     });
// }
// requestPermission();

// const app = initializeApp(firebaseConfig);
// const ad = async (currentToken) => {
//     await setDoc(doc(db, 'token', "arajin"), {
//         currentToken
//     })
// }
// export const requestForToken = () => {
//     return getToken(messaging, {
//         vapidKey:
//             "BLKnHuXn7ZAJCYN3FpMklmdH4pzjNa08psOFduYFblJ6cxMObmcpfvD_tA_NhModY8-4siZRNhgDb5q0N8utbyA",
//     })
//         .then(currentToken => {
//             if (currentToken) {
//                 // console.log("token@ ", currentToken);
//                 ad(currentToken)
//             } else {
//                 // Show permission request UI
//                 console.log(
//                     "No registration token available. Request permission to generate one."
//                 );
//             }
//         })
//         .catch(err => {
//             console.log("error get token ", err);
//         });
// };

// export const messaging = getMessaging(app);
// export const db = getFirestore(app);

// export const registerFirebaseServiceWorker = () => {
//     if ("serviceWorker" in navigator) {
//         navigator.serviceWorker
//             .register("./firebase-messaging-sw.js")
//             .then(registration => {
//                 // console.log("registranian exav ayooooooo: ", registration.scope);
//             });
//     } else {
//         alert("no");
//     }
// };


