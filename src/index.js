import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';
import messageApp from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC_nKaX1SYoz12dBiCr4VaNVjuQB0Qjhfc",
    authDomain: "lvtn-d1753.firebaseapp.com",
    databaseURL: "https://lvtn-d1753.firebaseio.com",
    storageBucket: "lvtn-d1753.appspot.com",
};
firebase.initializeApp(config);

let store = createStore(messageApp, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('primus-chat-system-root')
);
