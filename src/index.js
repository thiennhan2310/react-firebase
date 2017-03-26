import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC_nKaX1SYoz12dBiCr4VaNVjuQB0Qjhfc",
    authDomain: "lvtn-d1753.firebaseapp.com",
    databaseURL: "https://lvtn-d1753.firebaseio.com",
    storageBucket: "lvtn-d1753.appspot.com",
};
firebase.initializeApp(config);


ReactDOM.render(
    <App />,
    document.getElementById('primus-chat-system-root')
);
