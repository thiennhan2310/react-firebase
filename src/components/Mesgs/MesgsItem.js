import React from 'react';
import moment from "moment";

class MesgsItem extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isPrevMessageHasSameSender: false // need redux here ?
        }
    }

    isFromMe(messageData) {
        return (messageData.from === 'user-111')
    }


    render() {
        const isFromMe = this.isFromMe(this.props.messageData);

        return (
            < div className={"primus-chat-system__box-list-mesgs-item " + (isFromMe ? 'me' : 'you')}>
                <div style={{background: "url(http://bootdey.com/img/Content/avatar/avatar1.png)"}}
                     className="avatar-circle"></div>
                <div className="mesgs">
                    <div className="mesgs-line">
                        <div className="mesg">
                            <span className="mesg-content">{this.props.messageData.message} </span>
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