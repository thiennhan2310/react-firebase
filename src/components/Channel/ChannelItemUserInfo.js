import React from "react";
import {connect} from "react-redux";
import * as firebase from "firebase";
import {getUserInfomation} from "../../actions/user";

class ChannelItemUserInfo extends React.Component {

    // var onlineStatus = 'offline';
    constructor(props) {
        super(props);
        this.state = {
            'currentUserId': firebase.auth().currentUser.uid,
            'userInfo':  props.userInfo,
            'isOnline': 'offline',
            'recieverId': ''
        }

    }

    componentWillMount () {
        if (this.props.userInThisChannel != undefined) {

            let userInThisChannel = this.props.userInThisChannel;
            let keys = Object.keys(userInThisChannel)
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] !== this.state.currentUserId) {
                    let recieverId = keys[i];
                    this.setState ( { 'isOnline': (userInThisChannel[keys[i]]) ? 'online' : 'offline' } );
                    this.setState ( { 'recieverId': recieverId} );
                    this.props.dispatch(getUserInfomation(recieverId));
                }
                // console.log(keys[i]);
                // console.log(this.state.userInfo);
            }
        }
    }


    componentDidMount() {

    }



    render() {
        // var dataViewForRender = this.prepareDataForRender(this.state.userInfo)\
        let recieverId = this.state.recieverId;
        let fullName = '';
        let isOnline = 'offline';
        let avatar = '';
        if ( (this.props.userList) && this.props.userList[recieverId] != undefined) {
            fullName = this.props.userList[recieverId]['fullName'];
            isOnline = (this.props.userList[recieverId]['isOnline']) ? 'online' : 'offline';
            avatar = this.props.userList[recieverId]['avatar'];
            // console.log(fullName);
        }
        return  (
            <div>
                <div className="avatar-of-channel" style={{ background: "url("+avatar+")" }}></div>
                <div className="line__info-channel">
                    <i className={ "status-of-channel fa fa-circle " + isOnline } aria-hidden="true"></i>
                    <h5 className="name-of-channel">{ fullName }</h5>
                    <span className="number-of-channel-mesg badge">2</span>
                </div>
            </div>
        )


    }
}

function mapStateToProps(state) {
    //console.log(state);
    return state.users
}

export default connect(mapStateToProps)(ChannelItemUserInfo)
