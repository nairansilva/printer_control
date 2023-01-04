import * as firebase from 'firebase-admin';

export function initializeFirebase() {
  console.log(process.env.FIREBASE);
  const serviceAccount = JSON.parse(process.env.FIREBASE);
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: '',
  });
}
