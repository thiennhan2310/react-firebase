import React from 'react';
import * as firebase from 'firebase';

class MesgsBoxSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'newMessage': '',
            'userId': firebase.auth().currentUser.uid
        };
        this.typingMessage = this.typingMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        let message = this.state.newMessage;
        if (message !== '') {
            let channel = 'channel1adsfasdfwerqwer';
            if (channel === '') {
                channel = firebase.database().ref('messages').push().key;
            }

            firebase.database().ref('messages/' + channel).push({
                createdAt: new Date().toISOString(),
                from: this.state.userId,
                isRead: false,
                message: message
            });

            this.setState({'newMessage': ''});
        }

    }

    typingMessage(e) {
        this.setState({'newMessage': e.target.value})
    }


    render() {
        return (
            <div className="primus-chat-system__box-send form-group">
                <input type="text" className="form-control primus-chat-system__box-content" onChange={this.typingMessage} value={this.state.newMessage}/>
                <button className="btn btn-send-mesg color-orange-light" onClick={this.sendMessage} disabled={this.state.newMessage === ''}>
                    Send
                </button>
            </div>
        )
    }
}

export default MesgsBoxSend;