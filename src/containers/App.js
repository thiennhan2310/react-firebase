import React, {Component} from 'react';
import Header from  '../components/Header';
import Footer from '../components/Footer';
import ChatSystem from './ChatSystem';
import * as firebase from 'firebase';


class App extends Component {
    constructor() {
        super();
        this.state = {
            'isLoggedIn': false
        }
    }

    login() {
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uZ215bEBsdnRuLWQxNzUzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbmdteWxAbHZ0bi1kMTc1My5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaWF0IjoxNDkwNTM1Njg2LCJleHAiOjE0OTA1MzkyODYsInVpZCI6IjI3In0.CnoIjyaM9Lnsqrwiw0-DMtxVC77jCsxEXX9VfPCw9VGGZ8z5Su8OZhLubGlKKPj0Uj17He5BVxQxutxETSCPaoolc5NNXrYbltr757k6u2-BWLo8-f2WbwOBPD_k_BV0aEEOeYUUvjQg-xsueVft22_5rYl5-_lMCN-7WJ7_RXxjUy9l7jDoMey96NVH8mtZvsnhvMKQMA4muGNPFL1MUwq1PvfmJ3j3N2aktGrx5tHNb1VzZUf-L0NecnStg-gl__MBwzpi1xatvPwl4-1c2yGqOJuw_1wcitYDYC1t-U0CFL57SPZx-O_6Bb_fALIHblAttjRoaSsObjGJ9Ym1NQ";

        firebase.auth().signInWithCustomToken(token).then(success => {
            this.setState({'isLoggedIn': true});
            this.onConnect();
            this.onDisconnect();
        }, function (error) {
            // Handle Errors here.
            console.log(error);
        });

    }

    logout() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    onDisconnect() {
        let presenceRef = firebase.database().ref("users").child(firebase.auth().currentUser.uid);
        presenceRef.onDisconnect().update({'isOnline': false});
    }

    onConnect() {
        let presenceRef = firebase.database().ref("users").child(firebase.auth().currentUser.uid);
        presenceRef.update({'isOnline': true});

        var connectedRef = firebase.database().ref(".info/connected");
        connectedRef.on("value", function (snap) {
        });
    }

    componentDidMount() {
        this.login();

    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <Header />

                    <ChatSystem/>

                    <Footer/>
                </div>
            );
        } else {
            return (<div></div>); //loading wait till login success
        }

    }


}

export default App;
