import React from 'react';
import * as firebase from 'firebase';
import {connect} from 'react-redux'

class MesgsBoxSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'newMessage': '',
            'userId': firebase.auth().currentUser.uid,
            'heightBox': 0,
            'numberOfLineBreaks': 0
        };
        this.typingMessage = this.typingMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions(){
        let windowW = window.innerWidth;
        let numberOfLineBreaks = this.state.numberOfLineBreaks;
        if(windowW < 767){
            this.setState({'heightBox': 40 + 30*numberOfLineBreaks});
        }else{
            this.setState({'heightBox': 60 + 20*numberOfLineBreaks});
        }
    }
    componentWillMount(){
        this.updateDimensions();
    }
    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

    sendMessage() {
        let message = this.state.newMessage.trim();
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
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                from: this.state.userId,
                isRead: false,
                message: message
            });

            firebase.database().ref('channels/' + channelId).update({
                lastMessage: message,
                lastMessageFrom: this.state.userId,
                lastMessageTime: firebase.database.ServerValue.TIMESTAMP,
            });

            this.setState({'newMessage': ''});
        }
    }

    typingMessage(e) {
        this.setState({'newMessage': e.target.value});

        let enteredText = e.target.value;
        let numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;
        let heightBox = this.state.heightBox;
        heightBox = 60 + (30 * numberOfLineBreaks);

        this.setState({'numberOfLineBreaks': numberOfLineBreaks});
        this.setState({'heightBox': heightBox});
    }

    handleKeyPress(e) {
        let message = this.state.newMessage.trim();
        if (e.nativeEvent.keyCode === 13) {  
            if(e.nativeEvent.shiftKey){
                this.sendMessage();
                if(message !== ''){
                    let windowW = window.innerWidth;
                    if(windowW < 767){
                        this.setState({'heightBox': 40, 'numberOfLineBreaks': 0});
                    }else{
                        this.setState({'heightBox': 60, 'numberOfLineBreaks': 0});
                    }
                }
            }
        }
    }

    render() {
        return (
            <div className="primus-chat-system__box-send form-group">
                <textarea type="text" style={{height: this.state.heightBox}} className="form-control primus-chat-system__box-content" placeholder="Write your message..."
                       onChange={this.typingMessage} value={this.state.newMessage} onKeyUp={this.handleKeyPress} />
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
