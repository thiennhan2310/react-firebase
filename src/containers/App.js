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
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uZ215bEBsdnRuLWQxNzUzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbmdteWxAbHZ0bi1kMTc1My5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaWF0IjoxNDkwNTQyMjgwLCJleHAiOjE0OTA1NDU4ODAsInVpZCI6IjI3In0.RwNmtlqRiyDfEzyPppS33h10NQFBi4XOD5Nv9g5Yui7D7PfWRc5BtgDiG6b0Ulowhq5Iu1dPmxxdUONtb0iqsa1i3ez0fv_l04xa6IDxhGVaDFW7yTBfRh7-Llv0m9U1YfZ9JuW1td_VEVyZUmoONL_cjZdLOycdzqH15Uo-mIsUwvQlEIvFGGkSnSI-8yarqaVvWvmLyvq7YeLnExdzNb2gBDMSumDzHUUADIpeFVmoTWtGh32DkWJumeOmUrsMWnpuaJT_mP-xsTK4fgs9_HhEJ_3K-ruzmpse9TjiX6XEvfqtZsCVft-45Aj7ELsLS8rtJljr7Lx2YPkq9xNTXA";

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
