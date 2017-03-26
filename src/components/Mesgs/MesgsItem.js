import React from 'react';
import moment from "moment";
import * as firebase from 'firebase';

class MesgsItem extends React.Component {

    constructor() {
        super();

        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead() {
        const channelRef = firebase.database().ref('messages/' + this.props.channelId);
        const childref = channelRef.child(this.props.messageId);
        childref.update({'isRead': true});
    }

    componentDidMount() {
        if (!this.props.isRead) {
            setInterval(this.markAsRead(), 1000);
        }
    }


    render() {
        return (
            < div className={"primus-chat-system__box-list-mesgs-item " + (this.props.isFromMe ? 'me' : 'you')}>
                {this.props.isShowAvatar ?
                    <div style={{background: "url(http://bootdey.com/img/Content/avatar/avatar1.png)"}}
                         className="avatar-circle"></div> : ''}
                <div className="mesgs">
                    <div className="mesgs-line">
                        <div className="mesg">
                            <span className="mesg-content">{this.props.messageData.message}</span>
                            <div className="mesg-status">
                                <span
                                    className="mesg-time">{moment(this.props.messageData.createdAt).format('LT')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default MesgsItem;