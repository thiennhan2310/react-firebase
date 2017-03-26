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
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uZ215bEBsdnRuLWQxNzUzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbmdteWxAbHZ0bi1kMTc1My5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaWF0IjoxNDkwNDk5MDA5LCJleHAiOjE0OTA1MDI2MDksInVpZCI6IjI3In0.XsGmPu-XNWR5k7k0-0rmizZrBS-SyWgJ4HgHBgdpjN7f12wMXRTdrhmKmC_kVeoFB3ALf59yxyx9OrP3Nu7_PBPY0C2t8klDUnbrFKfSuJb7yCP4YQrR_wv9V5HL_lqqZqDFsEbFei_Wvcnl4ioC2TX9iwdOIzu9KLIc6k-uC2BTZdV18MJux7wy2FxbotKB95W9SKhEiKMjqIM90slr6porhZji9YO0KZiiJnjOD154C0GByxhoJkMDOoy8-CFNTBJGMXlK32Rl2SjWlmHpliyDHIvSQOvNBeX_AncRLdmzFNp59Wf2kT3qVYMxZe4QwyUQhS92MwvYuRgRT6KmEg";

        firebase.auth().signInWithCustomToken(token).catch(function (error) {
            // Handle Errors here.
            console.log(error);
        });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({'isLoggedIn': true});
                this.onConnect();
                this.onDisconnect();
            } else {
                // No user is signed in.
            }
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
            console.log(snap.val());
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
