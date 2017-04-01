import React, {Component} from 'react';
import ChannelList from  '../components/channel/ChannelList';
import ChannelHeader from '../components/channel/ChannelHeader'

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
