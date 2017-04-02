import React from 'react';
import moment from "moment";
import * as firebase from 'firebase';
import FirebaseAvatar from '../../containers/FirebaseAvatar'

class MessagItem extends React.Component {

    constructor() {
        super();

        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead() {
        const messageRef = firebase.database().ref('messages/' + this.props.channelId+ '/'+this.props.messageId);
        messageRef.update({'isRead': true});
    }

    componentDidMount() {
        if (!this.props.messageData.isRead && !this.props.isFromMe) {
            setInterval(this.markAsRead(), 1000);
        }
    }


    render() {
        let showImgForUnReadOrRead = (this.props.messageData.isRead) ? 'ico-read' : 'ico-unread';
        return (
            <div className={"primus-chat-system__box-list-mesgs-item " + (this.props.isFromMe ? 'me' : 'you')}>
                {this.props.isShowAvatar ? <FirebaseAvatar userId={this.props.messageData.from} class_name={"avatar-circle"}/> : ''}
                <div className="mesgs-line">
                    <div className="mesg">
                        <span className="mesg-content">{this.props.messageData.message}</span>
                        <div className="mesg-status">
                             {this.props.isFromMe === true ? <span className="mesg-status-read" ><img alt="" src={ "/assets/img/" + showImgForUnReadOrRead+".svg" } width="13" /> </span> : ''}
                            <span className="mesg-time">{moment(this.props.messageData.createdAt).format('LT')}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default MessagItem;
