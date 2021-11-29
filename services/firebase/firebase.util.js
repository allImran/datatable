import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.API_key,
  authDomain: process.env.auth_domain,
  projectId: process.env.project_id,
  storageBucket: process.env.storage_bucket,
  messagingSenderId: process.env.messaging_sender_Id,
  appId: process.env.app_Id,
  measurementId: process.env.measurement_Id
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

export const auth =  firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

var storage = firebase.storage().ref();

export const db = firebase.firestore();

// export const createData = (ref, data) => {
//   return db.collection(ref).add(data)
//   .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//       return {success: true, message: 'Document created successfully', data: docRef.id}
//   })
//   .catch((error) => {
//     return {success: false, message: 'Something went wrong', data: error}
//     console.error("Error adding document: ", error);
//   });

// }

export const readProfileData = async (ref, query={}) => {
    let data = [];
    let profileref = db.collection(ref);
    if(query["city"] !== undefined) profileref = profileref.where('city', '==', query.city);
    if(query["religion"] !== undefined) profileref = profileref.where('religion', '==', query.religion);
    if(query["country"] !== undefined) profileref = profileref.where('country', '==', query.country);
    const snapshot = await profileref.get();
    if (snapshot.empty) {
        return data; 
    }

    snapshot.forEach(doc => {
        data.push(doc.data())
    });
    console.log(data)
    return data;
}