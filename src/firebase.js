import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCXJMJeiSKxq4oNbybb9b-HxyvsKj4jY2M",
  authDomain: "goalcoach-794b0.firebaseapp.com",
  databaseURL: "https://goalcoach-794b0.firebaseio.com",
  projectId: "goalcoach-794b0",
  storageBucket: "",
  messagingSenderId: "427441963312"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
