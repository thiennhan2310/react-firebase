import React, {Component} from 'react';
// import Header from  '../components/Header';
// import Footer from '../components/Footer';
import ChatSystem from './ChatSystem';
import * as firebase from 'firebase';
import {login} from '../actions'
import {connect} from 'react-redux'
import {getUserInfomation} from '../actions/user'

class App extends Component {
    componentWillMount() {
        this.props.dispatch(login());
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div>
                    <ChatSystem/>
                {/*  <Footer/>*/ }
                </div>
            );
        } else {
            return (<div></div>); //loading wait till login success
        }

    }


}
function mapStateToProps(state) {
    return {
      isLoggedIn: state.app.isLoggedIn
    }
}
export default connect(mapStateToProps)(App)
