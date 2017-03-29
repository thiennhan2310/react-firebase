import React, {Component} from 'react';
import MesgsHeader from '../components/Mesgs/MesgsHeader'
import MesgsBoxSend from '../components/Mesgs/MesgsBoxSend'
import MesgsList from '../components/Mesgs/MesgsList'
import {connect} from 'react-redux'
import * as firebase from 'firebase';

class BoxMesgs extends Component {

    getReceiverInfo() {
        let selectedChannelId = this.props.channels.selectedChannelId;
        let userInThisChannel = this.props.channels.channelList[selectedChannelId]['user'];
        userInThisChannel = Object.keys(userInThisChannel);
        let currentUserId = firebase.auth().currentUser.uid;
        let receiverId = (userInThisChannel[0] != currentUserId) ? userInThisChannel[0] : userInThisChannel[1];

        let receiverInfo = this.props.users.userList[receiverId];
        return receiverInfo;
    }

    render() {
        if (this.props.channels.selectedChannelId !== '') {
            return (
                <div className="primus-chat-system__box-right primus-chat-system__box-mesgs"
                     id="primus-chat-system__box-right">
                    <MesgsHeader receiverInfo={this.getReceiverInfo()}/>
                    <MesgsList/>
                    <MesgsBoxSend/>
                </div>
            )
        } else {
            return (
                <div className="primus-chat-system__box-right primus-chat-system__box-mesgs"
                     id="primus-chat-system__box-right">
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    return {channels: state.channels, users: state.users}
}

export default connect(mapStateToProps)(BoxMesgs);
// export default BoxMesgs;
