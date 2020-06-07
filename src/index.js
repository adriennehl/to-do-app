import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyBLavqkjJQ0fVxXj3g_t4QGu9qEG0IBYEA",
  authDomain: "starter-project-67351.firebaseapp.com",
  databaseURL: "https://starter-project-67351.firebaseio.com",
  projectId: "starter-project-67351",
  storageBucket: "starter-project-67351.appspot.com",
  messagingSenderId: "841850054006",
  appId: "1:841850054006:web:90e86f1a6a1ca5a0ea0657",
  measurementId: "G-3V0588RKB3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  console.log(document.getElementById('noteCard'))
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
