import React, {Component} from 'react';
import MessageHeader from './Message/MessageHeader'
import MessagesBoxSend from './Message/MessagesBoxSend'
import MessageList from './Message/MessageList'
import {connect} from 'react-redux'

class BoxMessage extends Component {

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
    return {channels: state.channels}
}

export default connect(mapStateToProps)(BoxMessage);
