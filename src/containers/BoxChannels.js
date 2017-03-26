import React, {Component} from 'react';
import ChannelList from  '../components/Channel/ChannelList';
import ChannelHeader from '../components/Channel/ChannelHeader'

class BoxChannels extends Component {
    render() {
        return (
            <div className="primus-chat-system__box-left primus-chat-system__box-channels">
                <ChannelHeader/>
                <ChannelList />
            </div>
        )
    }
}

export default BoxChannels;