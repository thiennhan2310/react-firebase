import React from 'react';
import * as firebase from 'firebase';
import {connect} from 'react-redux'

class MesgsBoxSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'newMessage': '',
            'userId': firebase.auth().currentUser.uid
        };
        this.typingMessage = this.typingMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    sendMessage() {
        let message = this.state.newMessage;
        if (message !== '') {
            let channelId = this.props.selectedChannelId;
            if (channelId === '') {
                channelId = firebase.database().ref('messages').push({
                    lastMessage: message,
                    lastMessageFrom: this.state.userId,
                    lastMessageTime: new Date().toISOString(),
                    user: {
                        [this.state.userId]: true,
                        'user-222': true
                    }
                }).key;
            }

            firebase.database().ref('messages/' + channelId).push({
                createdAt: new Date().toISOString(),
                from: this.state.userId,
                isRead: false,
                message: message
            });

            firebase.database().ref('channels/' + channelId).update({
                lastMessage: message,
                lastMessageFrom: this.state.userId,
                lastMessageTime: new Date().toISOString(),
            });

            this.setState({'newMessage': ''});
            console.log(this.state);
        }

    }

    typingMessage(e) {
        this.setState({'newMessage': e.target.value})
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
          this.sendMessage();
        }
    }

    render() {
        return (
            <div className="primus-chat-system__box-send form-group">
                <input type="text" className="form-control primus-chat-system__box-content"
                       onChange={this.typingMessage} value={this.state.newMessage} onKeyPress={this.handleKeyPress}/>
                <button className="btn btn-send-mesg color-orange-light" onClick={this.sendMessage}
                        disabled={this.state.newMessage === ''}>
                    Send
                </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.channels;
}

export default connect(mapStateToProps)(MesgsBoxSend);
