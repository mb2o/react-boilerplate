import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD8n233_mjVSbOyeeWACvv4n9DWaYXsm0w',
  authDomain: 'mb2o-expensify.firebaseapp.com',
  databaseURL: 'https://mb2o-expensify.firebaseio.com',
  projectId: 'mb2o-expensify',
  storageBucket: 'mb2o-expensify.appspot.com',
  messagingSenderId: '568226421885'
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
