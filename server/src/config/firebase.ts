import * as firebase from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

export default firebase;
