import React from 'react';
import ChatItem from  './ChannelItem'
import {connect} from 'react-redux'
import {selectChannel} from '../../actions'
class ChannelList extends React.Component {
    render() {
        return (
            <div className="primus-chat-system__box-left-content primus-chat-system__box-list-channel">
                <ChatItem channelId='aaaa'/>
                <ChatItem channelId='bbb'/>
            </div>
        )
    }
}

export default ChannelList;