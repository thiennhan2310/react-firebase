import React from 'react';
import moment from "moment";
import * as firebase from 'firebase';

class MesgsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'fullName': '',
            'companyName': '',
            'lastActivated': '',
            'isOnline': false,
            'avatar': 'http://bootdey.com/img/Content/avatar/avatar1.png'
        };

    }

    componentWillMount() {
        const rootRef = firebase.database().ref('users');
        const speedRef = rootRef.child("27");

        speedRef.on('value', snap => {
            snap = snap.val();
            this.setState({'fullName': snap.fullName});
            this.setState({'companyName': snap.companyName});
            this.setState({'professionnalHeadline': snap.professionnalHeadline});
            this.setState({'isOnline': snap.isOnline});
        })
    }

    render() {
        return (
            <div className="primus-chat-system__box-mesgs-header">
                <div className="primus-chat-system__box-desc-channel">
                    <div style={{background: "url(" + this.state.avatar + ")"}} className="avatar-of-channel"></div>
                    <h4 className="name-of-channel">{this.state.fullName}
                        <i className={"status-of-channel fa fa-circle " + (this.state.isOnline ? 'online' : 'offline')} aria-hidden="true"/>
                    </h4>
                    <p className="company-of-channel color-orange">from
                        <b className="company-name">{this.state.companyName}</b></p>
                    <p className="last-time-onl-of-channel color-orange">Last time online
                        <b className="last-time">{this.state.lastActivated ? moment(this.state.lastActivated).format('DD MMM YYYY') : ''}</b>
                    </p>
                </div>
            </div>
        )
    }
}

export default MesgsHeader;