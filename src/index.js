import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import * as firebase from 'firebase';
import messageApp from './reducers/index';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import MessageComponent from './components/NotificationMessage';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC_nKaX1SYoz12dBiCr4VaNVjuQB0Qjhfc",
    authDomain: "lvtn-d1753.firebaseapp.com",
    databaseURL: "https://lvtn-d1753.firebaseio.com",
    storageBucket: "lvtn-d1753.appspot.com",
};


firebase.initializeApp(config);

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}


let store = createStore(messageApp, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('primus-chat-system-root')
);


ReactDOM.render(
    <Provider store={store}>
        <MessageComponent />
    </Provider>,
    document.getElementById('primus-chat-system-notification-component')
);
