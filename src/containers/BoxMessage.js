import React, {Component} from 'react';
import MessageHeader from './Message/MessageHeader'
import MessagesBoxSend from './Message/MessagesBoxSend'
import MessageList from './Message/MessageList'
import {connect} from 'react-redux'
import {setReceiverInfo} from '../actions/user'
class BoxMessage extends Component {

    componentWillReceiveProps(nextProps) {
        let selectedChannelId = nextProps.channels.selectedChannelId;
        if (this.props.channels.selectedChannelId !== selectedChannelId || Object.keys(this.props.users.receiverInfo).length === 0) {
            let userInSelectedChannelId = nextProps.channels.channelList[selectedChannelId]['user'];
            let receiverId = Object.keys(userInSelectedChannelId).filter((userId) => {
                return userId != this.props.app.currentUserId;
            })[0];

            let receiverInfo = nextProps.users.userList[receiverId];
            if (receiverInfo !== undefined) {
                this.props.dispatch(setReceiverInfo(receiverId, receiverInfo))
            }
        }
    }


    render() {
        if (this.props.channels.selectedChannelId !== '') {
            return (
                <div className="primus-chat-system__box-right primus-chat-system__box-mesgs"
                     id="primus-chat-system__box-right">
                    <MessageHeader />
                    <MessageList/>
                    <MessagesBoxSend/>
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
    return {channels: state.channels, app: state.app, users: state.users}
}

export default connect(mapStateToProps)(BoxMessage);
