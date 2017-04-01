import React from 'react';
import moment from "moment";
// import * as firebase from 'firebase';
// import {connect} from 'react-redux'
// import Avatar from '../Avatar'

class MessageHeaderUI extends React.Component {

    render() {
        return (
            <div className="primus-chat-system__box-mesgs-header">
                <div className="primus-chat-system__box-desc-channel">
                    <div style={{background: "url(" + this.props.receiverInfo.avatar + ")"}}
                         className="avatar-of-channel"></div>
                    {/*<Avatar userId='27'/>*/}
                    <h4 className="name-of-channel">{this.props.receiverInfo.fullName + " "}
                        <i className={"status-of-channel fa fa-circle " + (this.props.receiverInfo.isOnline ? 'online' : 'offline')}
                           aria-hidden="true"/>
                    </h4>
                    <p className="company-of-channel color-orange">from
                        <b className="company-name">{" " + this.props.receiverInfo.companyName}</b></p>
                    <p className="last-time-onl-of-channel color-orange">Last time online
                        <b className="last-time"> {moment(this.props.receiverInfo.lastActivated).format('DD MMM YYYY')}</b>
                    </p>
                </div>
            </div>
        )
    }
}

export default MessageHeaderUI;
