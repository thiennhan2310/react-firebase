import axios from 'axios';
import * as firebase from 'firebase';
import {HTTP_ENDPOINT} from '../config/index';
import {getCurrentUser} from './user';
import {SET_TOKEN} from './app';

const setToken = (token) => {
    return {
        type: SET_TOKEN,
        token: token
    }
}



export function login() {
  return (dispatch) => {
    getToken(function(token) {
      firebase.auth().signInWithCustomToken(token).then(success => {
          // this.setState({'isLoggedIn': true});
          onConnect();
          onDisconnect();
          let uid = firebase.auth().currentUser.uid;
          dispatch(getCurrentUser(uid));
          // this.props.dispatch(getUserInfomation(firebase.auth().currentUser.uid));
      }, function (error) {
          // Handle Errors here.
          console.log(error);
      });
    })
  }
}

function getToken(done) {
    // first parameter allway is dispatch for call another function


        let getUserTokenUrl = HTTP_ENDPOINT || 'https://restful-node-mongo.herokuapp.com/user/token/67';

        axios.get(getUserTokenUrl)
          .then(function (response) {
            console.log(response);
            let token = response.data.token || response.data.data.token
            // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uZ215bEBsdnRuLWQxNzUzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbmdteWxAbHZ0bi1kMTc1My5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOlwvXC9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb21cL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaWF0IjoxNDkwODY4MjIyLCJleHAiOjE0OTA5NTQ2MjIsInVpZCI6Mjd9.p7vnc67ndgOOuNVSIFL1e55tGK_Rs6xKo4p8gtn05_pHcEjNQHY9vAjYh1t0Sx-IICiIW2vg8zX_MAEoKcsKSNxacAhWq-0BdEHBaCIZnby7kzuLCk3X9OPrg8YRPDkSc6GzFWYkBJzmtzb8nIkPkonKRbkJ1dX7hZIFxgwCBrq0V3SouojLRTLsMPIjlyEU9Y-Ujil41lxbvN3JMd9RXKDP1lPlnhueb-0CPL34UqYN6tyWzlYtt5VyXk__nI8jrawPoZix_fq9wO-gBn2GUXZlUMomFSaJqjoLBFlo5eP-w0fpK6jtroij2LwxWOr2fmHqMaGDtLfufgqtO79FFw"
            done(token);
          })

          .catch(function (error) {
            console.log(error);
          });

}
/*****/
// login(token) {
//     firebase.auth().signInWithCustomToken(token).then(success => {
//         this.setState({'isLoggedIn': true});
//         this.onConnect();
//         this.onDisconnect();
//         this.props.dispatch(getUserInfomation(firebase.auth().currentUser.uid));
//     }, function (error) {
//         // Handle Errors here.
//         console.log(error);
//     });
//
// }

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}

function onDisconnect() {
    let presenceRef = firebase.database().ref("users").child(firebase.auth().currentUser.uid);
    presenceRef.onDisconnect().update({'isOnline': false});
}

function onConnect() {
    let presenceRef = firebase.database().ref("users").child(firebase.auth().currentUser.uid);
    presenceRef.update({'isOnline': true});

    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function (snap) {
    });
}




/****/

// export function getToken(done) {
//     // first parameter allway is dispatch for call another function
//
//     return (dispatch) => {
//         //return fetch('https://restful-node-mongo.herokuapp.com/user/token/' + userId)
//         // if (getUserTokenUrl === undefined) {
//         //     getUserTokenUrl = 'https://restful-node-mongo.herokuapp.com/user/token/'
//         // }
//         // console.log(getUserToken);
//         // return fetch('/get-user-token')
//         //     .then(response => response.json())
//         //     .then(json => {
//         //         dispatch(setToken(json.data.token))
//         //     })
//         let getUserTokenUrl = getUserTokenUrl || 'https://restful-node-mongo.herokuapp.com/user/token/' + userId;
//         axios.get(getUserTokenUrl)
//           .then(function (response) {
//             console.log(response);
//             let token = response.data.token || response.data.data.token
//             // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uZ215bEBsdnRuLWQxNzUzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbmdteWxAbHZ0bi1kMTc1My5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOlwvXC9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb21cL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaWF0IjoxNDkwODY4MjIyLCJleHAiOjE0OTA5NTQ2MjIsInVpZCI6Mjd9.p7vnc67ndgOOuNVSIFL1e55tGK_Rs6xKo4p8gtn05_pHcEjNQHY9vAjYh1t0Sx-IICiIW2vg8zX_MAEoKcsKSNxacAhWq-0BdEHBaCIZnby7kzuLCk3X9OPrg8YRPDkSc6GzFWYkBJzmtzb8nIkPkonKRbkJ1dX7hZIFxgwCBrq0V3SouojLRTLsMPIjlyEU9Y-Ujil41lxbvN3JMd9RXKDP1lPlnhueb-0CPL34UqYN6tyWzlYtt5VyXk__nI8jrawPoZix_fq9wO-gBn2GUXZlUMomFSaJqjoLBFlo5eP-w0fpK6jtroij2LwxWOr2fmHqMaGDtLfufgqtO79FFw"
//             dispatch(setToken(token))
//           })
//
//           .catch(function (error) {
//             console.log(error);
//           });
//
//
//     }
// }
