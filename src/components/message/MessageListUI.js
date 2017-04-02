import React from 'react';
import MesgsItem from './MessagItemUI'

class MessageListUI extends React.Component {

    isFromMe(from) {
        return from === this.props.currentUserId;
    }

    isShowAvatar(currentMess, nextMess) {
        if (nextMess === undefined) {
            //current Message is the last message
            return true;
        }

        let nextMessFrom = nextMess.from;
        let currentMessFrom = currentMess.from;

        return nextMessFrom !== currentMessFrom;
    }

    render() {
        let keys = Object.keys(this.props.messages);
        let messObj = this.props.messages;
        let listMessage = [];

        if (keys.length > 0) {
            for (let i = 0; i < keys.length; i++) {
                let isShowAvatar = this.isShowAvatar(messObj[keys[i]], messObj[keys[i + 1]]);
                let isFromMe = this.isFromMe(messObj[keys[i]].from);
                listMessage.push(
                    <MesgsItem key={keys[i]}
                               messageData={messObj[keys[i]]}
                               messageId = {keys[i]}
                               isShowAvatar={isShowAvatar}
                               isFromMe={isFromMe}
                    />);
            }

            setTimeout(function () {
                let objDiv = document.getElementById("primus-chat-system__box-list-mesgs");
                objDiv.scrollTop = objDiv.scrollHeight;
            }, 100);
        }
        return (
            <div className="primus-chat-system__box-list-mesgs" id="primus-chat-system__box-list-mesgs">
                {listMessage}
            </div>
        )
    }
}


export default MessageListUI;
