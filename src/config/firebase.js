import firebase from '@react-native-firebase/app'

const firebaseConfig = {
   apiKey: 'AIzaSyDoLW7vgtc1y9MFB1RzROkpouTl4plVSwQ',
   authDomain: 'live-chat-api-9dc86.firebaseapp.com',
   databaseURL: 'https://live-chat-api-9dc86.firebaseio.com',
   projectId: 'live-chat-api-9dc86',
   storageBucket: 'live-chat-api-9dc86.appspot.com',
   messagingSenderId: '674287683753',
   appId: '1:674287683753:web:1c388a2a89d8e9255301b8',
   measurementId: 'G-58NT2PB4Q2',
}

function firebaseInitial() {
   if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
   }
}

export { firebaseConfig, firebaseInitial }
