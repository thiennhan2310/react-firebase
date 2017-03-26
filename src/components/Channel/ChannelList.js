import React from 'react';
import ChatItem from  './ChannelItem'

class ChannelList extends React.Component {

    render() {
        return (
            <div className="primus-chat-system__box-left-content primus-chat-system__box-list-channel">
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
            </div>
        )
    }
}

export default ChannelList;