import React, {Component} from 'react';
import Header from  '../components/Header';
import Footer from '../components/Footer';
import ChatSystem from './ChatSystem';
import * as firebase from 'firebase';
import {getToken} from '../actions'
import {connect} from 'react-redux'

class App extends Component {
    constructor() {
        super();
        this.state = {
            'isLoggedIn': false
        }
    }


    login(token) {
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

    componentWillReceiveProps(nextProps) {
        if (this.state.isLoggedIn) {
            return false;
        }

        let token = nextProps.token;
        this.logout();
        this.login(token);
        return true;
    }

    componentWillMount() {
        //call action getToken with userId = 27
        let uid = window.location.hash.replace('#', '');
        this.props.dispatch(getToken(uid));
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
function mapStateToProps(state) {
    return state.app
}
export default connect(mapStateToProps)(App)